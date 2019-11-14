// topicId: communityId
var topics = {
  '104793': '1',
  '104794': '7',
  '104795': '6',
  '104796': '7',
  '104797': '3',
  '104798': '3',
  '104799': '3',
  '104800': '1',
  '104801': '7',
  '104802': '3',
  '104803': '1',
  '104804': '3',
  '104805': '3',
  '104806': '3',
  '104807': '3',
  '104808': '1',
  '104809': '3',
  '104810': '5',
  '104811': '1',
  '104812': '7',
  '104813': '4',
  '104814': '7',
  '104815': '4',
  '104817': '7',
  '104818': '2',
  '104819': '5',
  '104820': '5',
  '104821': '2',
  '104822': '2',
  '104823': '2',
  '104826': '3',
  '104827': '3',
  '104829': '4',
  '104830': '4',
  '104831': '4',
  '104832': '5',
  '104833': '7',
  '104834': '4',
  '104835': '6',
  '104836': '6',
  '104837': '7',
  '104838': '5',
  '104839': '6',
  '104840': '6',
  '104841': '7',
  '104842': '7',
  '104843': '7'
};
var topicsGroupByCommunityId = {
  '1': [ '104793', '104800', '104803', '104808', '104811' ],
  '2': [ '104818', '104821', '104822', '104823' ],
  '3': [
    '104797', '104798',
    '104799', '104802',
    '104804', '104805',
    '104806', '104807',
    '104809', '104826',
    '104827'
  ],
  '4': [ '104813', '104815', '104829', '104830', '104831', '104834' ],
  '5': [ '104810', '104819', '104820', '104832', '104838' ],
  '6': [ '104795', '104835', '104836', '104839', '104840' ],
  '7': [
    '104794', '104796',
    '104801', '104812',
    '104814', '104817',
    '104833', '104837',
    '104841', '104842',
    '104843'
  ]
};
// startTopicId: endTopicId[]
var links = {
  '104793': [ '104808', '104803', '104800' ],
  '104795': [ '104835', '104839', '104840' ],
  '104798': [ '104827' ],
  '104802': [
    '104837', '104806',
    '104798', '104809',
    '104797', '104799',
    '104807', '104804',
    '104805'
  ],
  '104806': [ '104827' ],
  '104811': [ '104793' ],
  '104813': [ '104815', '104830', '104834' ],
  '104814': [ '104817' ],
  '104821': [ '104822' ],
  '104823': [ '104818', '104821' ],
  '104827': [ '104826' ],
  '104829': [ '104831', '104795' ],
  '104830': [ '104829' ],
  '104832': [ '104819', '104810', '104820' ],
  '104836': [ '104835' ],
  '104837': [
    '104841',
    '104836',
    '104794',
    '104823',
    '104813',
    '104814',
    '104843'
  ],
  '104838': [ '104832' ],
  '104841': [
    '104842',
    '104833',
    '104812',
    '104796',
    '104811',
    '104839',
    '104843',
    '104838'
  ],
  '104842': [ '104801' ]
};
var linksInCommunity = {
  '1': {
    '104793': [ '104808', '104803', '104800' ],
    '104800': undefined,
    '104803': undefined,
    '104808': undefined,
    '104811': [ '104793' ]
  },
  '2': {
    '104818': undefined,
    '104821': [ '104822' ],
    '104822': undefined,
    '104823': [ '104818', '104821' ]
  },
  '3': {
    '104797': undefined,
    '104798': [ '104827' ],
    '104799': undefined,
    '104802': [
      '104806',
      '104798',
      '104809',
      '104797',
      '104799',
      '104807',
      '104804',
      '104805'
    ],
    '104804': undefined,
    '104805': undefined,
    '104806': [ '104827' ],
    '104807': undefined,
    '104809': undefined,
    '104826': undefined,
    '104827': [ '104826' ]
  },
  '4': {
    '104813': [ '104815', '104830', '104834' ],
    '104815': undefined,
    '104829': [ '104831' ],
    '104830': [ '104829' ],
    '104831': undefined,
    '104834': undefined
  },
  '5': {
    '104810': undefined,
    '104819': undefined,
    '104820': undefined,
    '104832': [ '104819', '104810', '104820' ],
    '104838': [ '104832' ]
  },
  '6': {
    '104795': [ '104835', '104839', '104840' ],
    '104835': undefined,
    '104836': [ '104835' ],
    '104839': undefined,
    '104840': undefined
  },
  '7': {
    '104794': undefined,
    '104796': undefined,
    '104801': undefined,
    '104812': undefined,
    '104814': [ '104817' ],
    '104817': undefined,
    '104833': undefined,
    '104837': [ '104841', '104794', '104814', '104843' ],
    '104841': [ '104842', '104833', '104812', '104796', '104843' ],
    '104842': [ '104801' ],
    '104843': undefined
  }
};
// communityId[]
var communities = ['1', '2', '3', '4', '5', '6', '7'];
// startCommunityId, endCommunityId
var communityEdges = [
  [ '3', '7' ],
  [ '4', '6' ],
  [ '7', '6' ],
  [ '7', '2' ],
  [ '7', '4' ],
  [ '7', '1' ],
  [ '7', '6' ],
  [ '7', '5' ]
];
var communityLinks = {
  '1': undefined,
  '2': undefined,
  '3': ['7'],
  '4': ['6'],
  '5': undefined,
  '6': undefined,
  '7': ['1', '2', '4', '5', '6'],
};