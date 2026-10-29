/* =====================================================================
   おかえりタイムライン　データファイル（見本：2園・3名）
   ---------------------------------------------------------------------
   データの切り替えを試すための小さな見本です。
   使うときは okaeri-timeline-system.html の <script src="okaeri-data.js"></script> を
   <script src="okaeri-data-sample.js"></script> に書き換えてください。
   ・みほん保育園：schoolsData に園児を直接書いた例（きょうだい・祖母がお迎え）
   ・みほん第二保育園：schoolsData に書いていないので、generator から自動で作られる例
   書き方の説明は okaeri-data.js の先頭を見てください。
   ===================================================================== */
window.OKAERI_DATA = {
  "format": "okaeri-dataset/1",
  "title": "（見本）小さなサンプルデータ",
  "notice": "切り替えを試すための見本です。園名・園児・保護者はすべて架空です。",
  "source": {
    "name": "（データの出典を書く）",
    "url": "",
    "asOf": "2026-10"
  },
  "defaultSchool": "school1",
  "schools": [
    {
      "id": "school1",
      "name": "みほん保育園",
      "ward": "中原区",
      "address": "中原区（住所）"
    },
    {
      "id": "school2",
      "name": "みほん第二保育園",
      "ward": "高津区",
      "address": "高津区（住所）"
    }
  ],
  "classes": [
    {
      "name": "ひよこ組",
      "age": "0歳児",
      "size": [
        3,
        4
      ]
    },
    {
      "name": "ひまわり組",
      "age": "5歳児",
      "size": [
        4,
        6
      ]
    }
  ],
  "commonNotices": [
    {
      "id": "n1",
      "fam": "parents",
      "kind": "園からのお知らせ",
      "title": "（お知らせの題名）",
      "body": "（本文）",
      "minutesAgo": 60,
      "read": false
    }
  ],
  "schoolsData": {
    "school1": {
      "children": [
        {
          "id": "k1",
          "name": "見本 はなこ",
          "kana": "みほん はなこ",
          "sfx": "ちゃん",
          "cls": "ひまわり組",
          "age": "5歳児",
          "fam": "h1",
          "pickup": "17:30",
          "by": "母 見本 春子"
        },
        {
          "id": "k2",
          "name": "見本 たろう",
          "kana": "みほん たろう",
          "sfx": "くん",
          "cls": "ひよこ組",
          "age": "0歳児",
          "fam": "h1",
          "pickup": "17:30",
          "by": "母 見本 春子"
        },
        {
          "id": "k3",
          "name": "例示 ゆい",
          "kana": "れいじ ゆい",
          "sfx": "ちゃん",
          "cls": "ひまわり組",
          "age": "5歳児",
          "fam": "h2",
          "offset": 20,
          "by": "父 例示 一郎"
        }
      ],
      "proxies": {
        "h1": [
          {
            "id": "r1",
            "name": "見本 春子",
            "kana": "みほん はるこ",
            "rel": "母",
            "tel": "000-0000-0000",
            "photo": 0,
            "memo": "",
            "prio": 1,
            "ok": true
          },
          {
            "id": "r2",
            "name": "見本 和子",
            "kana": "みほん かずこ",
            "rel": "祖母",
            "tel": "000-0000-0000",
            "photo": 0,
            "memo": "眼鏡をかけた白髪の女性",
            "prio": 2,
            "ok": true
          }
        ],
        "h2": [
          {
            "id": "r3",
            "name": "例示 一郎",
            "kana": "れいじ いちろう",
            "rel": "父",
            "tel": "000-0000-0000",
            "photo": 0,
            "memo": "",
            "prio": 1,
            "ok": true
          }
        ]
      }
    }
  },
  "generator": {
    "seed": 1,
    "siblingRate": 0.2,
    "pickupWindow": [
      -120,
      150
    ],
    "names": {
      "surnames": [
        [
          "見本",
          "みほん"
        ],
        [
          "例示",
          "れいじ"
        ]
      ],
      "boys": [
        [
          "たろう",
          "たろう"
        ]
      ],
      "girls": [
        [
          "はなこ",
          "はなこ"
        ]
      ],
      "mothers": [
        [
          "春子",
          "はるこ"
        ]
      ],
      "fathers": [
        [
          "一郎",
          "いちろう"
        ]
      ],
      "grandmothers": [
        [
          "和子",
          "かずこ"
        ]
      ],
      "grandfathers": [
        [
          "次郎",
          "じろう"
        ]
      ],
      "features": [
        ""
      ]
    }
  }
};
