Page({
  data: {
    lineData: [
      { value: 63.4, city: 'New York', date: '2011-10-01' },
      { value: 62.7, city: 'Alaska', date: '2011-10-01' },
      { value: 72.2, city: 'Austin', date: '2011-10-01' },
      { value: 58, city: 'New York', date: '2011-10-02' },
      { value: 59.9, city: 'Alaska', date: '2011-10-02' },
      { value: 67.7, city: 'Austin', date: '2011-10-02' },
      { value: 53.3, city: 'New York', date: '2011-10-03' },
      { value: 59.1, city: 'Alaska', date: '2011-10-03' },
      { value: 69.4, city: 'Austin', date: '2011-10-03' },
    ],
    radarData: [{
      item: 'Design',
      user: '用户 A',
      score: 70
    }, {
      item: 'Design',
      user: '用户 B',
      score: 30
    }, {
      item: 'Development',
      user: '用户 A',
      score: 60
    }, {
      item: 'Development',
      user: '用户 B',
      score: 70
    }, {
      item: 'Marketing',
      user: '用户 A',
      score: 50
    }, {
      item: 'Marketing',
      user: '用户 B',
      score: 60
    }, {
      item: 'Users',
      user: '用户 A',
      score: 40
    }, {
      item: 'Users',
      user: '用户 B',
      score: 50
    }, {
      item: 'Test',
      user: '用户 A',
      score: 60
    }, {
      item: 'Test',
      user: '用户 B',
      score: 70
    }, {
      item: 'Language',
      user: '用户 A',
      score: 70
    }, {
      item: 'Language',
      user: '用户 B',
      score: 50
    }, {
      item: 'Technology',
      user: '用户 A',
      score: 70
    }, {
      item: 'Technology',
      user: '用户 B',
      score: 40
    }, {
      item: 'Support',
      user: '用户 A',
      score: 60
    }, {
      item: 'Support',
      user: '用户 B',
      score: 40
    }],
    line6: [{
      "title": "Bohemian Rhapsody",
      "artist": "Queen",
      "release": 1975,
      "year": "1999",
      "rank": "1",
      "count": 978
    }, {
      "title": "Hotel California",
      "artist": "Eagles",
      "release": 1977,
      "year": "1999",
      "rank": "2",
      "count": 1284
    }, {
      "title": "Child In Time",
      "artist": "Deep Purple",
      "release": 1972,
      "year": "1999",
      "rank": "3",
      "count": 1117
    }, {
      "title": "Stairway To Heaven",
      "artist": "Led Zeppelin",
      "release": 1971,
      "year": "1999",
      "rank": "4",
      "count": 1132
    }, {
      "title": "Paradise By The Dashboard Light",
      "artist": "Meat Loaf",
      "release": 1978,
      "year": "1999",
      "rank": "5",
      "count": 1187
    }, {
      "title": "Yesterday",
      "artist": "The Beatles",
      "release": 1965,
      "year": "1999",
      "rank": "6",
      "count": 909
    }, {
      "title": "Angie",
      "artist": "The Rolling Stones",
      "release": 1973,
      "year": "1999",
      "rank": "8",
      "count": 1183
    }, {
      "title": "Bridge Over Troubled Water",
      "artist": "Simon & Garfunkel",
      "release": 1970,
      "year": "1999",
      "rank": "9",
      "count": 1111
    }, {
      "title": "A Whiter Shade Of Pale",
      "artist": "Procol Harum",
      "release": 1967,
      "year": "1999",
      "rank": "10",
      "count": 1190
    }, {
      "title": "Hey Jude",
      "artist": "The Beatles",
      "release": 1968,
      "year": "1999",
      "rank": "11",
      "count": 1037
    }, {
      "title": "House Of The Rising Sun",
      "artist": "The Animals",
      "release": 1964,
      "year": "1999",
      "rank": "13",
      "count": 543
    }, {
      "title": "Goodnight Saigon",
      "artist": "Billy Joel",
      "release": 1983,
      "year": "1999",
      "rank": "14",
      "count": 748
    }, {
      "title": "Dancing Queen",
      "artist": "ABBA",
      "release": 1976,
      "year": "1999",
      "rank": "16",
      "count": 1111
    }, {
      "title": "Another Brick In The Wall",
      "artist": "Pink Floyd",
      "release": 1979,
      "year": "1999",
      "rank": "17",
      "count": 1266
    }, {
      "title": "Sunday Bloody Sunday",
      "artist": "U2",
      "release": 1985,
      "year": "1999",
      "rank": "18",
      "count": 1087
    }, {
      "title": "Tears In Heaven",
      "artist": "Eric Clapton",
      "release": 1992,
      "year": "1999",
      "rank": "21",
      "count": 435
    }, {
      "title": "Old And Wise",
      "artist": "The Alan Parsons Project",
      "release": 1982,
      "year": "1999",
      "rank": "24",
      "count": 945
    }, {
      "title": "Losing My Religion",
      "artist": "R.E.M.",
      "release": 1991,
      "year": "1999",
      "rank": "25",
      "count": 415
    }, {
      "title": "School",
      "artist": "Supertramp",
      "release": 1974,
      "year": "1999",
      "rank": "26",
      "count": 1011
    }, {
      "title": "Who Wants To Live Forever",
      "artist": "Queen",
      "release": 1986,
      "year": "1999",
      "rank": "30",
      "count": 836
    }, {
      "title": "Everybody Hurts",
      "artist": "R.E.M.",
      "release": 1993,
      "year": "1999",
      "rank": "31",
      "count": 301
    }, {
      "title": "Over De Muur",
      "artist": "Klein Orkest",
      "release": 1984,
      "year": "1999",
      "rank": "32",
      "count": 1166
    }, {
      "title": "Paint It Black",
      "artist": "The Rolling Stones",
      "release": 1966,
      "year": "1999",
      "rank": "33",
      "count": 1077
    }, {
      "title": "The Winner Takes It All",
      "artist": "ABBA",
      "release": 1980,
      "year": "1999",
      "rank": "35",
      "count": 926
    }, {
      "title": "Candle In The Wind (1997)",
      "artist": "Elton John",
      "release": 1997,
      "year": "1999",
      "rank": "37",
      "count": 451
    }, {
      "title": "My Heart Will Go On",
      "artist": "Celine Dion",
      "release": 1998,
      "year": "1999",
      "rank": "41",
      "count": 415
    }, {
      "title": "The River",
      "artist": "Bruce Springsteen",
      "release": 1981,
      "year": "1999",
      "rank": "48",
      "count": 723
    }, {
      "title": "With Or Without You",
      "artist": "U2",
      "release": 1987,
      "year": "1999",
      "rank": "51",
      "count": 816
    }, {
      "title": "Space Oddity",
      "artist": "David Bowie",
      "release": 1969,
      "year": "1999",
      "rank": "59",
      "count": 1344
    }, {
      "title": "Stil In Mij",
      "artist": "Van Dik Hout",
      "release": 1994,
      "year": "1999",
      "rank": "65",
      "count": 373
    }, {
      "title": "Nothing Compares 2 U",
      "artist": "Sinead O'Connor",
      "release": 1990,
      "year": "1999",
      "rank": "90",
      "count": 426
    }, {
      "title": "Wonderful Tonight",
      "artist": "Eric Clapton",
      "release": 1988,
      "year": "1999",
      "rank": "91",
      "count": 515
    }, {
      "title": "Blowing In The Wind",
      "artist": "Bob Dylan",
      "release": 1963,
      "year": "1999",
      "rank": "94",
      "count": 323
    }, {
      "title": "Eternal Flame",
      "artist": "Bangles",
      "release": 1989,
      "year": "1999",
      "rank": "96",
      "count": 495
    }, {
      "title": "Non Je Ne Regrette Rien",
      "artist": "Edith Piaf",
      "release": 1961,
      "year": "1999",
      "rank": "106",
      "count": 178
    }, {
      "title": "Con Te Partiro",
      "artist": "Andrea Bocelli",
      "release": 1996,
      "year": "1999",
      "rank": "109",
      "count": 362
    }, {
      "title": "Conquest Of Paradise",
      "artist": "Vangelis",
      "release": 1995,
      "year": "1999",
      "rank": "157",
      "count": 315
    }, {
      "title": "White Christmas",
      "artist": "Bing Crosby",
      "release": 1954,
      "year": "1999",
      "rank": "218",
      "count": 10
    }, {
      "title": "(We're gonna) Rock Around The Clock",
      "artist": "Bill Haley & The Comets",
      "release": 1955,
      "year": "1999",
      "rank": "239",
      "count": 19
    }, {
      "title": "Jailhouse Rock",
      "artist": "Elvis Presley",
      "release": 1957,
      "year": "1999",
      "rank": "247",
      "count": 188
    }, {
      "title": "Take Five",
      "artist": "Dave Brubeck",
      "release": 1962,
      "year": "1999",
      "rank": "279",
      "count": 204
    }, {
      "title": "It's Now Or Never",
      "artist": "Elvis Presley",
      "release": 1960,
      "year": "1999",
      "rank": "285",
      "count": 221
    }, {
      "title": "Heartbreak Hotel",
      "artist": "Elvis Presley",
      "release": 1956,
      "year": "1999",
      "rank": "558",
      "count": 109
    }, {
      "title": "One Night",
      "artist": "Elvis Presley",
      "release": 1959,
      "year": "1999",
      "rank": "622",
      "count": 71
    }, {
      "title": "Johnny B. Goode",
      "artist": "Chuck Berry",
      "release": 1958,
      "year": "1999",
      "rank": "714",
      "count": 89
    }, {
      "title": "Unforgettable",
      "artist": "Nat 'King' Cole",
      "release": 1951,
      "year": "1999",
      "rank": "1188",
      "count": 20
    }, {
      "title": "La Mer",
      "artist": "Charles Trenet",
      "release": 1952,
      "year": "1999",
      "rank": "1249",
      "count": 24
    }, {
      "title": "The Road Ahead",
      "artist": "City To City",
      "release": 1999,
      "year": "1999",
      "rank": "1999",
      "count": 262
    }, {
      "title": "What It Is",
      "artist": "Mark Knopfler",
      "release": 2000,
      "year": "2000",
      "rank": "545",
      "count": 291
    }, {
      "title": "Overcome",
      "artist": "Live",
      "release": 2001,
      "year": "2001",
      "rank": "879",
      "count": 111
    }, {
      "title": "Mooie Dag",
      "artist": "Blof",
      "release": 2002,
      "year": "2003",
      "rank": "147",
      "count": 256
    }, {
      "title": "Clocks",
      "artist": "Coldplay",
      "release": 2003,
      "year": "2003",
      "rank": "733",
      "count": 169
    }, {
      "title": "Sunrise",
      "artist": "Norah Jones",
      "release": 2004,
      "year": "2004",
      "rank": "405",
      "count": 256
    }, {
      "title": "Nine Million Bicycles",
      "artist": "Katie Melua",
      "release": 2005,
      "year": "2005",
      "rank": "23",
      "count": 250
    }, {
      "title": "Rood",
      "artist": "Marco Borsato",
      "release": 2006,
      "year": "2006",
      "rank": "17",
      "count": 159
    }, {
      "title": "If You Were A Sailboat",
      "artist": "Katie Melua",
      "release": 2007,
      "year": "2007",
      "rank": "101",
      "count": 256
    }, {
      "title": "Viva La Vida",
      "artist": "Coldplay",
      "release": 2009,
      "year": "2009",
      "rank": "11",
      "count": 228
    }, {
      "title": "Dochters",
      "artist": "Marco Borsato",
      "release": 2008,
      "year": "2009",
      "rank": "25",
      "count": 268
    }, {
      "title": "Need You Now",
      "artist": "Lady Antebellum",
      "release": 2010,
      "year": "2010",
      "rank": "210",
      "count": 121
    }, {
      "title": "Someone Like You",
      "artist": "Adele",
      "release": 2011,
      "year": "2011",
      "rank": "6",
      "count": 187
    }, {
      "title": "I Follow Rivers",
      "artist": "Triggerfinger",
      "release": 2012,
      "year": "2012",
      "rank": "79",
      "count": 167
    }, {
      "title": "Get Lucky",
      "artist": "Daft Punk",
      "release": 2013,
      "year": "2013",
      "rank": "357",
      "count": 141
    }, {
      "title": "Home",
      "artist": "Dotan",
      "release": 2014,
      "year": "2014",
      "rank": "82",
      "count": 76
    }, {
      "title": "Hello",
      "artist": "Adele",
      "release": 2015,
      "year": "2015",
      "rank": "23",
      "count": 29
    }],
    line5: []
  },
  onLoad() {
    const data = [];
    const step = Math.PI / 4;
    for (let x = -25; x < 25; x += step) {
      data.push({
        x,
        y: Math.sin(x)
      });
    }
    this.setData({
      line5: data
    })
  },
  methods: {}
})