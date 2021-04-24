window.BENCHMARK_DATA = {
  "lastUpdate": 1619254596854,
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
        "date": 1607655536470,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 899,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15333,
            "range": "± 5023",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 920,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14476,
            "range": "± 6067",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 529,
            "range": "± 93",
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
          "id": "f6dd8a63af284454c875b6a08cf929f07e16ce38",
          "message": "net: UnixStream fix doc compile",
          "timestamp": "2020-12-11T11:06:01+08:00",
          "tree_id": "74faae013ae4dd05abae4e60abf1d5539d11fd3b",
          "url": "https://github.com/cssivision/tokio/commit/f6dd8a63af284454c875b6a08cf929f07e16ce38"
        },
        "date": 1607656352362,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 985,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16767,
            "range": "± 6424",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1040,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16029,
            "range": "± 6070",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 569,
            "range": "± 67",
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
          "id": "d535135cdcfe6a917308e539ebf94bc94f8bf07e",
          "message": "Add semicolon to continue",
          "timestamp": "2020-12-13T15:37:25+01:00",
          "tree_id": "71f10d19362f9b7eb1ee50ae67074306099eb566",
          "url": "https://github.com/cssivision/tokio/commit/d535135cdcfe6a917308e539ebf94bc94f8bf07e"
        },
        "date": 1607870509405,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 925,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15353,
            "range": "± 5339",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 955,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15393,
            "range": "± 7235",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 554,
            "range": "± 96",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "28933599888a88e601acbb11fa824b0ee9f98c6e",
          "message": "chore: update to `bytes` 1.0 git branch (#3301)\n\nUpdates the code base to track the `bytes` git branch. This is in\r\npreparation for the 1.0 release.\r\n\r\nCloses #3058",
          "timestamp": "2020-12-19T15:57:16-08:00",
          "tree_id": "2021ef3acf9407fcfa39032e0a493a81f1eb74cc",
          "url": "https://github.com/cssivision/tokio/commit/28933599888a88e601acbb11fa824b0ee9f98c6e"
        },
        "date": 1608561074909,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 964,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15962,
            "range": "± 5087",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 988,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15611,
            "range": "± 3248",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 570,
            "range": "± 45",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "0deaeb84948f253b76b7fe64d7fe9d4527cd4275",
          "message": "chore: remove unused `slab` dependency (#3318)",
          "timestamp": "2020-12-22T21:56:22-08:00",
          "tree_id": "3b9ad84403d71b2ad5d2c749c23516c3dfaec3ce",
          "url": "https://github.com/cssivision/tokio/commit/0deaeb84948f253b76b7fe64d7fe9d4527cd4275"
        },
        "date": 1608705526986,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 840,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13265,
            "range": "± 2636",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 868,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13035,
            "range": "± 2980",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 491,
            "range": "± 16",
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
          "id": "2330edc875ed8b873b6ffc4686feef1534658f79",
          "message": "chore: prepare tokio 1.0.1 release (#3347)",
          "timestamp": "2020-12-25T22:20:05+01:00",
          "tree_id": "9666ca615c4f2bf81a5c7a311ce0e3b3e7e30047",
          "url": "https://github.com/cssivision/tokio/commit/2330edc875ed8b873b6ffc4686feef1534658f79"
        },
        "date": 1608985271209,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 993,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 17413,
            "range": "± 5353",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1101,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 17418,
            "range": "± 7205",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 568,
            "range": "± 106",
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
          "id": "a78f371759d8b9eae7fc799e7ed74456ccf7d7a0",
          "message": "net: Add try_read_buf and try_recv_buf",
          "timestamp": "2020-12-27T18:37:45+08:00",
          "tree_id": "0a6ec5ed64e2b6776a535f5d04680dcca0b5953c",
          "url": "https://github.com/cssivision/tokio/commit/a78f371759d8b9eae7fc799e7ed74456ccf7d7a0"
        },
        "date": 1609065729001,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 733,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14678,
            "range": "± 8080",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 748,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 12760,
            "range": "± 4464",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 470,
            "range": "± 97",
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
          "id": "1a3fccee46e8abacd32376d5bbc7698f5cc31df6",
          "message": "net: Add try_read_buf and try_recv_buf enable in io-util features",
          "timestamp": "2020-12-27T18:58:01+08:00",
          "tree_id": "76d754841fc4fab30808763f86066e247b9430f1",
          "url": "https://github.com/cssivision/tokio/commit/1a3fccee46e8abacd32376d5bbc7698f5cc31df6"
        },
        "date": 1609066938486,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1009,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14394,
            "range": "± 3558",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1034,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14575,
            "range": "± 3827",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 587,
            "range": "± 52",
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
          "id": "eb0d64ef2bbbb821dcbc978a25a042e564b6173c",
          "message": "net: try_recv_buf fix doc",
          "timestamp": "2020-12-27T19:08:54+08:00",
          "tree_id": "2d035a878fcdbae31e13ebbc4ae5442cb225558a",
          "url": "https://github.com/cssivision/tokio/commit/eb0d64ef2bbbb821dcbc978a25a042e564b6173c"
        },
        "date": 1609067751916,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1006,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15101,
            "range": "± 5599",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1039,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15403,
            "range": "± 4792",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 589,
            "range": "± 36",
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
          "id": "d80d5f83e4fb916427b25cf951249b3690688279",
          "message": "net: try_recv_buf_from fix doc",
          "timestamp": "2020-12-27T19:12:53+08:00",
          "tree_id": "f574d78f89bc389ee7b4fc8b2cf04fae02f99db0",
          "url": "https://github.com/cssivision/tokio/commit/d80d5f83e4fb916427b25cf951249b3690688279"
        },
        "date": 1609068395172,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 989,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15111,
            "range": "± 4350",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1040,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14710,
            "range": "± 4163",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 588,
            "range": "± 44",
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
          "id": "5c5e7f1c3cb0a4379d9dcd5faaf6561331c5aed5",
          "message": "Update tokio/src/net/tcp/stream.rs\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-28T10:36:39+08:00",
          "tree_id": "918d9c906603b18d6d2f37f0c2aed89014ae9a2e",
          "url": "https://github.com/cssivision/tokio/commit/5c5e7f1c3cb0a4379d9dcd5faaf6561331c5aed5"
        },
        "date": 1609123229839,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 776,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 11920,
            "range": "± 2376",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 767,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 12060,
            "range": "± 3004",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 434,
            "range": "± 9",
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
          "id": "17d9c7bc6453544f84ffdf5ad2891c263b9d4e07",
          "message": "fix doc",
          "timestamp": "2020-12-28T10:52:34+08:00",
          "tree_id": "98ebb0518e7835df51147079a9304bbe810e89a8",
          "url": "https://github.com/cssivision/tokio/commit/17d9c7bc6453544f84ffdf5ad2891c263b9d4e07"
        },
        "date": 1609124000173,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 844,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12796,
            "range": "± 2476",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 865,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13269,
            "range": "± 3434",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 492,
            "range": "± 7",
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
          "id": "f22bab3f1042598684975080cd3a24fe30a7ef3e",
          "message": "remove capcacity check",
          "timestamp": "2020-12-29T14:52:53+08:00",
          "tree_id": "f37f7dc44770ba4591cef8e64416b920af64bf36",
          "url": "https://github.com/cssivision/tokio/commit/f22bab3f1042598684975080cd3a24fe30a7ef3e"
        },
        "date": 1609224967598,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 842,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14425,
            "range": "± 6981",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 863,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16551,
            "range": "± 8775",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 529,
            "range": "± 124",
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
          "id": "bd71dbeffcadd6a0bac0bbbcbe63f0bf2a2943a7",
          "message": "check uds_stream it is no longer readable",
          "timestamp": "2020-12-31T12:04:47+08:00",
          "tree_id": "e6f14f60859d21e6082c069cceeadd5786742bac",
          "url": "https://github.com/cssivision/tokio/commit/bd71dbeffcadd6a0bac0bbbcbe63f0bf2a2943a7"
        },
        "date": 1609387703181,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 935,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13802,
            "range": "± 3522",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 886,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13957,
            "range": "± 4397",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 544,
            "range": "± 37",
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
          "id": "2e80d5b0134ce77c8b3b66bf21ecfc995acc1264",
          "message": "remove capcacity check",
          "timestamp": "2020-12-30T10:48:33+08:00",
          "tree_id": "6d144291e86da2675f3856a5c7f03c1a01cc9c70",
          "url": "https://github.com/cssivision/tokio/commit/2e80d5b0134ce77c8b3b66bf21ecfc995acc1264"
        },
        "date": 1609388265807,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1008,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14662,
            "range": "± 5991",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1035,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14698,
            "range": "± 4640",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 588,
            "range": "± 36",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cdart@anduril.com",
            "name": "Cameron",
            "username": "SkamDart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22c27b9282da399574bf9d58461fe0f1869be894",
          "message": "task: wake LocalSet on spawn_local (#3369)",
          "timestamp": "2021-01-09T11:46:51+01:00",
          "tree_id": "fea07ef93e77faf10bd1c08598dd1157ce9e72e5",
          "url": "https://github.com/cssivision/tokio/commit/22c27b9282da399574bf9d58461fe0f1869be894"
        },
        "date": 1610194033931,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 966,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14534,
            "range": "± 4869",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1016,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14983,
            "range": "± 3810",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 574,
            "range": "± 56",
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
          "id": "6971d656734b3d0145067622f744f70f936d8682",
          "message": "docs: test-util feature doesn't enabled with full",
          "timestamp": "2021-01-09T20:05:49+08:00",
          "tree_id": "3ff2c0507f86f3ecc1f5387b95318634bcd5fd12",
          "url": "https://github.com/cssivision/tokio/commit/6971d656734b3d0145067622f744f70f936d8682"
        },
        "date": 1610194640003,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 894,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16402,
            "range": "± 5330",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 945,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15747,
            "range": "± 5373",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 555,
            "range": "± 144",
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
          "id": "51a7082d135f52f5fe87ddd9ccc09d4d2a401dd4",
          "message": "docs: test-util feature is not enabled with full (#3397)",
          "timestamp": "2021-01-09T14:01:10+01:00",
          "tree_id": "3ff2c0507f86f3ecc1f5387b95318634bcd5fd12",
          "url": "https://github.com/cssivision/tokio/commit/51a7082d135f52f5fe87ddd9ccc09d4d2a401dd4"
        },
        "date": 1610264269669,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 843,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13310,
            "range": "± 2427",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 869,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13337,
            "range": "± 2261",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 496,
            "range": "± 20",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robjtede@icloud.com",
            "name": "Rob Ede",
            "username": "robjtede"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "06d6adf4b7597fa316f3277c2aa60da27dac59fc",
          "message": "util: use ReusableBoxFuture for PollSemaphore (#3463)",
          "timestamp": "2021-01-30T10:57:04+01:00",
          "tree_id": "70444423e9bde1b15802535904a31d4e7af31a51",
          "url": "https://github.com/cssivision/tokio/commit/06d6adf4b7597fa316f3277c2aa60da27dac59fc"
        },
        "date": 1612007803443,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 786,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14001,
            "range": "± 4078",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 725,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13710,
            "range": "± 3392",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 492,
            "range": "± 130",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adam@adamharvey.name",
            "name": "Adam Harvey",
            "username": "LawnGnome"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53558cb48964d7e0f2c97687504711ab47bf1890",
          "message": "doc: note the EOF behaviour of read_until (#3536)",
          "timestamp": "2021-02-20T10:22:51+01:00",
          "tree_id": "84800a72f434ef6b5854b4227defe9d077506a79",
          "url": "https://github.com/cssivision/tokio/commit/53558cb48964d7e0f2c97687504711ab47bf1890"
        },
        "date": 1613974793701,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 946,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13572,
            "range": "± 3819",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 989,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14256,
            "range": "± 3290",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 622,
            "range": "± 141",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "guswynn@gmail.com",
            "name": "Gus Wynn",
            "username": "guswynn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d838bf5ade7509e622559458a367cca65133f06",
          "message": "io: fix link to std src in util (#3568)\n\nThe big move or 'src' in rust-lang caused this link to be broken",
          "timestamp": "2021-03-02T02:50:13+09:00",
          "tree_id": "4aebe568d0e20a57cf746664f172704157738a06",
          "url": "https://github.com/cssivision/tokio/commit/0d838bf5ade7509e622559458a367cca65133f06"
        },
        "date": 1614658023304,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1044,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16542,
            "range": "± 4612",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1083,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15004,
            "range": "± 3428",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 618,
            "range": "± 9",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "704de8c01b331c2651c0cdb0d5ec6b0657e14344",
          "message": "stream: remove duplicate `doc(test(..))` & `cfg_attr` declarations (#3571)",
          "timestamp": "2021-03-06T20:54:28+09:00",
          "tree_id": "05cfb9504112210a7d4e372c30c16177aee4ee59",
          "url": "https://github.com/cssivision/tokio/commit/704de8c01b331c2651c0cdb0d5ec6b0657e14344"
        },
        "date": 1615037869022,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 763,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14192,
            "range": "± 6633",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 762,
            "range": "± 485",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13855,
            "range": "± 4236",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 454,
            "range": "± 79",
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
          "id": "6e911531683f2cc35d2edbaa51a45687130d21e7",
          "message": "remove ds store",
          "timestamp": "2021-03-06T22:09:13+08:00",
          "tree_id": "8f9f4d2a36e63e65ea456f0494d69cc6d2354187",
          "url": "https://github.com/cssivision/tokio/commit/6e911531683f2cc35d2edbaa51a45687130d21e7"
        },
        "date": 1615040033590,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1031,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14587,
            "range": "± 2680",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 984,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14700,
            "range": "± 3793",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 568,
            "range": "± 53",
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
          "id": "92675565670aa0fd92a443fbbbe70bf1be87bc7e",
          "message": "fix clippy -D warnings",
          "timestamp": "2021-03-07T10:39:13+08:00",
          "tree_id": "8f9f4d2a36e63e65ea456f0494d69cc6d2354187",
          "url": "https://github.com/cssivision/tokio/commit/92675565670aa0fd92a443fbbbe70bf1be87bc7e"
        },
        "date": 1615084878860,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 987,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14272,
            "range": "± 3120",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1000,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14539,
            "range": "± 5675",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 578,
            "range": "± 37",
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
          "id": "58e861a40b0441b6be13bf49911df1535e2d9e42",
          "message": "fix clippy",
          "timestamp": "2021-03-07T10:43:34+08:00",
          "tree_id": "49374ac82db5542c7b12c963c80befd2ff4c2b44",
          "url": "https://github.com/cssivision/tokio/commit/58e861a40b0441b6be13bf49911df1535e2d9e42"
        },
        "date": 1615085135073,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1004,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15479,
            "range": "± 3840",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1042,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14898,
            "range": "± 4302",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 599,
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
          "id": "4530f78a47c0ecac4afae50073b8f8bf2f57fe6a",
          "message": "fix clippy -D warnings",
          "timestamp": "2021-03-07T11:17:56+08:00",
          "tree_id": "fae3afb40e05f898534054f82b9affea62295226",
          "url": "https://github.com/cssivision/tokio/commit/4530f78a47c0ecac4afae50073b8f8bf2f57fe6a"
        },
        "date": 1615087198332,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 952,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14631,
            "range": "± 3435",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1003,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14229,
            "range": "± 2903",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 564,
            "range": "± 155",
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
          "id": "1f9e97ad4c9e2620712a5806c9be3b61fc09884e",
          "message": "fix clippy",
          "timestamp": "2021-03-10T10:12:44+08:00",
          "tree_id": "9b62d0d24e0eecba6115f0f6b5ca39b79125f105",
          "url": "https://github.com/cssivision/tokio/commit/1f9e97ad4c9e2620712a5806c9be3b61fc09884e"
        },
        "date": 1615342312113,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1005,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 17127,
            "range": "± 8812",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 954,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 17665,
            "range": "± 6886",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 567,
            "range": "± 145",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46445660+CorinJG@users.noreply.github.com",
            "name": "CorinJG",
            "username": "CorinJG"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a80d6eee542847c9e8399f1c6a0d495fb3817a0",
          "message": "sync: improve doc on blocking mutex (#3645)",
          "timestamp": "2021-03-27T13:26:10+01:00",
          "tree_id": "a0d10efb9b60d62a44902a624c6f3b851d1c8ddf",
          "url": "https://github.com/cssivision/tokio/commit/1a80d6eee542847c9e8399f1c6a0d495fb3817a0"
        },
        "date": 1616921445472,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 880,
            "range": "± 319",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15317,
            "range": "± 4673",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 948,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15658,
            "range": "± 5006",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 494,
            "range": "± 106",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "2b9b55810847b4c7855e3de82f432ca997600f30",
          "message": "time: prevent `time::advance` from going too far (#3712)\n\nPreviously, `time::advance` would set the mocked clock forward the\r\nrequested amount, then yield. However, if there was no work ready to\r\nperform immediately, this would result in advancing to the next expiring\r\nsleep.\r\n\r\nNow, `time::advance(...)` will unblock at the requested time. The\r\ndifference between `time::advance(...)` and `time::sleep(...)` is a bit\r\nfuzzy. The main difference is `time::sleep(...)` operates on the current\r\ntask and `time::advance(...)` operates at the runtime level.\r\n\r\nFixes #3710",
          "timestamp": "2021-04-21T15:23:35-07:00",
          "tree_id": "6e5d0c6d86afdeaee3700f2851df5e78bfe7f8a4",
          "url": "https://github.com/cssivision/tokio/commit/2b9b55810847b4c7855e3de82f432ca997600f30"
        },
        "date": 1619064378376,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1041,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16686,
            "range": "± 7917",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1057,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 17580,
            "range": "± 6705",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 567,
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
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "distinct": true,
          "id": "bffe0e228c11e6f3885c461b001d57dc9d8f9a74",
          "message": "io: CopyBuffer should keep reading when there's space in the buffer",
          "timestamp": "2021-04-22T13:13:12+08:00",
          "tree_id": "98b48327f1cd5ffd678d4c6ba9e10b9472f3a481",
          "url": "https://github.com/cssivision/tokio/commit/bffe0e228c11e6f3885c461b001d57dc9d8f9a74"
        },
        "date": 1619068518017,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1065,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16854,
            "range": "± 6373",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1090,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 17015,
            "range": "± 6483",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 598,
            "range": "± 139",
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
          "id": "570a349ad7b7dadeb2cb45e558a2cc818eafc494",
          "message": "io: CopyBuffer should keep reading when there's space in the buffer",
          "timestamp": "2021-04-22T13:20:58+08:00",
          "tree_id": "b5975cae54f10c645d38b25ce3bac75e1f0086af",
          "url": "https://github.com/cssivision/tokio/commit/570a349ad7b7dadeb2cb45e558a2cc818eafc494"
        },
        "date": 1619068966527,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1058,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14943,
            "range": "± 4679",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1067,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 17022,
            "range": "± 6907",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 591,
            "range": "± 46",
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
          "id": "bf8bebf0d11476e49699ad24986cf1f9cda20ed3",
          "message": "io: CopyBuffer should keep reading when there's space in the buffer",
          "timestamp": "2021-04-24T16:54:07+08:00",
          "tree_id": "77b61bef917135470e66d76c68e6d304d20e117b",
          "url": "https://github.com/cssivision/tokio/commit/bf8bebf0d11476e49699ad24986cf1f9cda20ed3"
        },
        "date": 1619254596091,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 902,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15090,
            "range": "± 3891",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 911,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14364,
            "range": "± 3851",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 516,
            "range": "± 64",
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
        "date": 1607655524276,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 178493,
            "range": "± 36246",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 668151,
            "range": "± 69849",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5455919,
            "range": "± 938291",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19367798,
            "range": "± 3273394",
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
          "id": "f6dd8a63af284454c875b6a08cf929f07e16ce38",
          "message": "net: UnixStream fix doc compile",
          "timestamp": "2020-12-11T11:06:01+08:00",
          "tree_id": "74faae013ae4dd05abae4e60abf1d5539d11fd3b",
          "url": "https://github.com/cssivision/tokio/commit/f6dd8a63af284454c875b6a08cf929f07e16ce38"
        },
        "date": 1607656250553,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 182589,
            "range": "± 56079",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 674637,
            "range": "± 172804",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4851925,
            "range": "± 1388706",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 17745587,
            "range": "± 2564093",
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
          "id": "d535135cdcfe6a917308e539ebf94bc94f8bf07e",
          "message": "Add semicolon to continue",
          "timestamp": "2020-12-13T15:37:25+01:00",
          "tree_id": "71f10d19362f9b7eb1ee50ae67074306099eb566",
          "url": "https://github.com/cssivision/tokio/commit/d535135cdcfe6a917308e539ebf94bc94f8bf07e"
        },
        "date": 1607870561409,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 157196,
            "range": "± 3846",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 614812,
            "range": "± 21393",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4684624,
            "range": "± 830567",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18119720,
            "range": "± 2074494",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "28933599888a88e601acbb11fa824b0ee9f98c6e",
          "message": "chore: update to `bytes` 1.0 git branch (#3301)\n\nUpdates the code base to track the `bytes` git branch. This is in\r\npreparation for the 1.0 release.\r\n\r\nCloses #3058",
          "timestamp": "2020-12-19T15:57:16-08:00",
          "tree_id": "2021ef3acf9407fcfa39032e0a493a81f1eb74cc",
          "url": "https://github.com/cssivision/tokio/commit/28933599888a88e601acbb11fa824b0ee9f98c6e"
        },
        "date": 1608561054971,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 190153,
            "range": "± 44686",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 716817,
            "range": "± 135477",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5241265,
            "range": "± 1268432",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21057148,
            "range": "± 3343759",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "0deaeb84948f253b76b7fe64d7fe9d4527cd4275",
          "message": "chore: remove unused `slab` dependency (#3318)",
          "timestamp": "2020-12-22T21:56:22-08:00",
          "tree_id": "3b9ad84403d71b2ad5d2c749c23516c3dfaec3ce",
          "url": "https://github.com/cssivision/tokio/commit/0deaeb84948f253b76b7fe64d7fe9d4527cd4275"
        },
        "date": 1608705440649,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 155649,
            "range": "± 4041",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 615802,
            "range": "± 14213",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4762666,
            "range": "± 509379",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18560965,
            "range": "± 1904991",
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
          "id": "2330edc875ed8b873b6ffc4686feef1534658f79",
          "message": "chore: prepare tokio 1.0.1 release (#3347)",
          "timestamp": "2020-12-25T22:20:05+01:00",
          "tree_id": "9666ca615c4f2bf81a5c7a311ce0e3b3e7e30047",
          "url": "https://github.com/cssivision/tokio/commit/2330edc875ed8b873b6ffc4686feef1534658f79"
        },
        "date": 1608985286123,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 194931,
            "range": "± 4117",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 759211,
            "range": "± 29437",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5739173,
            "range": "± 888248",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 22264834,
            "range": "± 2362815",
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
          "id": "a78f371759d8b9eae7fc799e7ed74456ccf7d7a0",
          "message": "net: Add try_read_buf and try_recv_buf",
          "timestamp": "2020-12-27T18:37:45+08:00",
          "tree_id": "0a6ec5ed64e2b6776a535f5d04680dcca0b5953c",
          "url": "https://github.com/cssivision/tokio/commit/a78f371759d8b9eae7fc799e7ed74456ccf7d7a0"
        },
        "date": 1609065716104,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 190225,
            "range": "± 10307",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 731898,
            "range": "± 29619",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5921434,
            "range": "± 1148763",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20802614,
            "range": "± 2436012",
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
          "id": "1a3fccee46e8abacd32376d5bbc7698f5cc31df6",
          "message": "net: Add try_read_buf and try_recv_buf enable in io-util features",
          "timestamp": "2020-12-27T18:58:01+08:00",
          "tree_id": "76d754841fc4fab30808763f86066e247b9430f1",
          "url": "https://github.com/cssivision/tokio/commit/1a3fccee46e8abacd32376d5bbc7698f5cc31df6"
        },
        "date": 1609066948183,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 156253,
            "range": "± 4797",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 620656,
            "range": "± 24151",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5036883,
            "range": "± 633627",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 17398635,
            "range": "± 2265670",
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
          "id": "eb0d64ef2bbbb821dcbc978a25a042e564b6173c",
          "message": "net: try_recv_buf fix doc",
          "timestamp": "2020-12-27T19:08:54+08:00",
          "tree_id": "2d035a878fcdbae31e13ebbc4ae5442cb225558a",
          "url": "https://github.com/cssivision/tokio/commit/eb0d64ef2bbbb821dcbc978a25a042e564b6173c"
        },
        "date": 1609067662700,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 156207,
            "range": "± 5367",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 619436,
            "range": "± 22582",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4841288,
            "range": "± 786327",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18289665,
            "range": "± 1921154",
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
          "id": "d80d5f83e4fb916427b25cf951249b3690688279",
          "message": "net: try_recv_buf_from fix doc",
          "timestamp": "2020-12-27T19:12:53+08:00",
          "tree_id": "f574d78f89bc389ee7b4fc8b2cf04fae02f99db0",
          "url": "https://github.com/cssivision/tokio/commit/d80d5f83e4fb916427b25cf951249b3690688279"
        },
        "date": 1609068372976,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 174678,
            "range": "± 31108",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 632015,
            "range": "± 101929",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4587405,
            "range": "± 1225219",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18288594,
            "range": "± 3748882",
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
          "id": "5c5e7f1c3cb0a4379d9dcd5faaf6561331c5aed5",
          "message": "Update tokio/src/net/tcp/stream.rs\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-28T10:36:39+08:00",
          "tree_id": "918d9c906603b18d6d2f37f0c2aed89014ae9a2e",
          "url": "https://github.com/cssivision/tokio/commit/5c5e7f1c3cb0a4379d9dcd5faaf6561331c5aed5"
        },
        "date": 1609123235861,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 158002,
            "range": "± 5347",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 634117,
            "range": "± 47831",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4938597,
            "range": "± 1205413",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18041195,
            "range": "± 2905037",
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
          "id": "17d9c7bc6453544f84ffdf5ad2891c263b9d4e07",
          "message": "fix doc",
          "timestamp": "2020-12-28T10:52:34+08:00",
          "tree_id": "98ebb0518e7835df51147079a9304bbe810e89a8",
          "url": "https://github.com/cssivision/tokio/commit/17d9c7bc6453544f84ffdf5ad2891c263b9d4e07"
        },
        "date": 1609124008264,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 156521,
            "range": "± 5210",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 620524,
            "range": "± 16794",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4877803,
            "range": "± 1263811",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18241457,
            "range": "± 2993078",
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
          "id": "f22bab3f1042598684975080cd3a24fe30a7ef3e",
          "message": "remove capcacity check",
          "timestamp": "2020-12-29T14:52:53+08:00",
          "tree_id": "f37f7dc44770ba4591cef8e64416b920af64bf36",
          "url": "https://github.com/cssivision/tokio/commit/f22bab3f1042598684975080cd3a24fe30a7ef3e"
        },
        "date": 1609224955913,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 185281,
            "range": "± 26294",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 696566,
            "range": "± 48821",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5362819,
            "range": "± 627949",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20352930,
            "range": "± 2349649",
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
          "id": "bd71dbeffcadd6a0bac0bbbcbe63f0bf2a2943a7",
          "message": "check uds_stream it is no longer readable",
          "timestamp": "2020-12-31T12:04:47+08:00",
          "tree_id": "e6f14f60859d21e6082c069cceeadd5786742bac",
          "url": "https://github.com/cssivision/tokio/commit/bd71dbeffcadd6a0bac0bbbcbe63f0bf2a2943a7"
        },
        "date": 1609387701427,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 207558,
            "range": "± 51469",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 863742,
            "range": "± 577453",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5665547,
            "range": "± 1763230",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21609995,
            "range": "± 2732913",
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
          "id": "2e80d5b0134ce77c8b3b66bf21ecfc995acc1264",
          "message": "remove capcacity check",
          "timestamp": "2020-12-30T10:48:33+08:00",
          "tree_id": "6d144291e86da2675f3856a5c7f03c1a01cc9c70",
          "url": "https://github.com/cssivision/tokio/commit/2e80d5b0134ce77c8b3b66bf21ecfc995acc1264"
        },
        "date": 1609388208056,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 197557,
            "range": "± 47356",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 711395,
            "range": "± 103791",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5155130,
            "range": "± 1121304",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20139583,
            "range": "± 2702195",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cdart@anduril.com",
            "name": "Cameron",
            "username": "SkamDart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22c27b9282da399574bf9d58461fe0f1869be894",
          "message": "task: wake LocalSet on spawn_local (#3369)",
          "timestamp": "2021-01-09T11:46:51+01:00",
          "tree_id": "fea07ef93e77faf10bd1c08598dd1157ce9e72e5",
          "url": "https://github.com/cssivision/tokio/commit/22c27b9282da399574bf9d58461fe0f1869be894"
        },
        "date": 1610194031806,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 177665,
            "range": "± 30216",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 679360,
            "range": "± 169387",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5062786,
            "range": "± 1387467",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18670864,
            "range": "± 2136461",
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
          "id": "6971d656734b3d0145067622f744f70f936d8682",
          "message": "docs: test-util feature doesn't enabled with full",
          "timestamp": "2021-01-09T20:05:49+08:00",
          "tree_id": "3ff2c0507f86f3ecc1f5387b95318634bcd5fd12",
          "url": "https://github.com/cssivision/tokio/commit/6971d656734b3d0145067622f744f70f936d8682"
        },
        "date": 1610194572091,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 192592,
            "range": "± 48857",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 741183,
            "range": "± 82511",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5545554,
            "range": "± 980495",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21085171,
            "range": "± 2424403",
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
          "id": "51a7082d135f52f5fe87ddd9ccc09d4d2a401dd4",
          "message": "docs: test-util feature is not enabled with full (#3397)",
          "timestamp": "2021-01-09T14:01:10+01:00",
          "tree_id": "3ff2c0507f86f3ecc1f5387b95318634bcd5fd12",
          "url": "https://github.com/cssivision/tokio/commit/51a7082d135f52f5fe87ddd9ccc09d4d2a401dd4"
        },
        "date": 1610264264390,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 192043,
            "range": "± 10707",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 728913,
            "range": "± 100795",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5505952,
            "range": "± 792212",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20795342,
            "range": "± 2563120",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robjtede@icloud.com",
            "name": "Rob Ede",
            "username": "robjtede"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "06d6adf4b7597fa316f3277c2aa60da27dac59fc",
          "message": "util: use ReusableBoxFuture for PollSemaphore (#3463)",
          "timestamp": "2021-01-30T10:57:04+01:00",
          "tree_id": "70444423e9bde1b15802535904a31d4e7af31a51",
          "url": "https://github.com/cssivision/tokio/commit/06d6adf4b7597fa316f3277c2aa60da27dac59fc"
        },
        "date": 1612007778984,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 189826,
            "range": "± 22214",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 741350,
            "range": "± 174766",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5671999,
            "range": "± 1338943",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20474033,
            "range": "± 2756562",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adam@adamharvey.name",
            "name": "Adam Harvey",
            "username": "LawnGnome"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53558cb48964d7e0f2c97687504711ab47bf1890",
          "message": "doc: note the EOF behaviour of read_until (#3536)",
          "timestamp": "2021-02-20T10:22:51+01:00",
          "tree_id": "84800a72f434ef6b5854b4227defe9d077506a79",
          "url": "https://github.com/cssivision/tokio/commit/53558cb48964d7e0f2c97687504711ab47bf1890"
        },
        "date": 1613974805287,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 198968,
            "range": "± 78889",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 734398,
            "range": "± 129728",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5669688,
            "range": "± 1790601",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20685648,
            "range": "± 2544673",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "guswynn@gmail.com",
            "name": "Gus Wynn",
            "username": "guswynn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d838bf5ade7509e622559458a367cca65133f06",
          "message": "io: fix link to std src in util (#3568)\n\nThe big move or 'src' in rust-lang caused this link to be broken",
          "timestamp": "2021-03-02T02:50:13+09:00",
          "tree_id": "4aebe568d0e20a57cf746664f172704157738a06",
          "url": "https://github.com/cssivision/tokio/commit/0d838bf5ade7509e622559458a367cca65133f06"
        },
        "date": 1614658039380,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 195163,
            "range": "± 42637",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 697550,
            "range": "± 203458",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4743227,
            "range": "± 1081007",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18915392,
            "range": "± 2062974",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "704de8c01b331c2651c0cdb0d5ec6b0657e14344",
          "message": "stream: remove duplicate `doc(test(..))` & `cfg_attr` declarations (#3571)",
          "timestamp": "2021-03-06T20:54:28+09:00",
          "tree_id": "05cfb9504112210a7d4e372c30c16177aee4ee59",
          "url": "https://github.com/cssivision/tokio/commit/704de8c01b331c2651c0cdb0d5ec6b0657e14344"
        },
        "date": 1615037885166,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 182978,
            "range": "± 29461",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 687538,
            "range": "± 93986",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5196624,
            "range": "± 1463127",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19614179,
            "range": "± 3238775",
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
          "id": "6e911531683f2cc35d2edbaa51a45687130d21e7",
          "message": "remove ds store",
          "timestamp": "2021-03-06T22:09:13+08:00",
          "tree_id": "8f9f4d2a36e63e65ea456f0494d69cc6d2354187",
          "url": "https://github.com/cssivision/tokio/commit/6e911531683f2cc35d2edbaa51a45687130d21e7"
        },
        "date": 1615040033793,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 185530,
            "range": "± 45745",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 694332,
            "range": "± 144601",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4241622,
            "range": "± 541010",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19142164,
            "range": "± 1874434",
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
          "id": "92675565670aa0fd92a443fbbbe70bf1be87bc7e",
          "message": "fix clippy -D warnings",
          "timestamp": "2021-03-07T10:39:13+08:00",
          "tree_id": "8f9f4d2a36e63e65ea456f0494d69cc6d2354187",
          "url": "https://github.com/cssivision/tokio/commit/92675565670aa0fd92a443fbbbe70bf1be87bc7e"
        },
        "date": 1615084880045,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 200739,
            "range": "± 28354",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 707452,
            "range": "± 46025",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5480190,
            "range": "± 450459",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20819102,
            "range": "± 2693810",
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
          "id": "58e861a40b0441b6be13bf49911df1535e2d9e42",
          "message": "fix clippy",
          "timestamp": "2021-03-07T10:43:34+08:00",
          "tree_id": "49374ac82db5542c7b12c963c80befd2ff4c2b44",
          "url": "https://github.com/cssivision/tokio/commit/58e861a40b0441b6be13bf49911df1535e2d9e42"
        },
        "date": 1615085154238,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 242265,
            "range": "± 129878",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 838788,
            "range": "± 393571",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5150722,
            "range": "± 990864",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21785948,
            "range": "± 3648194",
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
          "id": "4530f78a47c0ecac4afae50073b8f8bf2f57fe6a",
          "message": "fix clippy -D warnings",
          "timestamp": "2021-03-07T11:17:56+08:00",
          "tree_id": "fae3afb40e05f898534054f82b9affea62295226",
          "url": "https://github.com/cssivision/tokio/commit/4530f78a47c0ecac4afae50073b8f8bf2f57fe6a"
        },
        "date": 1615087194377,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 166278,
            "range": "± 25951",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 603660,
            "range": "± 176992",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4259115,
            "range": "± 868308",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 17516100,
            "range": "± 3056073",
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
          "id": "1f9e97ad4c9e2620712a5806c9be3b61fc09884e",
          "message": "fix clippy",
          "timestamp": "2021-03-10T10:12:44+08:00",
          "tree_id": "9b62d0d24e0eecba6115f0f6b5ca39b79125f105",
          "url": "https://github.com/cssivision/tokio/commit/1f9e97ad4c9e2620712a5806c9be3b61fc09884e"
        },
        "date": 1615342290684,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 187366,
            "range": "± 22938",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 704444,
            "range": "± 80623",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5310464,
            "range": "± 697995",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19474158,
            "range": "± 2739628",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46445660+CorinJG@users.noreply.github.com",
            "name": "CorinJG",
            "username": "CorinJG"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a80d6eee542847c9e8399f1c6a0d495fb3817a0",
          "message": "sync: improve doc on blocking mutex (#3645)",
          "timestamp": "2021-03-27T13:26:10+01:00",
          "tree_id": "a0d10efb9b60d62a44902a624c6f3b851d1c8ddf",
          "url": "https://github.com/cssivision/tokio/commit/1a80d6eee542847c9e8399f1c6a0d495fb3817a0"
        },
        "date": 1616921451619,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 194915,
            "range": "± 21490",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 733054,
            "range": "± 112435",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5606381,
            "range": "± 1007948",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 22191965,
            "range": "± 3838249",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "2b9b55810847b4c7855e3de82f432ca997600f30",
          "message": "time: prevent `time::advance` from going too far (#3712)\n\nPreviously, `time::advance` would set the mocked clock forward the\r\nrequested amount, then yield. However, if there was no work ready to\r\nperform immediately, this would result in advancing to the next expiring\r\nsleep.\r\n\r\nNow, `time::advance(...)` will unblock at the requested time. The\r\ndifference between `time::advance(...)` and `time::sleep(...)` is a bit\r\nfuzzy. The main difference is `time::sleep(...)` operates on the current\r\ntask and `time::advance(...)` operates at the runtime level.\r\n\r\nFixes #3710",
          "timestamp": "2021-04-21T15:23:35-07:00",
          "tree_id": "6e5d0c6d86afdeaee3700f2851df5e78bfe7f8a4",
          "url": "https://github.com/cssivision/tokio/commit/2b9b55810847b4c7855e3de82f432ca997600f30"
        },
        "date": 1619064374179,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 191202,
            "range": "± 14328",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 711947,
            "range": "± 62697",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5251141,
            "range": "± 1040623",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21733643,
            "range": "± 4745032",
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
          "id": "bffe0e228c11e6f3885c461b001d57dc9d8f9a74",
          "message": "io: CopyBuffer should keep reading when there's space in the buffer",
          "timestamp": "2021-04-22T13:13:12+08:00",
          "tree_id": "98b48327f1cd5ffd678d4c6ba9e10b9472f3a481",
          "url": "https://github.com/cssivision/tokio/commit/bffe0e228c11e6f3885c461b001d57dc9d8f9a74"
        },
        "date": 1619068526021,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 198588,
            "range": "± 55028",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 720071,
            "range": "± 145320",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4593512,
            "range": "± 1226214",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20550600,
            "range": "± 3971591",
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
          "id": "570a349ad7b7dadeb2cb45e558a2cc818eafc494",
          "message": "io: CopyBuffer should keep reading when there's space in the buffer",
          "timestamp": "2021-04-22T13:20:58+08:00",
          "tree_id": "b5975cae54f10c645d38b25ce3bac75e1f0086af",
          "url": "https://github.com/cssivision/tokio/commit/570a349ad7b7dadeb2cb45e558a2cc818eafc494"
        },
        "date": 1619068976077,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 194850,
            "range": "± 66328",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 703523,
            "range": "± 187799",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4469264,
            "range": "± 945543",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19284725,
            "range": "± 3176618",
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
          "id": "bf8bebf0d11476e49699ad24986cf1f9cda20ed3",
          "message": "io: CopyBuffer should keep reading when there's space in the buffer",
          "timestamp": "2021-04-24T16:54:07+08:00",
          "tree_id": "77b61bef917135470e66d76c68e6d304d20e117b",
          "url": "https://github.com/cssivision/tokio/commit/bf8bebf0d11476e49699ad24986cf1f9cda20ed3"
        },
        "date": 1619254586969,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 165907,
            "range": "± 7830",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 650505,
            "range": "± 187866",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4730150,
            "range": "± 973606",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20051596,
            "range": "± 4670634",
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
          "id": "f6dd8a63af284454c875b6a08cf929f07e16ce38",
          "message": "net: UnixStream fix doc compile",
          "timestamp": "2020-12-11T11:06:01+08:00",
          "tree_id": "74faae013ae4dd05abae4e60abf1d5539d11fd3b",
          "url": "https://github.com/cssivision/tokio/commit/f6dd8a63af284454c875b6a08cf929f07e16ce38"
        },
        "date": 1607656332396,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16753,
            "range": "± 6436",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1100,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 654,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15674,
            "range": "± 5997",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1095,
            "range": "± 23",
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
          "id": "d535135cdcfe6a917308e539ebf94bc94f8bf07e",
          "message": "Add semicolon to continue",
          "timestamp": "2020-12-13T15:37:25+01:00",
          "tree_id": "71f10d19362f9b7eb1ee50ae67074306099eb566",
          "url": "https://github.com/cssivision/tokio/commit/d535135cdcfe6a917308e539ebf94bc94f8bf07e"
        },
        "date": 1607870574245,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15197,
            "range": "± 4678",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1084,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 632,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15180,
            "range": "± 3140",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1079,
            "range": "± 127",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "28933599888a88e601acbb11fa824b0ee9f98c6e",
          "message": "chore: update to `bytes` 1.0 git branch (#3301)\n\nUpdates the code base to track the `bytes` git branch. This is in\r\npreparation for the 1.0 release.\r\n\r\nCloses #3058",
          "timestamp": "2020-12-19T15:57:16-08:00",
          "tree_id": "2021ef3acf9407fcfa39032e0a493a81f1eb74cc",
          "url": "https://github.com/cssivision/tokio/commit/28933599888a88e601acbb11fa824b0ee9f98c6e"
        },
        "date": 1608561048871,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14902,
            "range": "± 3425",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 888,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 518,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13951,
            "range": "± 3850",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 934,
            "range": "± 310",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "0deaeb84948f253b76b7fe64d7fe9d4527cd4275",
          "message": "chore: remove unused `slab` dependency (#3318)",
          "timestamp": "2020-12-22T21:56:22-08:00",
          "tree_id": "3b9ad84403d71b2ad5d2c749c23516c3dfaec3ce",
          "url": "https://github.com/cssivision/tokio/commit/0deaeb84948f253b76b7fe64d7fe9d4527cd4275"
        },
        "date": 1608705529938,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16093,
            "range": "± 4501",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1096,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 647,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15673,
            "range": "± 4570",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1099,
            "range": "± 69",
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
          "id": "2330edc875ed8b873b6ffc4686feef1534658f79",
          "message": "chore: prepare tokio 1.0.1 release (#3347)",
          "timestamp": "2020-12-25T22:20:05+01:00",
          "tree_id": "9666ca615c4f2bf81a5c7a311ce0e3b3e7e30047",
          "url": "https://github.com/cssivision/tokio/commit/2330edc875ed8b873b6ffc4686feef1534658f79"
        },
        "date": 1608985282341,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15974,
            "range": "± 5191",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1082,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 640,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16219,
            "range": "± 6669",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1082,
            "range": "± 125",
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
          "id": "a78f371759d8b9eae7fc799e7ed74456ccf7d7a0",
          "message": "net: Add try_read_buf and try_recv_buf",
          "timestamp": "2020-12-27T18:37:45+08:00",
          "tree_id": "0a6ec5ed64e2b6776a535f5d04680dcca0b5953c",
          "url": "https://github.com/cssivision/tokio/commit/a78f371759d8b9eae7fc799e7ed74456ccf7d7a0"
        },
        "date": 1609065749784,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14847,
            "range": "± 5902",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 995,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 581,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14621,
            "range": "± 3057",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 983,
            "range": "± 225",
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
          "id": "1a3fccee46e8abacd32376d5bbc7698f5cc31df6",
          "message": "net: Add try_read_buf and try_recv_buf enable in io-util features",
          "timestamp": "2020-12-27T18:58:01+08:00",
          "tree_id": "76d754841fc4fab30808763f86066e247b9430f1",
          "url": "https://github.com/cssivision/tokio/commit/1a3fccee46e8abacd32376d5bbc7698f5cc31df6"
        },
        "date": 1609067013641,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13464,
            "range": "± 2934",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 909,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 541,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13839,
            "range": "± 2695",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 909,
            "range": "± 13",
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
          "id": "eb0d64ef2bbbb821dcbc978a25a042e564b6173c",
          "message": "net: try_recv_buf fix doc",
          "timestamp": "2020-12-27T19:08:54+08:00",
          "tree_id": "2d035a878fcdbae31e13ebbc4ae5442cb225558a",
          "url": "https://github.com/cssivision/tokio/commit/eb0d64ef2bbbb821dcbc978a25a042e564b6173c"
        },
        "date": 1609067781587,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15941,
            "range": "± 5214",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1096,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 625,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15923,
            "range": "± 4465",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1093,
            "range": "± 172",
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
          "id": "d80d5f83e4fb916427b25cf951249b3690688279",
          "message": "net: try_recv_buf_from fix doc",
          "timestamp": "2020-12-27T19:12:53+08:00",
          "tree_id": "f574d78f89bc389ee7b4fc8b2cf04fae02f99db0",
          "url": "https://github.com/cssivision/tokio/commit/d80d5f83e4fb916427b25cf951249b3690688279"
        },
        "date": 1609068467270,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13208,
            "range": "± 3126",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 880,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 501,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13820,
            "range": "± 4164",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 964,
            "range": "± 141",
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
          "id": "5c5e7f1c3cb0a4379d9dcd5faaf6561331c5aed5",
          "message": "Update tokio/src/net/tcp/stream.rs\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-28T10:36:39+08:00",
          "tree_id": "918d9c906603b18d6d2f37f0c2aed89014ae9a2e",
          "url": "https://github.com/cssivision/tokio/commit/5c5e7f1c3cb0a4379d9dcd5faaf6561331c5aed5"
        },
        "date": 1609123257800,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14900,
            "range": "± 4112",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1023,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 588,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15027,
            "range": "± 3613",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1032,
            "range": "± 189",
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
          "id": "17d9c7bc6453544f84ffdf5ad2891c263b9d4e07",
          "message": "fix doc",
          "timestamp": "2020-12-28T10:52:34+08:00",
          "tree_id": "98ebb0518e7835df51147079a9304bbe810e89a8",
          "url": "https://github.com/cssivision/tokio/commit/17d9c7bc6453544f84ffdf5ad2891c263b9d4e07"
        },
        "date": 1609124026521,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14891,
            "range": "± 7459",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1109,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 630,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15119,
            "range": "± 4390",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1089,
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
          "id": "f22bab3f1042598684975080cd3a24fe30a7ef3e",
          "message": "remove capcacity check",
          "timestamp": "2020-12-29T14:52:53+08:00",
          "tree_id": "f37f7dc44770ba4591cef8e64416b920af64bf36",
          "url": "https://github.com/cssivision/tokio/commit/f22bab3f1042598684975080cd3a24fe30a7ef3e"
        },
        "date": 1609224977074,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14002,
            "range": "± 3033",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 915,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 539,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14147,
            "range": "± 2818",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 912,
            "range": "± 5",
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
          "id": "bd71dbeffcadd6a0bac0bbbcbe63f0bf2a2943a7",
          "message": "check uds_stream it is no longer readable",
          "timestamp": "2020-12-31T12:04:47+08:00",
          "tree_id": "e6f14f60859d21e6082c069cceeadd5786742bac",
          "url": "https://github.com/cssivision/tokio/commit/bd71dbeffcadd6a0bac0bbbcbe63f0bf2a2943a7"
        },
        "date": 1609387724958,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15718,
            "range": "± 6144",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1094,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 654,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15944,
            "range": "± 5214",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1081,
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
          "id": "2e80d5b0134ce77c8b3b66bf21ecfc995acc1264",
          "message": "remove capcacity check",
          "timestamp": "2020-12-30T10:48:33+08:00",
          "tree_id": "6d144291e86da2675f3856a5c7f03c1a01cc9c70",
          "url": "https://github.com/cssivision/tokio/commit/2e80d5b0134ce77c8b3b66bf21ecfc995acc1264"
        },
        "date": 1609388286258,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15825,
            "range": "± 4609",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1140,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 673,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15356,
            "range": "± 3764",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1142,
            "range": "± 15",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cdart@anduril.com",
            "name": "Cameron",
            "username": "SkamDart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22c27b9282da399574bf9d58461fe0f1869be894",
          "message": "task: wake LocalSet on spawn_local (#3369)",
          "timestamp": "2021-01-09T11:46:51+01:00",
          "tree_id": "fea07ef93e77faf10bd1c08598dd1157ce9e72e5",
          "url": "https://github.com/cssivision/tokio/commit/22c27b9282da399574bf9d58461fe0f1869be894"
        },
        "date": 1610194027965,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13128,
            "range": "± 2762",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 913,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 554,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13370,
            "range": "± 2441",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 915,
            "range": "± 5",
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
          "id": "6971d656734b3d0145067622f744f70f936d8682",
          "message": "docs: test-util feature doesn't enabled with full",
          "timestamp": "2021-01-09T20:05:49+08:00",
          "tree_id": "3ff2c0507f86f3ecc1f5387b95318634bcd5fd12",
          "url": "https://github.com/cssivision/tokio/commit/6971d656734b3d0145067622f744f70f936d8682"
        },
        "date": 1610194657222,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14908,
            "range": "± 4804",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1020,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 631,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16513,
            "range": "± 9626",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1008,
            "range": "± 248",
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
          "id": "51a7082d135f52f5fe87ddd9ccc09d4d2a401dd4",
          "message": "docs: test-util feature is not enabled with full (#3397)",
          "timestamp": "2021-01-09T14:01:10+01:00",
          "tree_id": "3ff2c0507f86f3ecc1f5387b95318634bcd5fd12",
          "url": "https://github.com/cssivision/tokio/commit/51a7082d135f52f5fe87ddd9ccc09d4d2a401dd4"
        },
        "date": 1610264282696,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 18058,
            "range": "± 9470",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1051,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 640,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14931,
            "range": "± 6989",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1010,
            "range": "± 72",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robjtede@icloud.com",
            "name": "Rob Ede",
            "username": "robjtede"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "06d6adf4b7597fa316f3277c2aa60da27dac59fc",
          "message": "util: use ReusableBoxFuture for PollSemaphore (#3463)",
          "timestamp": "2021-01-30T10:57:04+01:00",
          "tree_id": "70444423e9bde1b15802535904a31d4e7af31a51",
          "url": "https://github.com/cssivision/tokio/commit/06d6adf4b7597fa316f3277c2aa60da27dac59fc"
        },
        "date": 1612007852923,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16784,
            "range": "± 6024",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1066,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 637,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16924,
            "range": "± 6490",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1064,
            "range": "± 184",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adam@adamharvey.name",
            "name": "Adam Harvey",
            "username": "LawnGnome"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53558cb48964d7e0f2c97687504711ab47bf1890",
          "message": "doc: note the EOF behaviour of read_until (#3536)",
          "timestamp": "2021-02-20T10:22:51+01:00",
          "tree_id": "84800a72f434ef6b5854b4227defe9d077506a79",
          "url": "https://github.com/cssivision/tokio/commit/53558cb48964d7e0f2c97687504711ab47bf1890"
        },
        "date": 1613974804035,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15217,
            "range": "± 4708",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1063,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 612,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15728,
            "range": "± 5953",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1013,
            "range": "± 165",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "guswynn@gmail.com",
            "name": "Gus Wynn",
            "username": "guswynn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d838bf5ade7509e622559458a367cca65133f06",
          "message": "io: fix link to std src in util (#3568)\n\nThe big move or 'src' in rust-lang caused this link to be broken",
          "timestamp": "2021-03-02T02:50:13+09:00",
          "tree_id": "4aebe568d0e20a57cf746664f172704157738a06",
          "url": "https://github.com/cssivision/tokio/commit/0d838bf5ade7509e622559458a367cca65133f06"
        },
        "date": 1614658034173,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14389,
            "range": "± 3915",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1080,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 623,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14266,
            "range": "± 2741",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1087,
            "range": "± 109",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "704de8c01b331c2651c0cdb0d5ec6b0657e14344",
          "message": "stream: remove duplicate `doc(test(..))` & `cfg_attr` declarations (#3571)",
          "timestamp": "2021-03-06T20:54:28+09:00",
          "tree_id": "05cfb9504112210a7d4e372c30c16177aee4ee59",
          "url": "https://github.com/cssivision/tokio/commit/704de8c01b331c2651c0cdb0d5ec6b0657e14344"
        },
        "date": 1615037882059,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16942,
            "range": "± 4672",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1143,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 678,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 17832,
            "range": "± 5340",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1140,
            "range": "± 188",
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
          "id": "6e911531683f2cc35d2edbaa51a45687130d21e7",
          "message": "remove ds store",
          "timestamp": "2021-03-06T22:09:13+08:00",
          "tree_id": "8f9f4d2a36e63e65ea456f0494d69cc6d2354187",
          "url": "https://github.com/cssivision/tokio/commit/6e911531683f2cc35d2edbaa51a45687130d21e7"
        },
        "date": 1615040050023,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15864,
            "range": "± 7030",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1094,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 625,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16289,
            "range": "± 7552",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1008,
            "range": "± 143",
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
          "id": "92675565670aa0fd92a443fbbbe70bf1be87bc7e",
          "message": "fix clippy -D warnings",
          "timestamp": "2021-03-07T10:39:13+08:00",
          "tree_id": "8f9f4d2a36e63e65ea456f0494d69cc6d2354187",
          "url": "https://github.com/cssivision/tokio/commit/92675565670aa0fd92a443fbbbe70bf1be87bc7e"
        },
        "date": 1615085031113,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14800,
            "range": "± 4898",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 968,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 627,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13779,
            "range": "± 4089",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 931,
            "range": "± 100",
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
          "id": "58e861a40b0441b6be13bf49911df1535e2d9e42",
          "message": "fix clippy",
          "timestamp": "2021-03-07T10:43:34+08:00",
          "tree_id": "49374ac82db5542c7b12c963c80befd2ff4c2b44",
          "url": "https://github.com/cssivision/tokio/commit/58e861a40b0441b6be13bf49911df1535e2d9e42"
        },
        "date": 1615085145829,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 17253,
            "range": "± 4918",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1106,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 647,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 17437,
            "range": "± 5228",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1072,
            "range": "± 214",
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
          "id": "4530f78a47c0ecac4afae50073b8f8bf2f57fe6a",
          "message": "fix clippy -D warnings",
          "timestamp": "2021-03-07T11:17:56+08:00",
          "tree_id": "fae3afb40e05f898534054f82b9affea62295226",
          "url": "https://github.com/cssivision/tokio/commit/4530f78a47c0ecac4afae50073b8f8bf2f57fe6a"
        },
        "date": 1615087193904,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14713,
            "range": "± 3856",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1095,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 653,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15634,
            "range": "± 5587",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1032,
            "range": "± 243",
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
          "id": "1f9e97ad4c9e2620712a5806c9be3b61fc09884e",
          "message": "fix clippy",
          "timestamp": "2021-03-10T10:12:44+08:00",
          "tree_id": "9b62d0d24e0eecba6115f0f6b5ca39b79125f105",
          "url": "https://github.com/cssivision/tokio/commit/1f9e97ad4c9e2620712a5806c9be3b61fc09884e"
        },
        "date": 1615342301628,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15470,
            "range": "± 5540",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1097,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 655,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15635,
            "range": "± 5961",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1119,
            "range": "± 7",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46445660+CorinJG@users.noreply.github.com",
            "name": "CorinJG",
            "username": "CorinJG"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a80d6eee542847c9e8399f1c6a0d495fb3817a0",
          "message": "sync: improve doc on blocking mutex (#3645)",
          "timestamp": "2021-03-27T13:26:10+01:00",
          "tree_id": "a0d10efb9b60d62a44902a624c6f3b851d1c8ddf",
          "url": "https://github.com/cssivision/tokio/commit/1a80d6eee542847c9e8399f1c6a0d495fb3817a0"
        },
        "date": 1616921450129,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15595,
            "range": "± 5250",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1011,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 567,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15669,
            "range": "± 6346",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1062,
            "range": "± 304",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "2b9b55810847b4c7855e3de82f432ca997600f30",
          "message": "time: prevent `time::advance` from going too far (#3712)\n\nPreviously, `time::advance` would set the mocked clock forward the\r\nrequested amount, then yield. However, if there was no work ready to\r\nperform immediately, this would result in advancing to the next expiring\r\nsleep.\r\n\r\nNow, `time::advance(...)` will unblock at the requested time. The\r\ndifference between `time::advance(...)` and `time::sleep(...)` is a bit\r\nfuzzy. The main difference is `time::sleep(...)` operates on the current\r\ntask and `time::advance(...)` operates at the runtime level.\r\n\r\nFixes #3710",
          "timestamp": "2021-04-21T15:23:35-07:00",
          "tree_id": "6e5d0c6d86afdeaee3700f2851df5e78bfe7f8a4",
          "url": "https://github.com/cssivision/tokio/commit/2b9b55810847b4c7855e3de82f432ca997600f30"
        },
        "date": 1619064404683,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16792,
            "range": "± 5053",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1117,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 637,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 17255,
            "range": "± 5193",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1061,
            "range": "± 187",
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
          "id": "bffe0e228c11e6f3885c461b001d57dc9d8f9a74",
          "message": "io: CopyBuffer should keep reading when there's space in the buffer",
          "timestamp": "2021-04-22T13:13:12+08:00",
          "tree_id": "98b48327f1cd5ffd678d4c6ba9e10b9472f3a481",
          "url": "https://github.com/cssivision/tokio/commit/bffe0e228c11e6f3885c461b001d57dc9d8f9a74"
        },
        "date": 1619068520252,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14424,
            "range": "± 4891",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1051,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 630,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14756,
            "range": "± 6107",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1084,
            "range": "± 182",
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
          "id": "570a349ad7b7dadeb2cb45e558a2cc818eafc494",
          "message": "io: CopyBuffer should keep reading when there's space in the buffer",
          "timestamp": "2021-04-22T13:20:58+08:00",
          "tree_id": "b5975cae54f10c645d38b25ce3bac75e1f0086af",
          "url": "https://github.com/cssivision/tokio/commit/570a349ad7b7dadeb2cb45e558a2cc818eafc494"
        },
        "date": 1619068988078,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15095,
            "range": "± 6679",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1020,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 595,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14053,
            "range": "± 3193",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1090,
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
          "id": "bf8bebf0d11476e49699ad24986cf1f9cda20ed3",
          "message": "io: CopyBuffer should keep reading when there's space in the buffer",
          "timestamp": "2021-04-24T16:54:07+08:00",
          "tree_id": "77b61bef917135470e66d76c68e6d304d20e117b",
          "url": "https://github.com/cssivision/tokio/commit/bf8bebf0d11476e49699ad24986cf1f9cda20ed3"
        },
        "date": 1619254584203,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13992,
            "range": "± 2718",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1088,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 622,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14036,
            "range": "± 3457",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1091,
            "range": "± 48",
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
          "id": "f6dd8a63af284454c875b6a08cf929f07e16ce38",
          "message": "net: UnixStream fix doc compile",
          "timestamp": "2020-12-11T11:06:01+08:00",
          "tree_id": "74faae013ae4dd05abae4e60abf1d5539d11fd3b",
          "url": "https://github.com/cssivision/tokio/commit/f6dd8a63af284454c875b6a08cf929f07e16ce38"
        },
        "date": 1607656309073,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6208366,
            "range": "± 1954378",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6075252,
            "range": "± 1355701",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5614945,
            "range": "± 2553985",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 536,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 544,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 547,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 37128,
            "range": "± 5070",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 603,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 901220,
            "range": "± 190019",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 653389,
            "range": "± 115227",
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
          "id": "d535135cdcfe6a917308e539ebf94bc94f8bf07e",
          "message": "Add semicolon to continue",
          "timestamp": "2020-12-13T15:37:25+01:00",
          "tree_id": "71f10d19362f9b7eb1ee50ae67074306099eb566",
          "url": "https://github.com/cssivision/tokio/commit/d535135cdcfe6a917308e539ebf94bc94f8bf07e"
        },
        "date": 1607870588274,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6260786,
            "range": "± 2247858",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6288402,
            "range": "± 1203177",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5783134,
            "range": "± 1709715",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 586,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 587,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 585,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 52086,
            "range": "± 1887",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 911,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 994444,
            "range": "± 101002",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 754996,
            "range": "± 206168",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "28933599888a88e601acbb11fa824b0ee9f98c6e",
          "message": "chore: update to `bytes` 1.0 git branch (#3301)\n\nUpdates the code base to track the `bytes` git branch. This is in\r\npreparation for the 1.0 release.\r\n\r\nCloses #3058",
          "timestamp": "2020-12-19T15:57:16-08:00",
          "tree_id": "2021ef3acf9407fcfa39032e0a493a81f1eb74cc",
          "url": "https://github.com/cssivision/tokio/commit/28933599888a88e601acbb11fa824b0ee9f98c6e"
        },
        "date": 1608561061679,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6530134,
            "range": "± 2449138",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6495947,
            "range": "± 1615484",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6411522,
            "range": "± 2647927",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 610,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 578,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 600,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 79507,
            "range": "± 8228",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1356,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1084117,
            "range": "± 83499",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 818080,
            "range": "± 57677",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "0deaeb84948f253b76b7fe64d7fe9d4527cd4275",
          "message": "chore: remove unused `slab` dependency (#3318)",
          "timestamp": "2020-12-22T21:56:22-08:00",
          "tree_id": "3b9ad84403d71b2ad5d2c749c23516c3dfaec3ce",
          "url": "https://github.com/cssivision/tokio/commit/0deaeb84948f253b76b7fe64d7fe9d4527cd4275"
        },
        "date": 1608705452938,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5951829,
            "range": "± 2236348",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6028879,
            "range": "± 1243886",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5783338,
            "range": "± 1812397",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 533,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 533,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 533,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 71255,
            "range": "± 2910",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1200,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 956854,
            "range": "± 5453",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 682469,
            "range": "± 3081",
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
          "id": "2330edc875ed8b873b6ffc4686feef1534658f79",
          "message": "chore: prepare tokio 1.0.1 release (#3347)",
          "timestamp": "2020-12-25T22:20:05+01:00",
          "tree_id": "9666ca615c4f2bf81a5c7a311ce0e3b3e7e30047",
          "url": "https://github.com/cssivision/tokio/commit/2330edc875ed8b873b6ffc4686feef1534658f79"
        },
        "date": 1608985275297,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5848512,
            "range": "± 2368346",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5991662,
            "range": "± 1492034",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5653455,
            "range": "± 2365048",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 520,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 519,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 519,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 73071,
            "range": "± 3188",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1025,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 844923,
            "range": "± 28072",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 685691,
            "range": "± 13274",
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
          "id": "a78f371759d8b9eae7fc799e7ed74456ccf7d7a0",
          "message": "net: Add try_read_buf and try_recv_buf",
          "timestamp": "2020-12-27T18:37:45+08:00",
          "tree_id": "0a6ec5ed64e2b6776a535f5d04680dcca0b5953c",
          "url": "https://github.com/cssivision/tokio/commit/a78f371759d8b9eae7fc799e7ed74456ccf7d7a0"
        },
        "date": 1609065752176,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6825441,
            "range": "± 3669505",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6672940,
            "range": "± 2262021",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6356004,
            "range": "± 2642837",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 872,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 873,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 874,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 138029,
            "range": "± 8136",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1799,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1112981,
            "range": "± 98342",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 777891,
            "range": "± 84096",
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
          "id": "1a3fccee46e8abacd32376d5bbc7698f5cc31df6",
          "message": "net: Add try_read_buf and try_recv_buf enable in io-util features",
          "timestamp": "2020-12-27T18:58:01+08:00",
          "tree_id": "76d754841fc4fab30808763f86066e247b9430f1",
          "url": "https://github.com/cssivision/tokio/commit/1a3fccee46e8abacd32376d5bbc7698f5cc31df6"
        },
        "date": 1609067020605,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5508835,
            "range": "± 2192843",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5364882,
            "range": "± 1222587",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5271510,
            "range": "± 2078477",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 590,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 589,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 589,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 72567,
            "range": "± 8331",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1176,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 949746,
            "range": "± 2487",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 696953,
            "range": "± 29905",
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
          "id": "eb0d64ef2bbbb821dcbc978a25a042e564b6173c",
          "message": "net: try_recv_buf fix doc",
          "timestamp": "2020-12-27T19:08:54+08:00",
          "tree_id": "2d035a878fcdbae31e13ebbc4ae5442cb225558a",
          "url": "https://github.com/cssivision/tokio/commit/eb0d64ef2bbbb821dcbc978a25a042e564b6173c"
        },
        "date": 1609067729845,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6844140,
            "range": "± 2358256",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6692736,
            "range": "± 2116168",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6879199,
            "range": "± 2709921",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 734,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 737,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 735,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 81399,
            "range": "± 4204",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1432,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1141061,
            "range": "± 106404",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 808799,
            "range": "± 35740",
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
          "id": "d80d5f83e4fb916427b25cf951249b3690688279",
          "message": "net: try_recv_buf_from fix doc",
          "timestamp": "2020-12-27T19:12:53+08:00",
          "tree_id": "f574d78f89bc389ee7b4fc8b2cf04fae02f99db0",
          "url": "https://github.com/cssivision/tokio/commit/d80d5f83e4fb916427b25cf951249b3690688279"
        },
        "date": 1609068442978,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6894018,
            "range": "± 3132202",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6750098,
            "range": "± 2163048",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6383729,
            "range": "± 3085414",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 870,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 917,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 900,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 141624,
            "range": "± 16035",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1677,
            "range": "± 382",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1109362,
            "range": "± 160542",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 775305,
            "range": "± 128090",
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
          "id": "5c5e7f1c3cb0a4379d9dcd5faaf6561331c5aed5",
          "message": "Update tokio/src/net/tcp/stream.rs\n\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-28T10:36:39+08:00",
          "tree_id": "918d9c906603b18d6d2f37f0c2aed89014ae9a2e",
          "url": "https://github.com/cssivision/tokio/commit/5c5e7f1c3cb0a4379d9dcd5faaf6561331c5aed5"
        },
        "date": 1609123251421,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5862751,
            "range": "± 2148421",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5742537,
            "range": "± 1394761",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5823265,
            "range": "± 1736686",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 542,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 535,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 535,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 72059,
            "range": "± 3640",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1200,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 951027,
            "range": "± 7171",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 685329,
            "range": "± 1719",
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
          "id": "17d9c7bc6453544f84ffdf5ad2891c263b9d4e07",
          "message": "fix doc",
          "timestamp": "2020-12-28T10:52:34+08:00",
          "tree_id": "98ebb0518e7835df51147079a9304bbe810e89a8",
          "url": "https://github.com/cssivision/tokio/commit/17d9c7bc6453544f84ffdf5ad2891c263b9d4e07"
        },
        "date": 1609124025851,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6096492,
            "range": "± 2792243",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6095924,
            "range": "± 1772532",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5978660,
            "range": "± 2573973",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 648,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 661,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 648,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 72691,
            "range": "± 3257",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1205,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 934688,
            "range": "± 2764",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 672161,
            "range": "± 2132",
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
          "id": "f22bab3f1042598684975080cd3a24fe30a7ef3e",
          "message": "remove capcacity check",
          "timestamp": "2020-12-29T14:52:53+08:00",
          "tree_id": "f37f7dc44770ba4591cef8e64416b920af64bf36",
          "url": "https://github.com/cssivision/tokio/commit/f22bab3f1042598684975080cd3a24fe30a7ef3e"
        },
        "date": 1609224991548,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6591068,
            "range": "± 2385707",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6624610,
            "range": "± 1730118",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6367450,
            "range": "± 3325974",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 605,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 556,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 570,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 81022,
            "range": "± 6127",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1350,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1089169,
            "range": "± 127281",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 778647,
            "range": "± 80541",
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
          "id": "bd71dbeffcadd6a0bac0bbbcbe63f0bf2a2943a7",
          "message": "check uds_stream it is no longer readable",
          "timestamp": "2020-12-31T12:04:47+08:00",
          "tree_id": "e6f14f60859d21e6082c069cceeadd5786742bac",
          "url": "https://github.com/cssivision/tokio/commit/bd71dbeffcadd6a0bac0bbbcbe63f0bf2a2943a7"
        },
        "date": 1609387696496,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6371742,
            "range": "± 2826250",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5893006,
            "range": "± 1870618",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5314240,
            "range": "± 2378719",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 709,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 707,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 676,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 125174,
            "range": "± 25603",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1380,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 847663,
            "range": "± 125948",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 572745,
            "range": "± 68699",
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
          "id": "2e80d5b0134ce77c8b3b66bf21ecfc995acc1264",
          "message": "remove capcacity check",
          "timestamp": "2020-12-30T10:48:33+08:00",
          "tree_id": "6d144291e86da2675f3856a5c7f03c1a01cc9c70",
          "url": "https://github.com/cssivision/tokio/commit/2e80d5b0134ce77c8b3b66bf21ecfc995acc1264"
        },
        "date": 1609388238420,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7218462,
            "range": "± 3305525",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6905930,
            "range": "± 1271418",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6191824,
            "range": "± 2098242",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 605,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 607,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 605,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 82799,
            "range": "± 5044",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1440,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1147367,
            "range": "± 55827",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 821546,
            "range": "± 15037",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cdart@anduril.com",
            "name": "Cameron",
            "username": "SkamDart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22c27b9282da399574bf9d58461fe0f1869be894",
          "message": "task: wake LocalSet on spawn_local (#3369)",
          "timestamp": "2021-01-09T11:46:51+01:00",
          "tree_id": "fea07ef93e77faf10bd1c08598dd1157ce9e72e5",
          "url": "https://github.com/cssivision/tokio/commit/22c27b9282da399574bf9d58461fe0f1869be894"
        },
        "date": 1610194064996,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6620925,
            "range": "± 3623801",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6291078,
            "range": "± 1734747",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6011342,
            "range": "± 3090697",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 806,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 768,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 784,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 131035,
            "range": "± 35793",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1496,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1022649,
            "range": "± 225252",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 692225,
            "range": "± 126253",
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
          "id": "6971d656734b3d0145067622f744f70f936d8682",
          "message": "docs: test-util feature doesn't enabled with full",
          "timestamp": "2021-01-09T20:05:49+08:00",
          "tree_id": "3ff2c0507f86f3ecc1f5387b95318634bcd5fd12",
          "url": "https://github.com/cssivision/tokio/commit/6971d656734b3d0145067622f744f70f936d8682"
        },
        "date": 1610194630933,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6717911,
            "range": "± 2621338",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6982794,
            "range": "± 1757968",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6381020,
            "range": "± 2975816",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 675,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 670,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 668,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 85258,
            "range": "± 10480",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1524,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1123521,
            "range": "± 160426",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 799989,
            "range": "± 58361",
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
          "id": "51a7082d135f52f5fe87ddd9ccc09d4d2a401dd4",
          "message": "docs: test-util feature is not enabled with full (#3397)",
          "timestamp": "2021-01-09T14:01:10+01:00",
          "tree_id": "3ff2c0507f86f3ecc1f5387b95318634bcd5fd12",
          "url": "https://github.com/cssivision/tokio/commit/51a7082d135f52f5fe87ddd9ccc09d4d2a401dd4"
        },
        "date": 1610264321964,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7690653,
            "range": "± 3508667",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7137174,
            "range": "± 1553840",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6699005,
            "range": "± 3124796",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 673,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 676,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 673,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 85560,
            "range": "± 12418",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1542,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1123977,
            "range": "± 131994",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 814730,
            "range": "± 90547",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robjtede@icloud.com",
            "name": "Rob Ede",
            "username": "robjtede"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "06d6adf4b7597fa316f3277c2aa60da27dac59fc",
          "message": "util: use ReusableBoxFuture for PollSemaphore (#3463)",
          "timestamp": "2021-01-30T10:57:04+01:00",
          "tree_id": "70444423e9bde1b15802535904a31d4e7af31a51",
          "url": "https://github.com/cssivision/tokio/commit/06d6adf4b7597fa316f3277c2aa60da27dac59fc"
        },
        "date": 1612007843307,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6300942,
            "range": "± 2647044",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6518725,
            "range": "± 1672217",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6258110,
            "range": "± 2603890",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 541,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 554,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 561,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 83360,
            "range": "± 8705",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1452,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1144591,
            "range": "± 74449",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 812255,
            "range": "± 148348",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adam@adamharvey.name",
            "name": "Adam Harvey",
            "username": "LawnGnome"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53558cb48964d7e0f2c97687504711ab47bf1890",
          "message": "doc: note the EOF behaviour of read_until (#3536)",
          "timestamp": "2021-02-20T10:22:51+01:00",
          "tree_id": "84800a72f434ef6b5854b4227defe9d077506a79",
          "url": "https://github.com/cssivision/tokio/commit/53558cb48964d7e0f2c97687504711ab47bf1890"
        },
        "date": 1613974827670,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6725089,
            "range": "± 2464225",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6091071,
            "range": "± 2082933",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5538368,
            "range": "± 2980334",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 688,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 685,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 716,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 118116,
            "range": "± 13158",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1668,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 971924,
            "range": "± 119749",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 709918,
            "range": "± 86872",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "guswynn@gmail.com",
            "name": "Gus Wynn",
            "username": "guswynn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d838bf5ade7509e622559458a367cca65133f06",
          "message": "io: fix link to std src in util (#3568)\n\nThe big move or 'src' in rust-lang caused this link to be broken",
          "timestamp": "2021-03-02T02:50:13+09:00",
          "tree_id": "4aebe568d0e20a57cf746664f172704157738a06",
          "url": "https://github.com/cssivision/tokio/commit/0d838bf5ade7509e622559458a367cca65133f06"
        },
        "date": 1614658065490,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6880895,
            "range": "± 2915433",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6589367,
            "range": "± 2046714",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6236873,
            "range": "± 3342884",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 827,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 816,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 829,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 132973,
            "range": "± 15779",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1732,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1086894,
            "range": "± 164549",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 724492,
            "range": "± 125598",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "704de8c01b331c2651c0cdb0d5ec6b0657e14344",
          "message": "stream: remove duplicate `doc(test(..))` & `cfg_attr` declarations (#3571)",
          "timestamp": "2021-03-06T20:54:28+09:00",
          "tree_id": "05cfb9504112210a7d4e372c30c16177aee4ee59",
          "url": "https://github.com/cssivision/tokio/commit/704de8c01b331c2651c0cdb0d5ec6b0657e14344"
        },
        "date": 1615037919373,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7358269,
            "range": "± 2962695",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7131203,
            "range": "± 1831319",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 7145844,
            "range": "± 2731146",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 765,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 772,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 758,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 145344,
            "range": "± 21730",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1926,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1138354,
            "range": "± 123303",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 814917,
            "range": "± 107092",
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
          "id": "6e911531683f2cc35d2edbaa51a45687130d21e7",
          "message": "remove ds store",
          "timestamp": "2021-03-06T22:09:13+08:00",
          "tree_id": "8f9f4d2a36e63e65ea456f0494d69cc6d2354187",
          "url": "https://github.com/cssivision/tokio/commit/6e911531683f2cc35d2edbaa51a45687130d21e7"
        },
        "date": 1615040049445,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6545097,
            "range": "± 2982160",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6504004,
            "range": "± 2448942",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6195222,
            "range": "± 2870897",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 863,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 857,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 860,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 125128,
            "range": "± 14854",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1822,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1070850,
            "range": "± 371772",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 774607,
            "range": "± 122504",
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
          "id": "92675565670aa0fd92a443fbbbe70bf1be87bc7e",
          "message": "fix clippy -D warnings",
          "timestamp": "2021-03-07T10:39:13+08:00",
          "tree_id": "8f9f4d2a36e63e65ea456f0494d69cc6d2354187",
          "url": "https://github.com/cssivision/tokio/commit/92675565670aa0fd92a443fbbbe70bf1be87bc7e"
        },
        "date": 1615084905623,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7172221,
            "range": "± 2981132",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6891559,
            "range": "± 1745422",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6263034,
            "range": "± 3503776",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 544,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 561,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 548,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 81856,
            "range": "± 4357",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1457,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1131913,
            "range": "± 81145",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 811832,
            "range": "± 110639",
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
          "id": "58e861a40b0441b6be13bf49911df1535e2d9e42",
          "message": "fix clippy",
          "timestamp": "2021-03-07T10:43:34+08:00",
          "tree_id": "49374ac82db5542c7b12c963c80befd2ff4c2b44",
          "url": "https://github.com/cssivision/tokio/commit/58e861a40b0441b6be13bf49911df1535e2d9e42"
        },
        "date": 1615085158304,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6128378,
            "range": "± 2136242",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5728411,
            "range": "± 2260102",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5903635,
            "range": "± 3168539",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 814,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 804,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 834,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 118414,
            "range": "± 25660",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1628,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 965275,
            "range": "± 97025",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 699245,
            "range": "± 94982",
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
          "id": "4530f78a47c0ecac4afae50073b8f8bf2f57fe6a",
          "message": "fix clippy -D warnings",
          "timestamp": "2021-03-07T11:17:56+08:00",
          "tree_id": "fae3afb40e05f898534054f82b9affea62295226",
          "url": "https://github.com/cssivision/tokio/commit/4530f78a47c0ecac4afae50073b8f8bf2f57fe6a"
        },
        "date": 1615087235847,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6651111,
            "range": "± 2908474",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6796158,
            "range": "± 2019008",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5885217,
            "range": "± 3400264",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 892,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 894,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 898,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 142128,
            "range": "± 19954",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1799,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1097626,
            "range": "± 181977",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 759042,
            "range": "± 162967",
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
          "id": "1f9e97ad4c9e2620712a5806c9be3b61fc09884e",
          "message": "fix clippy",
          "timestamp": "2021-03-10T10:12:44+08:00",
          "tree_id": "9b62d0d24e0eecba6115f0f6b5ca39b79125f105",
          "url": "https://github.com/cssivision/tokio/commit/1f9e97ad4c9e2620712a5806c9be3b61fc09884e"
        },
        "date": 1615342338515,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6457070,
            "range": "± 2526110",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6445074,
            "range": "± 2305455",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6180491,
            "range": "± 2032357",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 557,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 576,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 567,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 83002,
            "range": "± 7297",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1409,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1088309,
            "range": "± 95895",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 762082,
            "range": "± 78431",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46445660+CorinJG@users.noreply.github.com",
            "name": "CorinJG",
            "username": "CorinJG"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a80d6eee542847c9e8399f1c6a0d495fb3817a0",
          "message": "sync: improve doc on blocking mutex (#3645)",
          "timestamp": "2021-03-27T13:26:10+01:00",
          "tree_id": "a0d10efb9b60d62a44902a624c6f3b851d1c8ddf",
          "url": "https://github.com/cssivision/tokio/commit/1a80d6eee542847c9e8399f1c6a0d495fb3817a0"
        },
        "date": 1616921464121,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6388780,
            "range": "± 2529830",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6112768,
            "range": "± 2014700",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5902486,
            "range": "± 1992971",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 503,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 524,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 539,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 76364,
            "range": "± 8005",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1277,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1019698,
            "range": "± 88910",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 727146,
            "range": "± 86725",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "2b9b55810847b4c7855e3de82f432ca997600f30",
          "message": "time: prevent `time::advance` from going too far (#3712)\n\nPreviously, `time::advance` would set the mocked clock forward the\r\nrequested amount, then yield. However, if there was no work ready to\r\nperform immediately, this would result in advancing to the next expiring\r\nsleep.\r\n\r\nNow, `time::advance(...)` will unblock at the requested time. The\r\ndifference between `time::advance(...)` and `time::sleep(...)` is a bit\r\nfuzzy. The main difference is `time::sleep(...)` operates on the current\r\ntask and `time::advance(...)` operates at the runtime level.\r\n\r\nFixes #3710",
          "timestamp": "2021-04-21T15:23:35-07:00",
          "tree_id": "6e5d0c6d86afdeaee3700f2851df5e78bfe7f8a4",
          "url": "https://github.com/cssivision/tokio/commit/2b9b55810847b4c7855e3de82f432ca997600f30"
        },
        "date": 1619064396098,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7168557,
            "range": "± 3789466",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6443977,
            "range": "± 1740228",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5773043,
            "range": "± 3248947",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 845,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 839,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 870,
            "range": "± 490",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 129889,
            "range": "± 8829",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1719,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1128694,
            "range": "± 127556",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 785791,
            "range": "± 118269",
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
          "id": "bffe0e228c11e6f3885c461b001d57dc9d8f9a74",
          "message": "io: CopyBuffer should keep reading when there's space in the buffer",
          "timestamp": "2021-04-22T13:13:12+08:00",
          "tree_id": "98b48327f1cd5ffd678d4c6ba9e10b9472f3a481",
          "url": "https://github.com/cssivision/tokio/commit/bffe0e228c11e6f3885c461b001d57dc9d8f9a74"
        },
        "date": 1619068560549,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7169009,
            "range": "± 2637659",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6716836,
            "range": "± 1750432",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6195537,
            "range": "± 2604501",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 724,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 737,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 740,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 80472,
            "range": "± 6519",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1381,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1084150,
            "range": "± 68446",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 817544,
            "range": "± 56801",
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
          "id": "570a349ad7b7dadeb2cb45e558a2cc818eafc494",
          "message": "io: CopyBuffer should keep reading when there's space in the buffer",
          "timestamp": "2021-04-22T13:20:58+08:00",
          "tree_id": "b5975cae54f10c645d38b25ce3bac75e1f0086af",
          "url": "https://github.com/cssivision/tokio/commit/570a349ad7b7dadeb2cb45e558a2cc818eafc494"
        },
        "date": 1619068968947,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6100717,
            "range": "± 2904907",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5924405,
            "range": "± 1344002",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5217124,
            "range": "± 1967702",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 555,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 547,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 548,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 72909,
            "range": "± 3640",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1222,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 959204,
            "range": "± 6278",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 697501,
            "range": "± 13523",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}