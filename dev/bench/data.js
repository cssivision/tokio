window.BENCHMARK_DATA = {
  "lastUpdate": 1607339784192,
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
      }
    ]
  }
}