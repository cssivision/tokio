extern crate futures;
extern crate tokio;
extern crate tokio_io;

use std::net::TcpStream;
use std::thread;
use std::io::{Write, Read};

use futures::Future;
use futures::future::blocking;
use futures::stream::Stream;
use tokio_io::io::read_to_end;
use tokio::net::TcpListener;

macro_rules! t {
    ($e:expr) => (match $e {
        Ok(e) => e,
        Err(e) => panic!("{} failed with {:?}", stringify!($e), e),
    })
}

#[test]
fn chain_clients() {
    let srv = t!(TcpListener::bind(&t!("127.0.0.1:0".parse())));
    let addr = t!(srv.local_addr());

    let t = thread::spawn(move || {
        let mut s1 = TcpStream::connect(&addr).unwrap();
        s1.write_all(b"foo ").unwrap();
        let mut s2 = TcpStream::connect(&addr).unwrap();
        s2.write_all(b"bar ").unwrap();
        let mut s3 = TcpStream::connect(&addr).unwrap();
        s3.write_all(b"baz").unwrap();
    });

    let clients = srv.incoming().map(|e| e.0).take(3);
    let copied = clients.collect().and_then(|clients| {
        let mut clients = clients.into_iter();
        let a = clients.next().unwrap();
        let b = clients.next().unwrap();
        let c = clients.next().unwrap();

        read_to_end(a.chain(b).chain(c), Vec::new())
    });

    let (_, data) = t!(blocking(copied).wait());
    t.join().unwrap();

    assert_eq!(data, b"foo bar baz");
}
