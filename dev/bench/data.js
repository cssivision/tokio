window.BENCHMARK_DATA = {
  "lastUpdate": 1606790234943,
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
      }
    ]
  }
}