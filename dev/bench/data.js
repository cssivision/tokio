window.BENCHMARK_DATA = {
  "lastUpdate": 1607655518527,
  "repoUrl": "https://github.com/cssivision/tokio",
  "entries": {
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/cssivision/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605756324137,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1001,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15217,
            "range": "± 4714",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1048,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15274,
            "range": "± 3762",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 574,
            "range": "± 77",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "38d095798250f0b56a60df9309d985ddf27acef2",
          "message": "util: fix typo",
          "timestamp": "2020-11-19T11:23:28+08:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/cssivision/tokio/commit/38d095798250f0b56a60df9309d985ddf27acef2"
        },
        "date": 1605756827759,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1055,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14655,
            "range": "± 5145",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1099,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15692,
            "range": "± 8639",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 610,
            "range": "± 8",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0acd06b42a9d1461302388f2a533e86d391d6040",
          "message": "runtime: fix shutdown_timeout(0) blocking (#3174)",
          "timestamp": "2020-11-28T19:31:13+01:00",
          "tree_id": "c17e5d58e10ee419e492cb831843c3f08e1f66d8",
          "url": "https://github.com/cssivision/tokio/commit/0acd06b42a9d1461302388f2a533e86d391d6040"
        },
        "date": 1606638651928,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 959,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16398,
            "range": "± 5469",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1030,
            "range": "± 314",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16559,
            "range": "± 6249",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 561,
            "range": "± 110",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "asomers@gmail.com",
            "name": "Alan Somers",
            "username": "asomers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7ae8135b62057be6b1691f04b27eabe285b05efd",
          "message": "process: fix the process_kill_on_drop.rs test on non-Linux systems (#3203)\n\n\"disown\" is a bash builtin, not part of POSIX sh.",
          "timestamp": "2020-12-01T10:20:49+09:00",
          "tree_id": "8b211b0f9807692d77be8a64a4835718355afe7b",
          "url": "https://github.com/cssivision/tokio/commit/7ae8135b62057be6b1691f04b27eabe285b05efd"
        },
        "date": 1606790247744,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 946,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16047,
            "range": "± 5791",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1005,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16080,
            "range": "± 7407",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 549,
            "range": "± 130",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "e69dc7afa706455d53aba777eecf1c61fe6467c6",
          "message": "example: add back udp-codec example",
          "timestamp": "2020-12-01T10:40:43+08:00",
          "tree_id": "b18851ef95641ab2e2d1f632e2ce39cb1fcb1301",
          "url": "https://github.com/cssivision/tokio/commit/e69dc7afa706455d53aba777eecf1c61fe6467c6"
        },
        "date": 1606790565406,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1088,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15674,
            "range": "± 4606",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 985,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15956,
            "range": "± 5739",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 544,
            "range": "± 58",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "razican@protonmail.ch",
            "name": "Iban Eguia",
            "username": "Razican"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0dbba139848de6a8ee88350cc7fc48d0b05016c5",
          "message": "deps: replace lazy_static with once_cell (#3187)",
          "timestamp": "2020-12-04T10:23:13+01:00",
          "tree_id": "73f3366b9c7a0c50d6dd146a2626368cf59b3178",
          "url": "https://github.com/cssivision/tokio/commit/0dbba139848de6a8ee88350cc7fc48d0b05016c5"
        },
        "date": 1607136761638,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 726,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13481,
            "range": "± 4307",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 729,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13105,
            "range": "± 3936",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 438,
            "range": "± 140",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "def858f007e5803a34d1c98e56837b2c63c29d09",
          "message": "net: expose poll_* methods on UnixDatagram",
          "timestamp": "2020-12-07T16:50:42+08:00",
          "tree_id": "8d85d170f67ff5a6837ce972b8b83b4637ecbf94",
          "url": "https://github.com/cssivision/tokio/commit/def858f007e5803a34d1c98e56837b2c63c29d09"
        },
        "date": 1607331318198,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 843,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15682,
            "range": "± 4964",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 781,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14480,
            "range": "± 3504",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 476,
            "range": "± 72",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "d0b74f218b8881a04db374920223a21adc774988",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T18:39:29+08:00",
          "tree_id": "a917f867830ce64aa5ee00f3191d86492ee6cde4",
          "url": "https://github.com/cssivision/tokio/commit/d0b74f218b8881a04db374920223a21adc774988"
        },
        "date": 1607337895389,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1000,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14152,
            "range": "± 3897",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1002,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15149,
            "range": "± 5297",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 594,
            "range": "± 59",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "91b94658ef56a28ceb44d1e90905b4e01013013c",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T18:40:50+08:00",
          "tree_id": "a917f867830ce64aa5ee00f3191d86492ee6cde4",
          "url": "https://github.com/cssivision/tokio/commit/91b94658ef56a28ceb44d1e90905b4e01013013c"
        },
        "date": 1607337928039,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1010,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14667,
            "range": "± 3822",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1035,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14945,
            "range": "± 4165",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 589,
            "range": "± 48",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "1b7e98a6b292058d0588c613341a30311f8a9420",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T18:48:29+08:00",
          "tree_id": "135a0ed2aa71ed1523e6076c11ce456090042680",
          "url": "https://github.com/cssivision/tokio/commit/1b7e98a6b292058d0588c613341a30311f8a9420"
        },
        "date": 1607338821793,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1009,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14127,
            "range": "± 3066",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1032,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13945,
            "range": "± 3192",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 577,
            "range": "± 30",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "82c72e6e6e053e5d74fcf424adca42b4110eae6c",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T19:05:24+08:00",
          "tree_id": "72d84445186f40b328f37c38c7e849c951e2f5a4",
          "url": "https://github.com/cssivision/tokio/commit/82c72e6e6e053e5d74fcf424adca42b4110eae6c"
        },
        "date": 1607339677735,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 845,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13650,
            "range": "± 3774",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 875,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13352,
            "range": "± 3316",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 514,
            "range": "± 63",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "fbbd3d1d819eb10e98706bb0c92e0d9874a60646",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T19:06:36+08:00",
          "tree_id": "a0ad7c777b006e569c1f5ca094513fab958cadc9",
          "url": "https://github.com/cssivision/tokio/commit/fbbd3d1d819eb10e98706bb0c92e0d9874a60646"
        },
        "date": 1607339780104,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 978,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14475,
            "range": "± 3850",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 979,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15263,
            "range": "± 7827",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 568,
            "range": "± 51",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "fb28b6a57d4b798b32a6cbe34a7ac5493ba65a4c",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T19:35:17+08:00",
          "tree_id": "fd5b9916de1e7b2be9d29ed1744c8e4f5d638e66",
          "url": "https://github.com/cssivision/tokio/commit/fb28b6a57d4b798b32a6cbe34a7ac5493ba65a4c"
        },
        "date": 1607341310392,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 985,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15745,
            "range": "± 3259",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 993,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15043,
            "range": "± 4232",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 590,
            "range": "± 58",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "f7c80bd3d2226540460b52621067ee51c521e41a",
          "message": "net: UnixDatagram ready method add doc example",
          "timestamp": "2020-12-10T10:41:56+08:00",
          "tree_id": "66db822850b8eb2e14293f433cca4a253233939c",
          "url": "https://github.com/cssivision/tokio/commit/f7c80bd3d2226540460b52621067ee51c521e41a"
        },
        "date": 1607568371065,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 825,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13570,
            "range": "± 3482",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 909,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 12969,
            "range": "± 3649",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 505,
            "range": "± 65",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f60860af7edefef5373d50d77ab605d648d60526",
          "message": "watch: fix spurious wakeup (#3234)\n\nCo-authored-by: @tijsvd",
          "timestamp": "2020-12-10T09:46:01+01:00",
          "tree_id": "44bc86bbaa5393a0dc3a94a2066569dcb1b79df1",
          "url": "https://github.com/cssivision/tokio/commit/f60860af7edefef5373d50d77ab605d648d60526"
        },
        "date": 1607592982511,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 843,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12983,
            "range": "± 3255",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 871,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 12902,
            "range": "± 2631",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 493,
            "range": "± 10",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "153c79051c93dcbe02686f444fba7a9099c8e4e9",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T19:54:07+08:00",
          "tree_id": "7e7ab53ad7add096940b959125c68a95dac0fad3",
          "url": "https://github.com/cssivision/tokio/commit/153c79051c93dcbe02686f444fba7a9099c8e4e9"
        },
        "date": 1607601538457,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 844,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12628,
            "range": "± 2863",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 870,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13355,
            "range": "± 2480",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 492,
            "range": "± 10",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "b9fb9b99228ec73c49b43df7a400e4363c7024be",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T19:54:43+08:00",
          "tree_id": "531769d9f104180d26f425da04343125da94a008",
          "url": "https://github.com/cssivision/tokio/commit/b9fb9b99228ec73c49b43df7a400e4363c7024be"
        },
        "date": 1607602167166,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 847,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13393,
            "range": "± 2966",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 885,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13764,
            "range": "± 2883",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 489,
            "range": "± 11",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "83cd948a112a1112caf0b319d090472088cfe79a",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T20:22:03+08:00",
          "tree_id": "11f2086d4f7ae8eccdc2a0ab85cd0d53678c88c7",
          "url": "https://github.com/cssivision/tokio/commit/83cd948a112a1112caf0b319d090472088cfe79a"
        },
        "date": 1607603239206,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 885,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15636,
            "range": "± 4667",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 885,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15296,
            "range": "± 5231",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 532,
            "range": "± 160",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "fafa79011cb7d2da668fd34222d0801e8dfec7c8",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T20:22:45+08:00",
          "tree_id": "11f2086d4f7ae8eccdc2a0ab85cd0d53678c88c7",
          "url": "https://github.com/cssivision/tokio/commit/fafa79011cb7d2da668fd34222d0801e8dfec7c8"
        },
        "date": 1607603649300,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 892,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13355,
            "range": "± 2716",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 902,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13168,
            "range": "± 3045",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 546,
            "range": "± 95",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "468c211bb6c8bffad4d0de1dece34dc30e5683ed",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T20:28:26+08:00",
          "tree_id": "af658debc179b5a22a92dc7270b550242bbc5045",
          "url": "https://github.com/cssivision/tokio/commit/468c211bb6c8bffad4d0de1dece34dc30e5683ed"
        },
        "date": 1607604001699,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 967,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15986,
            "range": "± 6698",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1017,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 17111,
            "range": "± 9219",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 596,
            "range": "± 127",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "bc802b34bcde7a1c5982a392e767a95228e3bb95",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T20:46:46+08:00",
          "tree_id": "6069543bb63215395e5b902ca0add65d4e503f9b",
          "url": "https://github.com/cssivision/tokio/commit/bc802b34bcde7a1c5982a392e767a95228e3bb95"
        },
        "date": 1607605074974,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 966,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14680,
            "range": "± 3197",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1007,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14894,
            "range": "± 4019",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 561,
            "range": "± 68",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "776f2bbdc1213ffaf6c4b27d5f3406dd2b65a9ae",
          "message": "Update tokio/src/net/unix/stream.rs\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-10T23:47:57+08:00",
          "tree_id": "d2bb3f27ba5691d86f10cff2407b6f5f1cf0e116",
          "url": "https://github.com/cssivision/tokio/commit/776f2bbdc1213ffaf6c4b27d5f3406dd2b65a9ae"
        },
        "date": 1607615528401,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 873,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12956,
            "range": "± 2600",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 872,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13715,
            "range": "± 2995",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 491,
            "range": "± 23",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be8c5221c30747fec106958f5c24363755719194",
          "message": "Update tokio/src/net/unix/stream.rs\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-10T23:48:16+08:00",
          "tree_id": "40bba2a3b9f7aff105e3d30294191e7c017c5563",
          "url": "https://github.com/cssivision/tokio/commit/be8c5221c30747fec106958f5c24363755719194"
        },
        "date": 1607616042064,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 857,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13390,
            "range": "± 3426",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 857,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13640,
            "range": "± 4279",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 501,
            "range": "± 78",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3f2381979a2234bdf16ba7f711ac1f1c2db602d",
          "message": "Update tokio/src/net/unix/stream.rs\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-10T23:48:26+08:00",
          "tree_id": "3551625fcc2fbe2335e371c960234af3c8698b27",
          "url": "https://github.com/cssivision/tokio/commit/e3f2381979a2234bdf16ba7f711ac1f1c2db602d"
        },
        "date": 1607616663322,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1012,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15659,
            "range": "± 5554",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1044,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15533,
            "range": "± 3830",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 592,
            "range": "± 24",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/cssivision/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605756324739,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 187652,
            "range": "± 20841",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 692893,
            "range": "± 76153",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5277323,
            "range": "± 361353",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20128618,
            "range": "± 2036525",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "38d095798250f0b56a60df9309d985ddf27acef2",
          "message": "util: fix typo",
          "timestamp": "2020-11-19T11:23:28+08:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/cssivision/tokio/commit/38d095798250f0b56a60df9309d985ddf27acef2"
        },
        "date": 1605756632538,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 194790,
            "range": "± 50252",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 701382,
            "range": "± 151343",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4636222,
            "range": "± 952578",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19381920,
            "range": "± 2877104",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0acd06b42a9d1461302388f2a533e86d391d6040",
          "message": "runtime: fix shutdown_timeout(0) blocking (#3174)",
          "timestamp": "2020-11-28T19:31:13+01:00",
          "tree_id": "c17e5d58e10ee419e492cb831843c3f08e1f66d8",
          "url": "https://github.com/cssivision/tokio/commit/0acd06b42a9d1461302388f2a533e86d391d6040"
        },
        "date": 1606638623262,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 185787,
            "range": "± 50000",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 700459,
            "range": "± 89498",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4345628,
            "range": "± 448691",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19177952,
            "range": "± 2267863",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "asomers@gmail.com",
            "name": "Alan Somers",
            "username": "asomers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7ae8135b62057be6b1691f04b27eabe285b05efd",
          "message": "process: fix the process_kill_on_drop.rs test on non-Linux systems (#3203)\n\n\"disown\" is a bash builtin, not part of POSIX sh.",
          "timestamp": "2020-12-01T10:20:49+09:00",
          "tree_id": "8b211b0f9807692d77be8a64a4835718355afe7b",
          "url": "https://github.com/cssivision/tokio/commit/7ae8135b62057be6b1691f04b27eabe285b05efd"
        },
        "date": 1606790232866,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 190981,
            "range": "± 6919",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 708344,
            "range": "± 56342",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5192384,
            "range": "± 402370",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20642643,
            "range": "± 2639374",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "e69dc7afa706455d53aba777eecf1c61fe6467c6",
          "message": "example: add back udp-codec example",
          "timestamp": "2020-12-01T10:40:43+08:00",
          "tree_id": "b18851ef95641ab2e2d1f632e2ce39cb1fcb1301",
          "url": "https://github.com/cssivision/tokio/commit/e69dc7afa706455d53aba777eecf1c61fe6467c6"
        },
        "date": 1606790581507,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 191723,
            "range": "± 45100",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 711624,
            "range": "± 169199",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5337804,
            "range": "± 1783825",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20594174,
            "range": "± 3131986",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "razican@protonmail.ch",
            "name": "Iban Eguia",
            "username": "Razican"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0dbba139848de6a8ee88350cc7fc48d0b05016c5",
          "message": "deps: replace lazy_static with once_cell (#3187)",
          "timestamp": "2020-12-04T10:23:13+01:00",
          "tree_id": "73f3366b9c7a0c50d6dd146a2626368cf59b3178",
          "url": "https://github.com/cssivision/tokio/commit/0dbba139848de6a8ee88350cc7fc48d0b05016c5"
        },
        "date": 1607136765691,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 187547,
            "range": "± 22164",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 677167,
            "range": "± 64921",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5064957,
            "range": "± 666801",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20386779,
            "range": "± 2762939",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "def858f007e5803a34d1c98e56837b2c63c29d09",
          "message": "net: expose poll_* methods on UnixDatagram",
          "timestamp": "2020-12-07T16:50:42+08:00",
          "tree_id": "8d85d170f67ff5a6837ce972b8b83b4637ecbf94",
          "url": "https://github.com/cssivision/tokio/commit/def858f007e5803a34d1c98e56837b2c63c29d09"
        },
        "date": 1607331294299,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 190989,
            "range": "± 28348",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 717656,
            "range": "± 139665",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5043512,
            "range": "± 648181",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20718380,
            "range": "± 2788492",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "d0b74f218b8881a04db374920223a21adc774988",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T18:39:29+08:00",
          "tree_id": "a917f867830ce64aa5ee00f3191d86492ee6cde4",
          "url": "https://github.com/cssivision/tokio/commit/d0b74f218b8881a04db374920223a21adc774988"
        },
        "date": 1607337902283,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 196096,
            "range": "± 41397",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 737082,
            "range": "± 82533",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5393663,
            "range": "± 596071",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21642384,
            "range": "± 2840367",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "91b94658ef56a28ceb44d1e90905b4e01013013c",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T18:40:50+08:00",
          "tree_id": "a917f867830ce64aa5ee00f3191d86492ee6cde4",
          "url": "https://github.com/cssivision/tokio/commit/91b94658ef56a28ceb44d1e90905b4e01013013c"
        },
        "date": 1607337921711,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 191631,
            "range": "± 10376",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 726320,
            "range": "± 90087",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5564228,
            "range": "± 546990",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20301990,
            "range": "± 2893179",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "1b7e98a6b292058d0588c613341a30311f8a9420",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T18:48:29+08:00",
          "tree_id": "135a0ed2aa71ed1523e6076c11ce456090042680",
          "url": "https://github.com/cssivision/tokio/commit/1b7e98a6b292058d0588c613341a30311f8a9420"
        },
        "date": 1607338798421,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 167066,
            "range": "± 28486",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 637446,
            "range": "± 95126",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4043758,
            "range": "± 952787",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 17626050,
            "range": "± 2879243",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "82c72e6e6e053e5d74fcf424adca42b4110eae6c",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T19:05:24+08:00",
          "tree_id": "72d84445186f40b328f37c38c7e849c951e2f5a4",
          "url": "https://github.com/cssivision/tokio/commit/82c72e6e6e053e5d74fcf424adca42b4110eae6c"
        },
        "date": 1607339656761,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 195955,
            "range": "± 34233",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 731457,
            "range": "± 174521",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5559273,
            "range": "± 1176643",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21368655,
            "range": "± 3125025",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "fbbd3d1d819eb10e98706bb0c92e0d9874a60646",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T19:06:36+08:00",
          "tree_id": "a0ad7c777b006e569c1f5ca094513fab958cadc9",
          "url": "https://github.com/cssivision/tokio/commit/fbbd3d1d819eb10e98706bb0c92e0d9874a60646"
        },
        "date": 1607339777752,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 179808,
            "range": "± 23652",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 683203,
            "range": "± 61994",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4961582,
            "range": "± 1089347",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19925057,
            "range": "± 1776061",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "fb28b6a57d4b798b32a6cbe34a7ac5493ba65a4c",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T19:35:17+08:00",
          "tree_id": "fd5b9916de1e7b2be9d29ed1744c8e4f5d638e66",
          "url": "https://github.com/cssivision/tokio/commit/fb28b6a57d4b798b32a6cbe34a7ac5493ba65a4c"
        },
        "date": 1607341239202,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 194692,
            "range": "± 30050",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 730578,
            "range": "± 155873",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5499418,
            "range": "± 985014",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21880061,
            "range": "± 3670727",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "f7c80bd3d2226540460b52621067ee51c521e41a",
          "message": "net: UnixDatagram ready method add doc example",
          "timestamp": "2020-12-10T10:41:56+08:00",
          "tree_id": "66db822850b8eb2e14293f433cca4a253233939c",
          "url": "https://github.com/cssivision/tokio/commit/f7c80bd3d2226540460b52621067ee51c521e41a"
        },
        "date": 1607568364456,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 169440,
            "range": "± 29443",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 721292,
            "range": "± 94201",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5465259,
            "range": "± 1089228",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19197176,
            "range": "± 2707315",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f60860af7edefef5373d50d77ab605d648d60526",
          "message": "watch: fix spurious wakeup (#3234)\n\nCo-authored-by: @tijsvd",
          "timestamp": "2020-12-10T09:46:01+01:00",
          "tree_id": "44bc86bbaa5393a0dc3a94a2066569dcb1b79df1",
          "url": "https://github.com/cssivision/tokio/commit/f60860af7edefef5373d50d77ab605d648d60526"
        },
        "date": 1607593016449,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 196049,
            "range": "± 58044",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 738828,
            "range": "± 126500",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5579913,
            "range": "± 1176463",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21069068,
            "range": "± 2857796",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "153c79051c93dcbe02686f444fba7a9099c8e4e9",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T19:54:07+08:00",
          "tree_id": "7e7ab53ad7add096940b959125c68a95dac0fad3",
          "url": "https://github.com/cssivision/tokio/commit/153c79051c93dcbe02686f444fba7a9099c8e4e9"
        },
        "date": 1607601550405,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 184361,
            "range": "± 29618",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 705368,
            "range": "± 58377",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5302597,
            "range": "± 440855",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21146064,
            "range": "± 2875074",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "b9fb9b99228ec73c49b43df7a400e4363c7024be",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T19:54:43+08:00",
          "tree_id": "531769d9f104180d26f425da04343125da94a008",
          "url": "https://github.com/cssivision/tokio/commit/b9fb9b99228ec73c49b43df7a400e4363c7024be"
        },
        "date": 1607602173414,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 165666,
            "range": "± 16007",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 654412,
            "range": "± 93847",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5062587,
            "range": "± 658807",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20000635,
            "range": "± 2307335",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "83cd948a112a1112caf0b319d090472088cfe79a",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T20:22:03+08:00",
          "tree_id": "11f2086d4f7ae8eccdc2a0ab85cd0d53678c88c7",
          "url": "https://github.com/cssivision/tokio/commit/83cd948a112a1112caf0b319d090472088cfe79a"
        },
        "date": 1607603185326,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 175581,
            "range": "± 45619",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 656576,
            "range": "± 120108",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5062942,
            "range": "± 1204094",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18750502,
            "range": "± 2848117",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "fafa79011cb7d2da668fd34222d0801e8dfec7c8",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T20:22:45+08:00",
          "tree_id": "11f2086d4f7ae8eccdc2a0ab85cd0d53678c88c7",
          "url": "https://github.com/cssivision/tokio/commit/fafa79011cb7d2da668fd34222d0801e8dfec7c8"
        },
        "date": 1607603532203,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 186167,
            "range": "± 24784",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 710216,
            "range": "± 80733",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5373500,
            "range": "± 816837",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20404803,
            "range": "± 2910932",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "468c211bb6c8bffad4d0de1dece34dc30e5683ed",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T20:28:26+08:00",
          "tree_id": "af658debc179b5a22a92dc7270b550242bbc5045",
          "url": "https://github.com/cssivision/tokio/commit/468c211bb6c8bffad4d0de1dece34dc30e5683ed"
        },
        "date": 1607604087443,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 142292,
            "range": "± 24756",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 528874,
            "range": "± 89202",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 3914726,
            "range": "± 956309",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 15357214,
            "range": "± 3025786",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "bc802b34bcde7a1c5982a392e767a95228e3bb95",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T20:46:46+08:00",
          "tree_id": "6069543bb63215395e5b902ca0add65d4e503f9b",
          "url": "https://github.com/cssivision/tokio/commit/bc802b34bcde7a1c5982a392e767a95228e3bb95"
        },
        "date": 1607605028407,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 158911,
            "range": "± 3830",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 641410,
            "range": "± 25463",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4679717,
            "range": "± 773264",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18360332,
            "range": "± 2750213",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "776f2bbdc1213ffaf6c4b27d5f3406dd2b65a9ae",
          "message": "Update tokio/src/net/unix/stream.rs\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-10T23:47:57+08:00",
          "tree_id": "d2bb3f27ba5691d86f10cff2407b6f5f1cf0e116",
          "url": "https://github.com/cssivision/tokio/commit/776f2bbdc1213ffaf6c4b27d5f3406dd2b65a9ae"
        },
        "date": 1607615548241,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 190420,
            "range": "± 21811",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 735743,
            "range": "± 51454",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5429710,
            "range": "± 1036078",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21035320,
            "range": "± 2688709",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be8c5221c30747fec106958f5c24363755719194",
          "message": "Update tokio/src/net/unix/stream.rs\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-10T23:48:16+08:00",
          "tree_id": "40bba2a3b9f7aff105e3d30294191e7c017c5563",
          "url": "https://github.com/cssivision/tokio/commit/be8c5221c30747fec106958f5c24363755719194"
        },
        "date": 1607616025534,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 157505,
            "range": "± 3267",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 617146,
            "range": "± 26219",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4595230,
            "range": "± 609870",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 17881865,
            "range": "± 1859150",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3f2381979a2234bdf16ba7f711ac1f1c2db602d",
          "message": "Update tokio/src/net/unix/stream.rs\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-10T23:48:26+08:00",
          "tree_id": "3551625fcc2fbe2335e371c960234af3c8698b27",
          "url": "https://github.com/cssivision/tokio/commit/e3f2381979a2234bdf16ba7f711ac1f1c2db602d"
        },
        "date": 1607616575199,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 164440,
            "range": "± 61355",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 680014,
            "range": "± 206756",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4980591,
            "range": "± 1618844",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18290257,
            "range": "± 2738699",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/cssivision/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605756325437,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15926,
            "range": "± 6312",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1103,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 753,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16005,
            "range": "± 5224",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1106,
            "range": "± 88",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "38d095798250f0b56a60df9309d985ddf27acef2",
          "message": "util: fix typo",
          "timestamp": "2020-11-19T11:23:28+08:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/cssivision/tokio/commit/38d095798250f0b56a60df9309d985ddf27acef2"
        },
        "date": 1605756810521,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14459,
            "range": "± 4025",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 974,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 537,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14216,
            "range": "± 3277",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 993,
            "range": "± 273",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0acd06b42a9d1461302388f2a533e86d391d6040",
          "message": "runtime: fix shutdown_timeout(0) blocking (#3174)",
          "timestamp": "2020-11-28T19:31:13+01:00",
          "tree_id": "c17e5d58e10ee419e492cb831843c3f08e1f66d8",
          "url": "https://github.com/cssivision/tokio/commit/0acd06b42a9d1461302388f2a533e86d391d6040"
        },
        "date": 1606638632263,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15376,
            "range": "± 5587",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1089,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 631,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15539,
            "range": "± 4178",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1078,
            "range": "± 253",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "asomers@gmail.com",
            "name": "Alan Somers",
            "username": "asomers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7ae8135b62057be6b1691f04b27eabe285b05efd",
          "message": "process: fix the process_kill_on_drop.rs test on non-Linux systems (#3203)\n\n\"disown\" is a bash builtin, not part of POSIX sh.",
          "timestamp": "2020-12-01T10:20:49+09:00",
          "tree_id": "8b211b0f9807692d77be8a64a4835718355afe7b",
          "url": "https://github.com/cssivision/tokio/commit/7ae8135b62057be6b1691f04b27eabe285b05efd"
        },
        "date": 1606790238451,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15308,
            "range": "± 3134",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1083,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 648,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15421,
            "range": "± 4429",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1081,
            "range": "± 32",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "e69dc7afa706455d53aba777eecf1c61fe6467c6",
          "message": "example: add back udp-codec example",
          "timestamp": "2020-12-01T10:40:43+08:00",
          "tree_id": "b18851ef95641ab2e2d1f632e2ce39cb1fcb1301",
          "url": "https://github.com/cssivision/tokio/commit/e69dc7afa706455d53aba777eecf1c61fe6467c6"
        },
        "date": 1606790602794,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 17253,
            "range": "± 7886",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1093,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 664,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 17311,
            "range": "± 7116",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1094,
            "range": "± 123",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "razican@protonmail.ch",
            "name": "Iban Eguia",
            "username": "Razican"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0dbba139848de6a8ee88350cc7fc48d0b05016c5",
          "message": "deps: replace lazy_static with once_cell (#3187)",
          "timestamp": "2020-12-04T10:23:13+01:00",
          "tree_id": "73f3366b9c7a0c50d6dd146a2626368cf59b3178",
          "url": "https://github.com/cssivision/tokio/commit/0dbba139848de6a8ee88350cc7fc48d0b05016c5"
        },
        "date": 1607136771663,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13356,
            "range": "± 3703",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 829,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 514,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14205,
            "range": "± 7791",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 803,
            "range": "± 115",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "def858f007e5803a34d1c98e56837b2c63c29d09",
          "message": "net: expose poll_* methods on UnixDatagram",
          "timestamp": "2020-12-07T16:50:42+08:00",
          "tree_id": "8d85d170f67ff5a6837ce972b8b83b4637ecbf94",
          "url": "https://github.com/cssivision/tokio/commit/def858f007e5803a34d1c98e56837b2c63c29d09"
        },
        "date": 1607331295039,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15750,
            "range": "± 4753",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1101,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 649,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15176,
            "range": "± 3488",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1089,
            "range": "± 16",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "d0b74f218b8881a04db374920223a21adc774988",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T18:39:29+08:00",
          "tree_id": "a917f867830ce64aa5ee00f3191d86492ee6cde4",
          "url": "https://github.com/cssivision/tokio/commit/d0b74f218b8881a04db374920223a21adc774988"
        },
        "date": 1607337901175,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14230,
            "range": "± 3172",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1056,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 610,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14382,
            "range": "± 2896",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1054,
            "range": "± 121",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "91b94658ef56a28ceb44d1e90905b4e01013013c",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T18:40:50+08:00",
          "tree_id": "a917f867830ce64aa5ee00f3191d86492ee6cde4",
          "url": "https://github.com/cssivision/tokio/commit/91b94658ef56a28ceb44d1e90905b4e01013013c"
        },
        "date": 1607337976136,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14710,
            "range": "± 3362",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1096,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 645,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14923,
            "range": "± 3030",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1095,
            "range": "± 22",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "1b7e98a6b292058d0588c613341a30311f8a9420",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T18:48:29+08:00",
          "tree_id": "135a0ed2aa71ed1523e6076c11ce456090042680",
          "url": "https://github.com/cssivision/tokio/commit/1b7e98a6b292058d0588c613341a30311f8a9420"
        },
        "date": 1607338864016,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16156,
            "range": "± 5600",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1103,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 591,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16016,
            "range": "± 4884",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1003,
            "range": "± 268",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "82c72e6e6e053e5d74fcf424adca42b4110eae6c",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T19:05:24+08:00",
          "tree_id": "72d84445186f40b328f37c38c7e849c951e2f5a4",
          "url": "https://github.com/cssivision/tokio/commit/82c72e6e6e053e5d74fcf424adca42b4110eae6c"
        },
        "date": 1607339700521,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14158,
            "range": "± 2546",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 913,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 537,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14182,
            "range": "± 2598",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 909,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "fbbd3d1d819eb10e98706bb0c92e0d9874a60646",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T19:06:36+08:00",
          "tree_id": "a0ad7c777b006e569c1f5ca094513fab958cadc9",
          "url": "https://github.com/cssivision/tokio/commit/fbbd3d1d819eb10e98706bb0c92e0d9874a60646"
        },
        "date": 1607339886323,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15988,
            "range": "± 5884",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1098,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 638,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16245,
            "range": "± 6282",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1087,
            "range": "± 31",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "fb28b6a57d4b798b32a6cbe34a7ac5493ba65a4c",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T19:35:17+08:00",
          "tree_id": "fd5b9916de1e7b2be9d29ed1744c8e4f5d638e66",
          "url": "https://github.com/cssivision/tokio/commit/fb28b6a57d4b798b32a6cbe34a7ac5493ba65a4c"
        },
        "date": 1607341267080,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15151,
            "range": "± 4108",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1122,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 653,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14978,
            "range": "± 4622",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1083,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "f7c80bd3d2226540460b52621067ee51c521e41a",
          "message": "net: UnixDatagram ready method add doc example",
          "timestamp": "2020-12-10T10:41:56+08:00",
          "tree_id": "66db822850b8eb2e14293f433cca4a253233939c",
          "url": "https://github.com/cssivision/tokio/commit/f7c80bd3d2226540460b52621067ee51c521e41a"
        },
        "date": 1607568375516,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 12463,
            "range": "± 3448",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 799,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 486,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 12826,
            "range": "± 3937",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 792,
            "range": "± 173",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f60860af7edefef5373d50d77ab605d648d60526",
          "message": "watch: fix spurious wakeup (#3234)\n\nCo-authored-by: @tijsvd",
          "timestamp": "2020-12-10T09:46:01+01:00",
          "tree_id": "44bc86bbaa5393a0dc3a94a2066569dcb1b79df1",
          "url": "https://github.com/cssivision/tokio/commit/f60860af7edefef5373d50d77ab605d648d60526"
        },
        "date": 1607593011572,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16557,
            "range": "± 4830",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1097,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 640,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 17408,
            "range": "± 5452",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1067,
            "range": "± 136",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "b9fb9b99228ec73c49b43df7a400e4363c7024be",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T19:54:43+08:00",
          "tree_id": "531769d9f104180d26f425da04343125da94a008",
          "url": "https://github.com/cssivision/tokio/commit/b9fb9b99228ec73c49b43df7a400e4363c7024be"
        },
        "date": 1607602282728,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14502,
            "range": "± 2443",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1095,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 649,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14998,
            "range": "± 3545",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1093,
            "range": "± 8",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "83cd948a112a1112caf0b319d090472088cfe79a",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T20:22:03+08:00",
          "tree_id": "11f2086d4f7ae8eccdc2a0ab85cd0d53678c88c7",
          "url": "https://github.com/cssivision/tokio/commit/83cd948a112a1112caf0b319d090472088cfe79a"
        },
        "date": 1607603180362,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14467,
            "range": "± 2457",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1056,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 646,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14012,
            "range": "± 2914",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1039,
            "range": "± 94",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "fafa79011cb7d2da668fd34222d0801e8dfec7c8",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T20:22:45+08:00",
          "tree_id": "11f2086d4f7ae8eccdc2a0ab85cd0d53678c88c7",
          "url": "https://github.com/cssivision/tokio/commit/fafa79011cb7d2da668fd34222d0801e8dfec7c8"
        },
        "date": 1607603629886,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 12970,
            "range": "± 1873",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 905,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 543,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13260,
            "range": "± 2597",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 905,
            "range": "± 8",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "468c211bb6c8bffad4d0de1dece34dc30e5683ed",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T20:28:26+08:00",
          "tree_id": "af658debc179b5a22a92dc7270b550242bbc5045",
          "url": "https://github.com/cssivision/tokio/commit/468c211bb6c8bffad4d0de1dece34dc30e5683ed"
        },
        "date": 1607604081462,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13237,
            "range": "± 2484",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 903,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 540,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13266,
            "range": "± 1891",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 905,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "bc802b34bcde7a1c5982a392e767a95228e3bb95",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T20:46:46+08:00",
          "tree_id": "6069543bb63215395e5b902ca0add65d4e503f9b",
          "url": "https://github.com/cssivision/tokio/commit/bc802b34bcde7a1c5982a392e767a95228e3bb95"
        },
        "date": 1607605106813,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14991,
            "range": "± 2414",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1137,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 648,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15232,
            "range": "± 3515",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1165,
            "range": "± 34",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "776f2bbdc1213ffaf6c4b27d5f3406dd2b65a9ae",
          "message": "Update tokio/src/net/unix/stream.rs\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-10T23:47:57+08:00",
          "tree_id": "d2bb3f27ba5691d86f10cff2407b6f5f1cf0e116",
          "url": "https://github.com/cssivision/tokio/commit/776f2bbdc1213ffaf6c4b27d5f3406dd2b65a9ae"
        },
        "date": 1607615529381,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13324,
            "range": "± 2874",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 904,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 541,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13136,
            "range": "± 2758",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 909,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be8c5221c30747fec106958f5c24363755719194",
          "message": "Update tokio/src/net/unix/stream.rs\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-10T23:48:16+08:00",
          "tree_id": "40bba2a3b9f7aff105e3d30294191e7c017c5563",
          "url": "https://github.com/cssivision/tokio/commit/be8c5221c30747fec106958f5c24363755719194"
        },
        "date": 1607616158567,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15887,
            "range": "± 6156",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1096,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 607,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15864,
            "range": "± 4116",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1111,
            "range": "± 142",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3f2381979a2234bdf16ba7f711ac1f1c2db602d",
          "message": "Update tokio/src/net/unix/stream.rs\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-10T23:48:26+08:00",
          "tree_id": "3551625fcc2fbe2335e371c960234af3c8698b27",
          "url": "https://github.com/cssivision/tokio/commit/e3f2381979a2234bdf16ba7f711ac1f1c2db602d"
        },
        "date": 1607616734723,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15859,
            "range": "± 7332",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 982,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 591,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15950,
            "range": "± 5571",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1015,
            "range": "± 136",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "e1bcaf08c59cb0801591875296b8baf08060f0e7",
          "message": "net: UnixStream add poll_write_ready/poll_read_ready",
          "timestamp": "2020-12-11T10:54:46+08:00",
          "tree_id": "6511e02a7cec353e4fc4578348fbaabd25ff8c98",
          "url": "https://github.com/cssivision/tokio/commit/e1bcaf08c59cb0801591875296b8baf08060f0e7"
        },
        "date": 1607655501192,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13193,
            "range": "± 2461",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 904,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 538,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13531,
            "range": "± 2591",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 904,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/cssivision/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605756337378,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6258889,
            "range": "± 2162701",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6343792,
            "range": "± 1409989",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5861983,
            "range": "± 2116505",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 597,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 598,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 623,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 39548,
            "range": "± 5796",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 777,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1032965,
            "range": "± 166460",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 731411,
            "range": "± 129993",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "38d095798250f0b56a60df9309d985ddf27acef2",
          "message": "util: fix typo",
          "timestamp": "2020-11-19T11:23:28+08:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/cssivision/tokio/commit/38d095798250f0b56a60df9309d985ddf27acef2"
        },
        "date": 1605756689381,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6894453,
            "range": "± 2928307",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6763129,
            "range": "± 1379593",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6626531,
            "range": "± 2277114",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 632,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 626,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 624,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 51338,
            "range": "± 24435",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 864,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1121615,
            "range": "± 19670",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 802261,
            "range": "± 4198",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0acd06b42a9d1461302388f2a533e86d391d6040",
          "message": "runtime: fix shutdown_timeout(0) blocking (#3174)",
          "timestamp": "2020-11-28T19:31:13+01:00",
          "tree_id": "c17e5d58e10ee419e492cb831843c3f08e1f66d8",
          "url": "https://github.com/cssivision/tokio/commit/0acd06b42a9d1461302388f2a533e86d391d6040"
        },
        "date": 1606638619928,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6587067,
            "range": "± 2235991",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6907683,
            "range": "± 1252030",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6079901,
            "range": "± 2036272",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 641,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 642,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 643,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 51787,
            "range": "± 892",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 871,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1122190,
            "range": "± 30944",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 783218,
            "range": "± 47661",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "asomers@gmail.com",
            "name": "Alan Somers",
            "username": "asomers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7ae8135b62057be6b1691f04b27eabe285b05efd",
          "message": "process: fix the process_kill_on_drop.rs test on non-Linux systems (#3203)\n\n\"disown\" is a bash builtin, not part of POSIX sh.",
          "timestamp": "2020-12-01T10:20:49+09:00",
          "tree_id": "8b211b0f9807692d77be8a64a4835718355afe7b",
          "url": "https://github.com/cssivision/tokio/commit/7ae8135b62057be6b1691f04b27eabe285b05efd"
        },
        "date": 1606790274988,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6432235,
            "range": "± 2655502",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6195573,
            "range": "± 1345994",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5830076,
            "range": "± 2522453",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 816,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 822,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 815,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 56755,
            "range": "± 5048",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1086,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1100668,
            "range": "± 165654",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 781815,
            "range": "± 50219",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "e69dc7afa706455d53aba777eecf1c61fe6467c6",
          "message": "example: add back udp-codec example",
          "timestamp": "2020-12-01T10:40:43+08:00",
          "tree_id": "b18851ef95641ab2e2d1f632e2ce39cb1fcb1301",
          "url": "https://github.com/cssivision/tokio/commit/e69dc7afa706455d53aba777eecf1c61fe6467c6"
        },
        "date": 1606790594653,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6375243,
            "range": "± 1964109",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6580744,
            "range": "± 1468021",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6021135,
            "range": "± 2396699",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 713,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 710,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 705,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 51280,
            "range": "± 5895",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 756,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1044052,
            "range": "± 150601",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 787878,
            "range": "± 73045",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "razican@protonmail.ch",
            "name": "Iban Eguia",
            "username": "Razican"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0dbba139848de6a8ee88350cc7fc48d0b05016c5",
          "message": "deps: replace lazy_static with once_cell (#3187)",
          "timestamp": "2020-12-04T10:23:13+01:00",
          "tree_id": "73f3366b9c7a0c50d6dd146a2626368cf59b3178",
          "url": "https://github.com/cssivision/tokio/commit/0dbba139848de6a8ee88350cc7fc48d0b05016c5"
        },
        "date": 1607136771429,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5806062,
            "range": "± 2367298",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5432016,
            "range": "± 1471124",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 4901664,
            "range": "± 1812437",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 621,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 635,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 618,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 50023,
            "range": "± 4884",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 787,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 846004,
            "range": "± 94752",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 604701,
            "range": "± 248766",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "def858f007e5803a34d1c98e56837b2c63c29d09",
          "message": "net: expose poll_* methods on UnixDatagram",
          "timestamp": "2020-12-07T16:50:42+08:00",
          "tree_id": "8d85d170f67ff5a6837ce972b8b83b4637ecbf94",
          "url": "https://github.com/cssivision/tokio/commit/def858f007e5803a34d1c98e56837b2c63c29d09"
        },
        "date": 1607331289334,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6517972,
            "range": "± 2264857",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6344677,
            "range": "± 1285153",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5705779,
            "range": "± 1738106",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 587,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 602,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 595,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 36810,
            "range": "± 2898",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 798,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1024884,
            "range": "± 66507",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 747721,
            "range": "± 56985",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "d0b74f218b8881a04db374920223a21adc774988",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T18:39:29+08:00",
          "tree_id": "a917f867830ce64aa5ee00f3191d86492ee6cde4",
          "url": "https://github.com/cssivision/tokio/commit/d0b74f218b8881a04db374920223a21adc774988"
        },
        "date": 1607337919854,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6266643,
            "range": "± 2559909",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5952402,
            "range": "± 1710195",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5426340,
            "range": "± 2036130",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 774,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 724,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 750,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 57313,
            "range": "± 10884",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1065,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 935804,
            "range": "± 203000",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 661194,
            "range": "± 121508",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "91b94658ef56a28ceb44d1e90905b4e01013013c",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T18:40:50+08:00",
          "tree_id": "a917f867830ce64aa5ee00f3191d86492ee6cde4",
          "url": "https://github.com/cssivision/tokio/commit/91b94658ef56a28ceb44d1e90905b4e01013013c"
        },
        "date": 1607337938754,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6847671,
            "range": "± 2462677",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6883318,
            "range": "± 1571067",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6275714,
            "range": "± 2356077",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 607,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 571,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 574,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 52039,
            "range": "± 4551",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1181,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1116320,
            "range": "± 113876",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 790599,
            "range": "± 110943",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "1b7e98a6b292058d0588c613341a30311f8a9420",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T18:48:29+08:00",
          "tree_id": "135a0ed2aa71ed1523e6076c11ce456090042680",
          "url": "https://github.com/cssivision/tokio/commit/1b7e98a6b292058d0588c613341a30311f8a9420"
        },
        "date": 1607338750576,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7022322,
            "range": "± 2034674",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6941920,
            "range": "± 1560464",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6736020,
            "range": "± 1665518",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 664,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 660,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 647,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 52336,
            "range": "± 595",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 899,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1174462,
            "range": "± 17877",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 844410,
            "range": "± 9881",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "82c72e6e6e053e5d74fcf424adca42b4110eae6c",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T19:05:24+08:00",
          "tree_id": "72d84445186f40b328f37c38c7e849c951e2f5a4",
          "url": "https://github.com/cssivision/tokio/commit/82c72e6e6e053e5d74fcf424adca42b4110eae6c"
        },
        "date": 1607339609085,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6588848,
            "range": "± 2208350",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6919694,
            "range": "± 1173040",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6498352,
            "range": "± 2236719",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 604,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 620,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 618,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 48594,
            "range": "± 979",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 858,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1124163,
            "range": "± 27361",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 805430,
            "range": "± 13629",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "fbbd3d1d819eb10e98706bb0c92e0d9874a60646",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T19:06:36+08:00",
          "tree_id": "a0ad7c777b006e569c1f5ca094513fab958cadc9",
          "url": "https://github.com/cssivision/tokio/commit/fbbd3d1d819eb10e98706bb0c92e0d9874a60646"
        },
        "date": 1607339809414,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6459818,
            "range": "± 2031054",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6518670,
            "range": "± 1403244",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5922623,
            "range": "± 2195935",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 621,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 606,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 631,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 38162,
            "range": "± 4173",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 857,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1122933,
            "range": "± 80737",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 782621,
            "range": "± 52066",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "fb28b6a57d4b798b32a6cbe34a7ac5493ba65a4c",
          "message": "net: add UnixDatagram readiness and non-blocking ops",
          "timestamp": "2020-12-07T19:35:17+08:00",
          "tree_id": "fd5b9916de1e7b2be9d29ed1744c8e4f5d638e66",
          "url": "https://github.com/cssivision/tokio/commit/fb28b6a57d4b798b32a6cbe34a7ac5493ba65a4c"
        },
        "date": 1607341267498,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7111757,
            "range": "± 2930216",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7075523,
            "range": "± 2932443",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6178660,
            "range": "± 2532975",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 906,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 916,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 871,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 65106,
            "range": "± 15402",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1071,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1101168,
            "range": "± 187742",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 773610,
            "range": "± 152308",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "f7c80bd3d2226540460b52621067ee51c521e41a",
          "message": "net: UnixDatagram ready method add doc example",
          "timestamp": "2020-12-10T10:41:56+08:00",
          "tree_id": "66db822850b8eb2e14293f433cca4a253233939c",
          "url": "https://github.com/cssivision/tokio/commit/f7c80bd3d2226540460b52621067ee51c521e41a"
        },
        "date": 1607568351252,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6881312,
            "range": "± 2338078",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7038527,
            "range": "± 1648683",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6166599,
            "range": "± 2153235",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 771,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 770,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 771,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 51795,
            "range": "± 932",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 832,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1114899,
            "range": "± 38363",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 794118,
            "range": "± 29943",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f60860af7edefef5373d50d77ab605d648d60526",
          "message": "watch: fix spurious wakeup (#3234)\n\nCo-authored-by: @tijsvd",
          "timestamp": "2020-12-10T09:46:01+01:00",
          "tree_id": "44bc86bbaa5393a0dc3a94a2066569dcb1b79df1",
          "url": "https://github.com/cssivision/tokio/commit/f60860af7edefef5373d50d77ab605d648d60526"
        },
        "date": 1607592999293,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5890028,
            "range": "± 2177925",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6021893,
            "range": "± 1266811",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5371730,
            "range": "± 1791058",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 555,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 552,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 553,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 31866,
            "range": "± 2177",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 772,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 953587,
            "range": "± 2498",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 685523,
            "range": "± 1305",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "153c79051c93dcbe02686f444fba7a9099c8e4e9",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T19:54:07+08:00",
          "tree_id": "7e7ab53ad7add096940b959125c68a95dac0fad3",
          "url": "https://github.com/cssivision/tokio/commit/153c79051c93dcbe02686f444fba7a9099c8e4e9"
        },
        "date": 1607601571888,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7713901,
            "range": "± 4188096",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7081662,
            "range": "± 1709276",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6867612,
            "range": "± 3070146",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 862,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 832,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 848,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 64923,
            "range": "± 9856",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1074,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1128841,
            "range": "± 234547",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 813889,
            "range": "± 305235",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "b9fb9b99228ec73c49b43df7a400e4363c7024be",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T19:54:43+08:00",
          "tree_id": "531769d9f104180d26f425da04343125da94a008",
          "url": "https://github.com/cssivision/tokio/commit/b9fb9b99228ec73c49b43df7a400e4363c7024be"
        },
        "date": 1607602208349,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6416609,
            "range": "± 2000612",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6749206,
            "range": "± 1312166",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6248658,
            "range": "± 2224996",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 587,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 565,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 584,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 49739,
            "range": "± 3892",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 871,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1111349,
            "range": "± 220398",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 801821,
            "range": "± 55139",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "83cd948a112a1112caf0b319d090472088cfe79a",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T20:22:03+08:00",
          "tree_id": "11f2086d4f7ae8eccdc2a0ab85cd0d53678c88c7",
          "url": "https://github.com/cssivision/tokio/commit/83cd948a112a1112caf0b319d090472088cfe79a"
        },
        "date": 1607603171249,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6613784,
            "range": "± 2099267",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6875193,
            "range": "± 1277737",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6179195,
            "range": "± 2153587",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 562,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 561,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 563,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 49151,
            "range": "± 1917",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 928,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1115502,
            "range": "± 29899",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 802171,
            "range": "± 47714",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "fafa79011cb7d2da668fd34222d0801e8dfec7c8",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T20:22:45+08:00",
          "tree_id": "11f2086d4f7ae8eccdc2a0ab85cd0d53678c88c7",
          "url": "https://github.com/cssivision/tokio/commit/fafa79011cb7d2da668fd34222d0801e8dfec7c8"
        },
        "date": 1607603657877,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6561902,
            "range": "± 1939344",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6708596,
            "range": "± 1639474",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5942868,
            "range": "± 1664273",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 701,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 700,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 700,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 49859,
            "range": "± 1063",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 820,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1126179,
            "range": "± 51266",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 804312,
            "range": "± 2983",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "468c211bb6c8bffad4d0de1dece34dc30e5683ed",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T20:28:26+08:00",
          "tree_id": "af658debc179b5a22a92dc7270b550242bbc5045",
          "url": "https://github.com/cssivision/tokio/commit/468c211bb6c8bffad4d0de1dece34dc30e5683ed"
        },
        "date": 1607604098015,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6738151,
            "range": "± 2077932",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6527186,
            "range": "± 1488811",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6219436,
            "range": "± 2336563",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 764,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 754,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 776,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 63473,
            "range": "± 6746",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1044,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1044340,
            "range": "± 73763",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 729514,
            "range": "± 117107",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "bc802b34bcde7a1c5982a392e767a95228e3bb95",
          "message": "net: add UnixStream readiness and non-blocking ops",
          "timestamp": "2020-12-10T20:46:46+08:00",
          "tree_id": "6069543bb63215395e5b902ca0add65d4e503f9b",
          "url": "https://github.com/cssivision/tokio/commit/bc802b34bcde7a1c5982a392e767a95228e3bb95"
        },
        "date": 1607605040338,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6654800,
            "range": "± 1692451",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6497106,
            "range": "± 1094263",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5915605,
            "range": "± 1538279",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 503,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 478,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 490,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 36393,
            "range": "± 2878",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 787,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1046756,
            "range": "± 139788",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 739111,
            "range": "± 82521",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "776f2bbdc1213ffaf6c4b27d5f3406dd2b65a9ae",
          "message": "Update tokio/src/net/unix/stream.rs\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-10T23:47:57+08:00",
          "tree_id": "d2bb3f27ba5691d86f10cff2407b6f5f1cf0e116",
          "url": "https://github.com/cssivision/tokio/commit/776f2bbdc1213ffaf6c4b27d5f3406dd2b65a9ae"
        },
        "date": 1607615459825,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6106321,
            "range": "± 2284018",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5775143,
            "range": "± 1434362",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5556526,
            "range": "± 2122261",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 540,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 529,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 530,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 34086,
            "range": "± 2559",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 740,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 970416,
            "range": "± 1871",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 685288,
            "range": "± 4943",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be8c5221c30747fec106958f5c24363755719194",
          "message": "Update tokio/src/net/unix/stream.rs\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-10T23:48:16+08:00",
          "tree_id": "40bba2a3b9f7aff105e3d30294191e7c017c5563",
          "url": "https://github.com/cssivision/tokio/commit/be8c5221c30747fec106958f5c24363755719194"
        },
        "date": 1607616064442,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7233480,
            "range": "± 3164414",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7070880,
            "range": "± 2522921",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6783360,
            "range": "± 2594542",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 774,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 774,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 776,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 66787,
            "range": "± 9003",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1176,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1217250,
            "range": "± 150522",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 818457,
            "range": "± 152163",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3f2381979a2234bdf16ba7f711ac1f1c2db602d",
          "message": "Update tokio/src/net/unix/stream.rs\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-10T23:48:26+08:00",
          "tree_id": "3551625fcc2fbe2335e371c960234af3c8698b27",
          "url": "https://github.com/cssivision/tokio/commit/e3f2381979a2234bdf16ba7f711ac1f1c2db602d"
        },
        "date": 1607616738982,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6645840,
            "range": "± 2456484",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7012600,
            "range": "± 1222330",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6380273,
            "range": "± 2689752",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 612,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 625,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 618,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 51482,
            "range": "± 1116",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 876,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1114742,
            "range": "± 7427",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 803401,
            "range": "± 8372",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "e1bcaf08c59cb0801591875296b8baf08060f0e7",
          "message": "net: UnixStream add poll_write_ready/poll_read_ready",
          "timestamp": "2020-12-11T10:54:46+08:00",
          "tree_id": "6511e02a7cec353e4fc4578348fbaabd25ff8c98",
          "url": "https://github.com/cssivision/tokio/commit/e1bcaf08c59cb0801591875296b8baf08060f0e7"
        },
        "date": 1607655517809,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6725128,
            "range": "± 2207169",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6650370,
            "range": "± 1665430",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6165409,
            "range": "± 2616653",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 816,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 740,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 742,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 44753,
            "range": "± 13842",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 813,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1116712,
            "range": "± 17905",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 788938,
            "range": "± 11332",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}