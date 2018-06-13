import { nodeId, INIT_NODE } from '../graphReducer/test/common';

export const testStructure = {
  "analyticspages": {
    "data": [],
    "analyticspagesections": {
      "data": [],
      "analyticsreports": {
        "data": [],
        "scripts": {
          "data": []
        }
      }
    }
  }
}

export const testResponse = {
  "analyticspages": {
    "data": [{ "displayIcon": "ion-ionic", "name": "Overview", "links": { "analyticspagesections": ["59c2cd714d834683e2ed71fe", "59c2cd8a4d834683e2ed71ff", "59c2cdb04d834683e2ed7200"], "analyticspages": [] }, "createdAt": "2017-09-19T22:50:30.844Z", "updatedAt": "2018-04-16T22:01:25.603Z", "clonedNodes": ["59ea840f2ce566334fcd15b6", "59ea847f05e7004800610585"], "active": true, "id": "59c19f324ca8fc015b183339", "apiStatus": "200", "apiMessage": "OK", "entityType": "analyticspages", "href": "https://snapsmedia.io/api/analyticspages/59c19f324ca8fc015b183339", "edges": { "analyticspagesections": { "edges": { "59c2cd714d834683e2ed71fe": { "relation": "object", "parentService": "analyticspages", "parentId": "59c19f324ca8fc015b183339", "childService": "analyticspagesections", "childId": "59c2cd714d834683e2ed71fe", "orderIndex": 0 }, "59c2cd8a4d834683e2ed71ff": { "relation": "object", "parentService": "analyticspages", "parentId": "59c19f324ca8fc015b183339", "childService": "analyticspagesections", "childId": "59c2cd8a4d834683e2ed71ff", "orderIndex": 2 }, "59c2cdb04d834683e2ed7200": { "relation": "object", "parentService": "analyticspages", "parentId": "59c19f324ca8fc015b183339", "childService": "analyticspagesections", "childId": "59c2cdb04d834683e2ed7200", "orderIndex": 4 } }, "maps": { "parentService": { "59c2cd714d834683e2ed71fe": "analyticspages", "59c2cd8a4d834683e2ed71ff": "analyticspages", "59c2cdb04d834683e2ed7200": "analyticspages" }, "parentId": { "59c2cd714d834683e2ed71fe": "59c19f324ca8fc015b183339", "59c2cd8a4d834683e2ed71ff": "59c19f324ca8fc015b183339", "59c2cdb04d834683e2ed7200": "59c19f324ca8fc015b183339" }, "childService": { "59c2cd714d834683e2ed71fe": "analyticspagesections", "59c2cd8a4d834683e2ed71ff": "analyticspagesections", "59c2cdb04d834683e2ed7200": "analyticspagesections" }, "childId": { "59c2cd714d834683e2ed71fe": "59c2cd714d834683e2ed71fe", "59c2cd8a4d834683e2ed71ff": "59c2cd8a4d834683e2ed71ff", "59c2cdb04d834683e2ed7200": "59c2cdb04d834683e2ed7200" }, "orderIndex": { "59c2cd714d834683e2ed71fe": 0, "59c2cd8a4d834683e2ed71ff": 2, "59c2cdb04d834683e2ed7200": 4 }, "relation": { "59c2cd714d834683e2ed71fe": "object", "59c2cd8a4d834683e2ed71ff": "object", "59c2cdb04d834683e2ed7200": "object" } }, "indexes": { "parentService": ["59c2cd714d834683e2ed71fe", "59c2cd8a4d834683e2ed71ff", "59c2cdb04d834683e2ed7200"], "parentId": ["59c2cd714d834683e2ed71fe", "59c2cd8a4d834683e2ed71ff", "59c2cdb04d834683e2ed7200"], "childService": ["59c2cd714d834683e2ed71fe", "59c2cd8a4d834683e2ed71ff", "59c2cdb04d834683e2ed7200"], "childId": ["59c2cd714d834683e2ed71fe", "59c2cd8a4d834683e2ed71ff", "59c2cdb04d834683e2ed7200"], "orderIndex": ["59c2cd714d834683e2ed71fe", "59c2cd8a4d834683e2ed71ff", "59c2cdb04d834683e2ed7200"], "relation": ["59c2cd714d834683e2ed71fe", "59c2cd8a4d834683e2ed71ff", "59c2cdb04d834683e2ed7200"] } } } }],
    "analyticspagesections": {
      "data": [{ "orgId": "57927e5ca26cac010cae6db2", "name": "All time", "links": { "analyticsreports": ["59c2ce234d834683e2ed7201", "59c2cef4988b65804b0c368c", "59c3e1099424ed75d65a74b7"] }, "createdAt": "2017-09-20T20:20:27.361Z", "updatedAt": "2018-04-06T21:45:06.204Z", "clonedNodes": ["59ea840f2ce566334fcd15b7", "59ea847f05e7004800610586"], "active": false, "id": "59c2cd714d834683e2ed71fe", "apiStatus": "200", "apiMessage": "OK", "entityType": "analyticspagesections", "href": "https://snapsmedia.io/api/analyticspagesections/59c2cd714d834683e2ed71fe", "edges": { "analyticsreports": { "edges": { "59c2ce234d834683e2ed7201": { "relation": "object", "parentService": "analyticspagesections", "parentId": "59c2cd714d834683e2ed71fe", "childService": "analyticsreports", "childId": "59c2ce234d834683e2ed7201", "orderIndex": 0 }, "59c2cef4988b65804b0c368c": { "relation": "object", "parentService": "analyticspagesections", "parentId": "59c2cd714d834683e2ed71fe", "childService": "analyticsreports", "childId": "59c2cef4988b65804b0c368c", "orderIndex": 2 }, "59c3e1099424ed75d65a74b7": { "relation": "object", "parentService": "analyticspagesections", "parentId": "59c2cd714d834683e2ed71fe", "childService": "analyticsreports", "childId": "59c3e1099424ed75d65a74b7", "orderIndex": 4 } }, "maps": { "parentService": { "59c2ce234d834683e2ed7201": "analyticspagesections", "59c2cef4988b65804b0c368c": "analyticspagesections", "59c3e1099424ed75d65a74b7": "analyticspagesections" }, "parentId": { "59c2ce234d834683e2ed7201": "59c2cd714d834683e2ed71fe", "59c2cef4988b65804b0c368c": "59c2cd714d834683e2ed71fe", "59c3e1099424ed75d65a74b7": "59c2cd714d834683e2ed71fe" }, "childService": { "59c2ce234d834683e2ed7201": "analyticsreports", "59c2cef4988b65804b0c368c": "analyticsreports", "59c3e1099424ed75d65a74b7": "analyticsreports" }, "childId": { "59c2ce234d834683e2ed7201": "59c2ce234d834683e2ed7201", "59c2cef4988b65804b0c368c": "59c2cef4988b65804b0c368c", "59c3e1099424ed75d65a74b7": "59c3e1099424ed75d65a74b7" }, "orderIndex": { "59c2ce234d834683e2ed7201": 0, "59c2cef4988b65804b0c368c": 2, "59c3e1099424ed75d65a74b7": 4 }, "relation": { "59c2ce234d834683e2ed7201": "object", "59c2cef4988b65804b0c368c": "object", "59c3e1099424ed75d65a74b7": "object" } }, "indexes": { "parentService": ["59c2ce234d834683e2ed7201", "59c2cef4988b65804b0c368c", "59c3e1099424ed75d65a74b7"], "parentId": ["59c2ce234d834683e2ed7201", "59c2cef4988b65804b0c368c", "59c3e1099424ed75d65a74b7"], "childService": ["59c2ce234d834683e2ed7201", "59c2cef4988b65804b0c368c", "59c3e1099424ed75d65a74b7"], "childId": ["59c2ce234d834683e2ed7201", "59c2cef4988b65804b0c368c", "59c3e1099424ed75d65a74b7"], "orderIndex": ["59c2ce234d834683e2ed7201", "59c2cef4988b65804b0c368c", "59c3e1099424ed75d65a74b7"], "relation": ["59c2ce234d834683e2ed7201", "59c2cef4988b65804b0c368c", "59c3e1099424ed75d65a74b7"] } } } }, { "orgId": "57927e5ca26cac010cae6db2", "name": "one more time", "links": { "analyticsreports": ["59c3e986041ff207ce0b6824", "59c3fa0343e0102904bc3e00", "59c3fb79a437c99b31870de4", "59c3f87db2073d4d2925c0f7"] }, "createdAt": "2017-09-20T20:20:59.046Z", "updatedAt": "2018-04-06T21:45:06.205Z", "isHidden": false, "periodTextOverride": true, "clonedNodes": ["59ea84102ce566334fcd15c2", "59ea847f05e7004800610593"], "active": true, "id": "59c2cd8a4d834683e2ed71ff", "apiStatus": "200", "apiMessage": "OK", "entityType": "analyticspagesections", "href": "https://snapsmedia.io/api/analyticspagesections/59c2cd8a4d834683e2ed71ff", "edges": { "analyticsreports": { "edges": { "59c3e986041ff207ce0b6824": { "relation": "object", "parentService": "analyticspagesections", "parentId": "59c2cd8a4d834683e2ed71ff", "childService": "analyticsreports", "childId": "59c3e986041ff207ce0b6824", "orderIndex": 6 }, "59c3fa0343e0102904bc3e00": { "relation": "object", "parentService": "analyticspagesections", "parentId": "59c2cd8a4d834683e2ed71ff", "childService": "analyticsreports", "childId": "59c3fa0343e0102904bc3e00", "orderIndex": 2 }, "59c3fb79a437c99b31870de4": { "relation": "object", "parentService": "analyticspagesections", "parentId": "59c2cd8a4d834683e2ed71ff", "childService": "analyticsreports", "childId": "59c3fb79a437c99b31870de4", "orderIndex": 4 }, "59c3f87db2073d4d2925c0f7": { "relation": "object", "parentService": "analyticspagesections", "parentId": "59c2cd8a4d834683e2ed71ff", "childService": "analyticsreports", "childId": "59c3f87db2073d4d2925c0f7", "orderIndex": 0 } }, "maps": { "parentService": { "59c3e986041ff207ce0b6824": "analyticspagesections", "59c3fa0343e0102904bc3e00": "analyticspagesections", "59c3fb79a437c99b31870de4": "analyticspagesections", "59c3f87db2073d4d2925c0f7": "analyticspagesections" }, "parentId": { "59c3e986041ff207ce0b6824": "59c2cd8a4d834683e2ed71ff", "59c3fa0343e0102904bc3e00": "59c2cd8a4d834683e2ed71ff", "59c3fb79a437c99b31870de4": "59c2cd8a4d834683e2ed71ff", "59c3f87db2073d4d2925c0f7": "59c2cd8a4d834683e2ed71ff" }, "childService": { "59c3e986041ff207ce0b6824": "analyticsreports", "59c3fa0343e0102904bc3e00": "analyticsreports", "59c3fb79a437c99b31870de4": "analyticsreports", "59c3f87db2073d4d2925c0f7": "analyticsreports" }, "childId": { "59c3e986041ff207ce0b6824": "59c3e986041ff207ce0b6824", "59c3fa0343e0102904bc3e00": "59c3fa0343e0102904bc3e00", "59c3fb79a437c99b31870de4": "59c3fb79a437c99b31870de4", "59c3f87db2073d4d2925c0f7": "59c3f87db2073d4d2925c0f7" }, "orderIndex": { "59c3e986041ff207ce0b6824": 6, "59c3fa0343e0102904bc3e00": 2, "59c3fb79a437c99b31870de4": 4, "59c3f87db2073d4d2925c0f7": 0 }, "relation": { "59c3e986041ff207ce0b6824": "object", "59c3fa0343e0102904bc3e00": "object", "59c3fb79a437c99b31870de4": "object", "59c3f87db2073d4d2925c0f7": "object" } }, "indexes": { "parentService": ["59c3e986041ff207ce0b6824", "59c3fa0343e0102904bc3e00", "59c3fb79a437c99b31870de4", "59c3f87db2073d4d2925c0f7"], "parentId": ["59c3e986041ff207ce0b6824", "59c3fa0343e0102904bc3e00", "59c3fb79a437c99b31870de4", "59c3f87db2073d4d2925c0f7"], "childService": ["59c3e986041ff207ce0b6824", "59c3fa0343e0102904bc3e00", "59c3fb79a437c99b31870de4", "59c3f87db2073d4d2925c0f7"], "childId": ["59c3e986041ff207ce0b6824", "59c3fa0343e0102904bc3e00", "59c3fb79a437c99b31870de4", "59c3f87db2073d4d2925c0f7"], "orderIndex": ["59c3f87db2073d4d2925c0f7", "59c3fa0343e0102904bc3e00", "59c3fb79a437c99b31870de4", "59c3e986041ff207ce0b6824"], "relation": ["59c3e986041ff207ce0b6824", "59c3fa0343e0102904bc3e00", "59c3fb79a437c99b31870de4", "59c3f87db2073d4d2925c0f7"] } } } }, { "orgId": "57927e5ca26cac010cae6db2", "name": "Latest", "links": { "analyticsreports": ["59c3e033e3e6073f32b7bc56"] }, "createdAt": "2017-09-20T20:21:07.493Z", "updatedAt": "2018-04-06T21:45:06.205Z", "clonedNodes": ["59ea84112ce566334fcd15cc", "59ea848005e70048006105a2"], "active": true, "id": "59c2cdb04d834683e2ed7200", "apiStatus": "200", "apiMessage": "OK", "entityType": "analyticspagesections", "href": "https://snapsmedia.io/api/analyticspagesections/59c2cdb04d834683e2ed7200", "edges": { "analyticsreports": { "edges": { "59c3e033e3e6073f32b7bc56": { "relation": "object", "parentService": "analyticspagesections", "parentId": "59c2cdb04d834683e2ed7200", "childService": "analyticsreports", "childId": "59c3e033e3e6073f32b7bc56", "orderIndex": 0 } }, "maps": { "parentService": { "59c3e033e3e6073f32b7bc56": "analyticspagesections" }, "parentId": { "59c3e033e3e6073f32b7bc56": "59c2cdb04d834683e2ed7200" }, "childService": { "59c3e033e3e6073f32b7bc56": "analyticsreports" }, "childId": { "59c3e033e3e6073f32b7bc56": "59c3e033e3e6073f32b7bc56" }, "orderIndex": { "59c3e033e3e6073f32b7bc56": 0 }, "relation": { "59c3e033e3e6073f32b7bc56": "object" } }, "indexes": { "parentService": ["59c3e033e3e6073f32b7bc56"], "parentId": ["59c3e033e3e6073f32b7bc56"], "childService": ["59c3e033e3e6073f32b7bc56"], "childId": ["59c3e033e3e6073f32b7bc56"], "orderIndex": ["59c3e033e3e6073f32b7bc56"], "relation": ["59c3e033e3e6073f32b7bc56"] } } } }],
      "analyticsreports": {
        "data": [{
          "title": "Users",
          "facet": "",
          "includesTrendData": false,
          "active": true,
          "name": "Users",
          "classes": "col-8",
          "component": "AnalyticsNumber",
          "acceptsSegmentation": false,
          "acceptsDateRange": false,
          "tooltip": "The total number of users that have initiated a conversation with your bot.\n",
          "customQuery": "",
          "meta": "",
          "links": { "scripts": ["59c2ce234d834683e2ed7202"] },
          "createdAt": "2017-09-20T20:23:14.015Z",
          "updatedAt": "2018-04-06T21:45:06.348Z",
          "clonedNodes": ["59ea840f2ce566334fcd15b8", "59ea847f05e7004800610587"],
          "blacklistUsers": [],
          "id": "59c2ce234d834683e2ed7201",
          "apiStatus": "200",
          "apiMessage": "OK",
          "entityType": "analyticsreports",
          "href": "https://snapsmedia.io/api/analyticsreports/59c2ce234d834683e2ed7201",
          "edges": { "scripts": { "edges": { "59c2ce234d834683e2ed7202": { "relation": "object", "parentService": "analyticsreports", "parentId": "59c2ce234d834683e2ed7201", "childService": "scripts", "childId": "59c2ce234d834683e2ed7202", "orderIndex": 0 } }, "maps": { "parentService": { "59c2ce234d834683e2ed7202": "analyticsreports" }, "parentId": { "59c2ce234d834683e2ed7202": "59c2ce234d834683e2ed7201" }, "childService": { "59c2ce234d834683e2ed7202": "scripts" }, "childId": { "59c2ce234d834683e2ed7202": "59c2ce234d834683e2ed7202" }, "orderIndex": { "59c2ce234d834683e2ed7202": 0 }, "relation": { "59c2ce234d834683e2ed7202": "object" } }, "indexes": { "parentService": ["59c2ce234d834683e2ed7202"], "parentId": ["59c2ce234d834683e2ed7202"], "childService": ["59c2ce234d834683e2ed7202"], "childId": ["59c2ce234d834683e2ed7202"], "orderIndex": ["59c2ce234d834683e2ed7202"], "relation": ["59c2ce234d834683e2ed7202"] } } }
        }, {
          "title": "",
          "facet": "",
          "includesTrendData": false,
          "active": true,
          "name": "Interactions",
          "classes": "col-8",
          "component": "AnalyticsNumber",
          "acceptsSegmentation": false,
          "acceptsDateRange": false,
          "tooltip": "An interaction is a change between blocks within the bot. For example, if the user clicks a button, enters text, or uploads a file - it would count as one interaction. Interactions do not include link clicks, which are counted separately.",
          "customQuery": "",
          "meta": "",
          "links": { "scripts": ["59c2cef4988b65804b0c368d"] },
          "createdAt": "2017-09-20T20:26:56.518Z",
          "updatedAt": "2018-04-06T21:45:06.348Z",
          "clonedNodes": ["59ea840f2ce566334fcd15ba", "59ea847f05e7004800610589"],
          "id": "59c2cef4988b65804b0c368c",
          "apiStatus": "200",
          "apiMessage": "OK",
          "entityType": "analyticsreports",
          "href": "https://snapsmedia.io/api/analyticsreports/59c2cef4988b65804b0c368c",
          "edges": { "scripts": { "edges": { "59c2cef4988b65804b0c368d": { "relation": "object", "parentService": "analyticsreports", "parentId": "59c2cef4988b65804b0c368c", "childService": "scripts", "childId": "59c2cef4988b65804b0c368d", "orderIndex": 0 } }, "maps": { "parentService": { "59c2cef4988b65804b0c368d": "analyticsreports" }, "parentId": { "59c2cef4988b65804b0c368d": "59c2cef4988b65804b0c368c" }, "childService": { "59c2cef4988b65804b0c368d": "scripts" }, "childId": { "59c2cef4988b65804b0c368d": "59c2cef4988b65804b0c368d" }, "orderIndex": { "59c2cef4988b65804b0c368d": 0 }, "relation": { "59c2cef4988b65804b0c368d": "object" } }, "indexes": { "parentService": ["59c2cef4988b65804b0c368d"], "parentId": ["59c2cef4988b65804b0c368d"], "childService": ["59c2cef4988b65804b0c368d"], "childId": ["59c2cef4988b65804b0c368d"], "orderIndex": ["59c2cef4988b65804b0c368d"], "relation": ["59c2cef4988b65804b0c368d"] } } }
        }, {
          "title": "",
          "facet": "",
          "includesTrendData": false,
          "active": true,
          "name": "Latest",
          "classes": "col-24",
          "component": "AnalyticsTable",
          "acceptsSegmentation": false,
          "acceptsDateRange": false,
          "tooltip": "",
          "customQuery": "",
          "meta": "",
          "links": { "scripts": ["59c3e034e3e6073f32b7bc57"] },
          "createdAt": "2017-09-21T15:52:39.352Z",
          "updatedAt": "2018-04-06T21:45:06.350Z",
          "clonedNodes": ["59ea84112ce566334fcd15cd", "59ea848005e70048006105a3"],
          "blacklistUsers": ["5a29a2719d1aaf78e3fc23ac", "5a7a261f32b809103a9f2692", "5a6626760c531b2d8967d9a8", "5a29a2589495f650a9e0c800", "5a67af91d5907069aa9e84dc", "5a8dd93201563d03d4c39d7a", "5abba1d0a3215d5604be992e"],
          "id": "59c3e033e3e6073f32b7bc56",
          "apiStatus": "200",
          "apiMessage": "OK",
          "entityType": "analyticsreports",
          "href": "https://snapsmedia.io/api/analyticsreports/59c3e033e3e6073f32b7bc56",
          "edges": { "scripts": { "edges": { "59c3e034e3e6073f32b7bc57": { "relation": "object", "parentService": "analyticsreports", "parentId": "59c3e033e3e6073f32b7bc56", "childService": "scripts", "childId": "59c3e034e3e6073f32b7bc57", "orderIndex": 0 } }, "maps": { "parentService": { "59c3e034e3e6073f32b7bc57": "analyticsreports" }, "parentId": { "59c3e034e3e6073f32b7bc57": "59c3e033e3e6073f32b7bc56" }, "childService": { "59c3e034e3e6073f32b7bc57": "scripts" }, "childId": { "59c3e034e3e6073f32b7bc57": "59c3e034e3e6073f32b7bc57" }, "orderIndex": { "59c3e034e3e6073f32b7bc57": 0 }, "relation": { "59c3e034e3e6073f32b7bc57": "object" } }, "indexes": { "parentService": ["59c3e034e3e6073f32b7bc57"], "parentId": ["59c3e034e3e6073f32b7bc57"], "childService": ["59c3e034e3e6073f32b7bc57"], "childId": ["59c3e034e3e6073f32b7bc57"], "orderIndex": ["59c3e034e3e6073f32b7bc57"], "relation": ["59c3e034e3e6073f32b7bc57"] } } }
        }, {
          "title": "",
          "facet": "",
          "includesTrendData": false,
          "active": true,
          "name": "Link Clicks",
          "classes": "col-8",
          "component": "AnalyticsNumber",
          "acceptsSegmentation": false,
          "acceptsDateRange": false,
          "tooltip": "Link clicks are anytime a user clicks a link that takes them out of the bot and into a webview. For example, they may be reading content on your blog, or going to a page to purchase a product.\n",
          "customQuery": "",
          "meta": "",
          "links": { "scripts": ["59c3e1099424ed75d65a74b8"] },
          "createdAt": "2017-09-21T15:56:28.358Z",
          "updatedAt": "2018-04-06T21:45:06.349Z",
          "clonedNodes": ["59ea840f2ce566334fcd15bc", "59ea847f05e700480061058b"],
          "id": "59c3e1099424ed75d65a74b7",
          "apiStatus": "200",
          "apiMessage": "OK",
          "entityType": "analyticsreports",
          "href": "https://snapsmedia.io/api/analyticsreports/59c3e1099424ed75d65a74b7",
          "edges": { "scripts": { "edges": { "59c3e1099424ed75d65a74b8": { "relation": "object", "parentService": "analyticsreports", "parentId": "59c3e1099424ed75d65a74b7", "childService": "scripts", "childId": "59c3e1099424ed75d65a74b8", "orderIndex": 0 } }, "maps": { "parentService": { "59c3e1099424ed75d65a74b8": "analyticsreports" }, "parentId": { "59c3e1099424ed75d65a74b8": "59c3e1099424ed75d65a74b7" }, "childService": { "59c3e1099424ed75d65a74b8": "scripts" }, "childId": { "59c3e1099424ed75d65a74b8": "59c3e1099424ed75d65a74b8" }, "orderIndex": { "59c3e1099424ed75d65a74b8": 0 }, "relation": { "59c3e1099424ed75d65a74b8": "object" } }, "indexes": { "parentService": ["59c3e1099424ed75d65a74b8"], "parentId": ["59c3e1099424ed75d65a74b8"], "childService": ["59c3e1099424ed75d65a74b8"], "childId": ["59c3e1099424ed75d65a74b8"], "orderIndex": ["59c3e1099424ed75d65a74b8"], "relation": ["59c3e1099424ed75d65a74b8"] } } }
        }, {
          "title": "Link Clicks",
          "facet": "",
          "includesTrendData": true,
          "active": true,
          "name": "Link Clicks",
          "classes": "col-24 col-md-12",
          "component": "AnalyticsActivityChart",
          "acceptsSegmentation": true,
          "acceptsDateRange": true,
          "tooltip": "The number of link clicks per day, and the total within the time period specified. Link clicks are anytime a user clicks a link that takes them out of the bot and into a webview. The trend indicator compares this time period with the previous one (ie. if you select August, it compares relative to July).",
          "customQuery": "",
          "meta": "",
          "links": { "scripts": ["59c3e986041ff207ce0b6825"] },
          "createdAt": "2017-09-21T16:34:20.874Z",
          "updatedAt": "2018-04-06T21:45:06.350Z",
          "clonedNodes": ["59ea84102ce566334fcd15c3", "59ea847f05e7004800610594"],
          "id": "59c3e986041ff207ce0b6824",
          "apiStatus": "200",
          "apiMessage": "OK",
          "entityType": "analyticsreports",
          "href": "https://snapsmedia.io/api/analyticsreports/59c3e986041ff207ce0b6824",
          "edges": { "scripts": { "edges": { "59c3e986041ff207ce0b6825": { "relation": "object", "parentService": "analyticsreports", "parentId": "59c3e986041ff207ce0b6824", "childService": "scripts", "childId": "59c3e986041ff207ce0b6825", "orderIndex": 0 } }, "maps": { "parentService": { "59c3e986041ff207ce0b6825": "analyticsreports" }, "parentId": { "59c3e986041ff207ce0b6825": "59c3e986041ff207ce0b6824" }, "childService": { "59c3e986041ff207ce0b6825": "scripts" }, "childId": { "59c3e986041ff207ce0b6825": "59c3e986041ff207ce0b6825" }, "orderIndex": { "59c3e986041ff207ce0b6825": 0 }, "relation": { "59c3e986041ff207ce0b6825": "object" } }, "indexes": { "parentService": ["59c3e986041ff207ce0b6825"], "parentId": ["59c3e986041ff207ce0b6825"], "childService": ["59c3e986041ff207ce0b6825"], "childId": ["59c3e986041ff207ce0b6825"], "orderIndex": ["59c3e986041ff207ce0b6825"], "relation": ["59c3e986041ff207ce0b6825"] } } }
        }, {
          "title": "New Users",
          "facet": "",
          "includesTrendData": true,
          "active": true,
          "name": "New Users",
          "classes": "col-24 col-md-12",
          "component": "AnalyticsActivityChart",
          "acceptsSegmentation": true,
          "acceptsDateRange": true,
          "tooltip": "The number of new users per day, and the total number of new users within the time period specified. The trend indicator compares this time period with the previous one (ie. if you select August, it compares relative to July).",
          "customQuery": "",
          "meta": "",
          "links": { "scripts": ["59c3f87db2073d4d2925c0f8"] },
          "createdAt": "2017-09-21T17:36:28.219Z",
          "updatedAt": "2018-04-06T21:45:06.349Z",
          "clonedNodes": ["59ea84102ce566334fcd15c5", "59ea848005e7004800610596"],
          "id": "59c3f87db2073d4d2925c0f7",
          "apiStatus": "200",
          "apiMessage": "OK",
          "entityType": "analyticsreports",
          "href": "https://snapsmedia.io/api/analyticsreports/59c3f87db2073d4d2925c0f7",
          "edges": { "scripts": { "edges": { "59c3f87db2073d4d2925c0f8": { "relation": "object", "parentService": "analyticsreports", "parentId": "59c3f87db2073d4d2925c0f7", "childService": "scripts", "childId": "59c3f87db2073d4d2925c0f8", "orderIndex": 0 } }, "maps": { "parentService": { "59c3f87db2073d4d2925c0f8": "analyticsreports" }, "parentId": { "59c3f87db2073d4d2925c0f8": "59c3f87db2073d4d2925c0f7" }, "childService": { "59c3f87db2073d4d2925c0f8": "scripts" }, "childId": { "59c3f87db2073d4d2925c0f8": "59c3f87db2073d4d2925c0f8" }, "orderIndex": { "59c3f87db2073d4d2925c0f8": 0 }, "relation": { "59c3f87db2073d4d2925c0f8": "object" } }, "indexes": { "parentService": ["59c3f87db2073d4d2925c0f8"], "parentId": ["59c3f87db2073d4d2925c0f8"], "childService": ["59c3f87db2073d4d2925c0f8"], "childId": ["59c3f87db2073d4d2925c0f8"], "orderIndex": ["59c3f87db2073d4d2925c0f8"], "relation": ["59c3f87db2073d4d2925c0f8"] } } }
        }, {
          "title": "Active Users",
          "facet": "",
          "includesTrendData": true,
          "active": true,
          "name": "Active Users",
          "classes": "col-24 col-md-12",
          "component": "AnalyticsActivityChart",
          "acceptsSegmentation": true,
          "acceptsDateRange": true,
          "tooltip": "The number of active users per day, and the total number of active users within the time period specified. If \"John\" uses the bot on Monday and Friday, he gets counted in each of those daily active plots, but only once for the top right total. The total is not simply a sum of every day, because that would potentially double count users. The trend indicator compares this time period with the previous one (ie. if you select August, it compares relative to July).",
          "customQuery": "",
          "meta": "",
          "links": { "scripts": ["59c3fa0343e0102904bc3e01"] },
          "createdAt": "2017-09-21T17:42:51.777Z",
          "updatedAt": "2018-04-06T21:45:06.348Z",
          "clonedNodes": ["59ea84102ce566334fcd15c7", "59ea848005e7004800610598"],
          "id": "59c3fa0343e0102904bc3e00",
          "apiStatus": "200",
          "apiMessage": "OK",
          "entityType": "analyticsreports",
          "href": "https://snapsmedia.io/api/analyticsreports/59c3fa0343e0102904bc3e00",
          "edges": { "scripts": { "edges": { "59c3fa0343e0102904bc3e01": { "relation": "object", "parentService": "analyticsreports", "parentId": "59c3fa0343e0102904bc3e00", "childService": "scripts", "childId": "59c3fa0343e0102904bc3e01", "orderIndex": 0 } }, "maps": { "parentService": { "59c3fa0343e0102904bc3e01": "analyticsreports" }, "parentId": { "59c3fa0343e0102904bc3e01": "59c3fa0343e0102904bc3e00" }, "childService": { "59c3fa0343e0102904bc3e01": "scripts" }, "childId": { "59c3fa0343e0102904bc3e01": "59c3fa0343e0102904bc3e01" }, "orderIndex": { "59c3fa0343e0102904bc3e01": 0 }, "relation": { "59c3fa0343e0102904bc3e01": "object" } }, "indexes": { "parentService": ["59c3fa0343e0102904bc3e01"], "parentId": ["59c3fa0343e0102904bc3e01"], "childService": ["59c3fa0343e0102904bc3e01"], "childId": ["59c3fa0343e0102904bc3e01"], "orderIndex": ["59c3fa0343e0102904bc3e01"], "relation": ["59c3fa0343e0102904bc3e01"] } } }
        }, {
          "title": "Interactions",
          "facet": "",
          "includesTrendData": true,
          "active": true,
          "name": "Interactions",
          "classes": "col-24 col-md-12",
          "component": "AnalyticsActivityChart",
          "acceptsSegmentation": true,
          "acceptsDateRange": true,
          "tooltip": "The number of interactions per day, and the total within the time period specified. An interaction is a change between blocks within the bot. For example, if the user clicks a button, enters text, or uploads a file - it would count as one interaction. Interactions do not include link clicks, which are counted separately. The trend indicator compares this time period with the previous one (ie. if you select August, it compares relative to July).",
          "customQuery": "",
          "meta": "",
          "links": { "scripts": ["59c3fb79a437c99b31870de5"] },
          "createdAt": "2017-09-21T17:48:54.352Z",
          "updatedAt": "2018-04-06T21:45:06.350Z",
          "clonedNodes": ["59ea84102ce566334fcd15c9", "59ea848005e700480061059a"],
          "id": "59c3fb79a437c99b31870de4",
          "apiStatus": "200",
          "apiMessage": "OK",
          "entityType": "analyticsreports",
          "href": "https://snapsmedia.io/api/analyticsreports/59c3fb79a437c99b31870de4",
          "edges": { "scripts": { "edges": { "59c3fb79a437c99b31870de5": { "relation": "object", "parentService": "analyticsreports", "parentId": "59c3fb79a437c99b31870de4", "childService": "scripts", "childId": "59c3fb79a437c99b31870de5", "orderIndex": 0 } }, "maps": { "parentService": { "59c3fb79a437c99b31870de5": "analyticsreports" }, "parentId": { "59c3fb79a437c99b31870de5": "59c3fb79a437c99b31870de4" }, "childService": { "59c3fb79a437c99b31870de5": "scripts" }, "childId": { "59c3fb79a437c99b31870de5": "59c3fb79a437c99b31870de5" }, "orderIndex": { "59c3fb79a437c99b31870de5": 0 }, "relation": { "59c3fb79a437c99b31870de5": "object" } }, "indexes": { "parentService": ["59c3fb79a437c99b31870de5"], "parentId": ["59c3fb79a437c99b31870de5"], "childService": ["59c3fb79a437c99b31870de5"], "childId": ["59c3fb79a437c99b31870de5"], "orderIndex": ["59c3fb79a437c99b31870de5"], "relation": ["59c3fb79a437c99b31870de5"] } } }
        }],
        "scripts": {
          "data": [{
            "scriptType": "analytics",
            "orgId": "57927e5ca26cac010cae6db2",
            "script": "/*exports = {\n      queries: function () {\n        const queries = [];\n        queries.push(\n          selectWithParams()\n            .field('count(app_user_id)')\n            .from('app_users')\n            .toString()\n        );\n        runTask('query', queries);\n      },\n      onQueryTask: function(results) {        \n        let final = {\n          value: results[0][0].count,\n        }\n        exit(final);\n      }\n    };*/\n  exports = {\n      queries: function () {\n        const queries = [];\n        queries.push(\n          selectWithParams()\n            .field('count(distinct(app_user_id))')\n            .from('mv_bot_events')\n            .where(`split_part(description, ' to ', 1) <> 'notification'`)\n            .where('event_name in ?', ['message_read', 'bot_state_change', 'funnel_redirect', 'image_upload', 'free_text_input'])\n            .toString()\n        );\n        //log('app_user test query: '+queries[0])\n        // test\n        runTask('query', queries);\n      },\n      onQueryTask: function(results) {        \n        let final = {\n          value: results[0][0].count,\n          tests: [{\n            func: 'totalUserCount',\n            expect: results[0][0].count\n          }]          \n        };\n        exit(final);\n      }\n    };",
            "name": "59c2ce234d834683e2ed7202",
            "links": {},
            "createdAt": "2017-09-20T20:23:14.025Z",
            "updatedAt": "2018-04-06T21:45:06.558Z",
            "clonedNodes": ["59ea840f2ce566334fcd15b9", "59ea847f05e7004800610588"],
            "id": "59c2ce234d834683e2ed7202",
            "apiStatus": "200",
            "apiMessage": "OK",
            "entityType": "scripts",
            "href": "https://snapsmedia.io/api/scripts/59c2ce234d834683e2ed7202",
            "edges": {}
          }, {
            "scriptType": "analytics",
            "orgId": "57927e5ca26cac010cae6db2",
            "script": "exports = {\n      queries: function () {\n        \n        const queries = [];\n        \n        // visit https://hiddentao.com/squel/ for help constructing your query \n        queries.push(\n          selectWithParams()\n            .field('count(*)')\n            .from('mv_bot_events')\n            .where(`split_part(description, ' to ', 1) <> 'notification'`)\n            //.where('via != ?', 'notification')\n            .where('(via IS NULL OR via != \\'notification\\')')\n            .where('event_name in ?', ['bot_state_change'])\n            .toString()\n        );\n        \n        runTask('query', queries);\n        \n      },\n      onQueryTask: function(results) {\n        \n        /*\n           Results will always return an array of results. \n           The first query results are found at results[0].\n           You can process the results here if needed.\n           When you are ready call exit(dataYouWantReturned) \n         */\n        \n        exit({\n          value: results[0][0].count,\n          tests:[{\n            func: 'interactionsCount',\n            expect: results[0][0].count\n          }]\n       });\n        \n      }\n    };",
            "name": "59c2cef4988b65804b0c368d",
            "links": {},
            "createdAt": "2017-09-20T20:26:56.541Z",
            "updatedAt": "2018-04-06T21:45:06.569Z",
            "clonedNodes": ["59ea840f2ce566334fcd15bb", "59ea847f05e700480061058a"],
            "id": "59c2cef4988b65804b0c368d",
            "apiStatus": "200",
            "apiMessage": "OK",
            "entityType": "scripts",
            "href": "https://snapsmedia.io/api/scripts/59c2cef4988b65804b0c368d",
            "edges": {}
          }, {
            "scriptType": "analytics",
            "orgId": "57927e5ca26cac010cae6db2",
            "script": "exports = {\n      queries: function () {\n        \n        const queries = [];\n        \n        /*\n          jret 12-16-17\n          I don't understand this report\n          it is inclusive of notifications and if it weren't i don't see the context\n          should it be latest sessions?\n        */\n        // visit https://hiddentao.com/squel/ for help constructing your query \n        queries.push(\n          select()\n            .field('app_users.first_name')\n            .field('app_users.last_name')\n            .field('app_users.pic')\n            .field('mv_bot_events.app_user_id')\n            .field('mv_bot_events.event_name')\n            .field('mv_bot_events.description')\n            .field('mv_bot_events.created')\n            .field('mv_bot_events.event_properties')\n            .field('mv_bot_events.to_state_id')\n            .from('mv_bot_events')\n            .from('app_users')\n            .where('mv_bot_events.app_id = ?', appIds)\n            .where('mv_bot_events.event_name in ?', ['free_text_input', 'bot_state_change', 'funnel_redirect'])\n            .where('mv_bot_events.app_user_id = app_users.app_user_id')\n            .order('created', false)\n            .limit(100)\n            .toString()\n        );\n        \n        runTask('query', queries);\n        \n      },\n      onQueryTask: function(results) {\n        \n        /*\n           Results will always return an array of results. \n           The first query results are found at results[0].\n           You can process the results here if needed.\n           When you are ready call exit(dataYouWantReturned) \n         */\n\n        let final = {\n          headers: [{\n            name: 'username',\n            percentWidth: 20,\n            renderType: 'user_name',\n          }, {\n            name: 'time ended',\n            percentWidth: 15,\n            renderType: 'time_ended',\n          }, {\n            name: 'action',\n            percentWidth: 65,\n            renderType: 'user_action',\n          }],\n          data: []\n        }\n\n        let myRows = results[0];\n        myRows.forEach(row => {\n          let event_name = row.event_name;\n          let event_type = 'free text';\n          let event_data = row.description;\n          let stateId = '';\n          if(event_name === 'bot_state_change') {\n            if(event_data.indexOf('via') > -1) {\n              event_data = event_data.split(' via')[0];\n            }\n            event_type = 'state switch';\n            event_data = event_data.split(' to ');\n            if(event_data[0] === '') {\n              event_data[0] = 'Get Started'\n            }\n\n            stateId = row.to_state_id || '';\n            event_data = event_data.reverse();\n          }\n          else if(event_name === 'funnel_redirect') {\n            event_type = 'link';\n            event_data  = decodeURIComponent(event_data)\n                            .replace('Funnel: ', '') // remove 'Funnel: '\n                            .replace(/_([\\w]+)=/i, '?$1=') // find beginning of query parameters\n                            .replace(/(http[s]*)[_]+/i, '$1://') // fix protocol\n                            .replace(/_/ig, '/'); // replace _ with /\n          }\n          final.data.push({\n            username: {\n              img: row.pic,\n              name: row.first_name+' '+row.last_name,\n              id: row.app_user_id\n            },\n            'time ended': row.created,\n            action: {\n              type: event_type,\n              data: event_data,\n              stateId\n            }\n          })\n        });\n        exit(final);\n        \n      }\n    };",
            "name": "59c3e034e3e6073f32b7bc57",
            "links": {},
            "createdAt": "2017-09-21T15:52:39.381Z",
            "updatedAt": "2018-04-06T21:45:06.570Z",
            "clonedNodes": ["59ea84112ce566334fcd15d1", "59ea848005e70048006105a4"],
            "id": "59c3e034e3e6073f32b7bc57",
            "apiStatus": "200",
            "apiMessage": "OK",
            "entityType": "scripts",
            "href": "https://snapsmedia.io/api/scripts/59c3e034e3e6073f32b7bc57",
            "edges": {}
          }, {
            "scriptType": "analytics",
            "orgId": "57927e5ca26cac010cae6db2",
            "script": "exports = {\n      queries: function () {\n        \n        const queries = [];\n        \n        // visit https://hiddentao.com/squel/ for help constructing your query \n        queries.push(\n          selectWithParams()\n            .field('count(*)')\n            .from('mv_bot_events')\n            .where('event_name = ?', 'funnel_redirect')\n            .toString()\n        );\n        \n        runTask('query', queries);\n        \n      },\n      onQueryTask: function(results) {\n        \n        /*\n           Results will always return an array of results. \n           The first query results are found at results[0].\n           You can process the results here if needed.\n           When you are ready call exit(dataYouWantReturned) \n         */\n        \n        exit({\n          value: results[0][0].count,\n          tests: [{\n            func: 'linksCount',\n            expect: results[0][0].count\n          }]\n       });\n        \n      }\n    };",
            "name": "59c3e1099424ed75d65a74b8",
            "links": {},
            "createdAt": "2017-09-21T15:56:28.408Z",
            "updatedAt": "2018-04-06T21:45:06.570Z",
            "clonedNodes": ["59ea84102ce566334fcd15bd", "59ea847f05e700480061058c"],
            "id": "59c3e1099424ed75d65a74b8",
            "apiStatus": "200",
            "apiMessage": "OK",
            "entityType": "scripts",
            "href": "https://snapsmedia.io/api/scripts/59c3e1099424ed75d65a74b8",
            "edges": {}
          }, {
            "scriptType": "analytics",
            "orgId": "57927e5ca26cac010cae6db2",
            "script": "exports = {\n      queries: function () {\n        \n        const queries = [];\n        \n        // visit https://hiddentao.com/squel/ for help constructing your query \n        queries.push(\n          selectWithParams()\n            .field('date_key')\n            .field('count(*)')\n            .from('mv_bot_events')\n            .where('event_name = ?', 'funnel_redirect')\n            .group('date_key')\n            .order('date_key')\n            .toString()\n        );\n        \n        runTask('query', queries);\n        \n      },\n      onQueryTask: function(results) {\n        \n        /*\n           Results will always return an array of results. \n           The first query results are found at results[0].\n           You can process the results here if needed.\n           When you are ready call exit(dataYouWantReturned) \n         */\n        let myRows = results[0];\n        const testSampleParts = Math.floor(myRows.length/4);\n        const final = {\n          tests: [{\n            func: 'clicksByDay',\n            data: [1,2,3,4].map( i => myRows[(i*testSampleParts)-1] )\n          }]\n        }\n               \n        final.data = myRows.map(r => {\n          return [r.date_key, Number(r.count)]\n        })\n        \n        exit(final);\n        \n      }\n    };",
            "name": "59c3e986041ff207ce0b6825",
            "links": {},
            "createdAt": "2017-09-21T16:34:20.920Z",
            "updatedAt": "2018-04-06T21:45:06.570Z",
            "clonedNodes": ["59ea84102ce566334fcd15c4", "59ea848005e7004800610595"],
            "id": "59c3e986041ff207ce0b6825",
            "apiStatus": "200",
            "apiMessage": "OK",
            "entityType": "scripts",
            "href": "https://snapsmedia.io/api/scripts/59c3e986041ff207ce0b6825",
            "edges": {}
          }, {
            "scriptType": "analytics",
            "orgId": "57927e5ca26cac010cae6db2",
            "script": "exports = {\n      queries: function () {\n        \n        const queries = [];\n        queries.push(\n          selectWithParams()\n            .field('date_key, count(*)')\n            .from(select()\n              .field('app_id, app_user_id, min(date_key) as date_key')\n              .from('mv_bot_events')\n              .where('app_id in (\\''+appIds.join('\\',\\'')+'\\')') \n              .where(`split_part(description, ' to ', 1) <> 'notification'`)\n              .where('(via IS NULL OR via != \\'notification\\')')\n              .where('event_name in ?', ['message_read', 'bot_state_change', 'funnel_redirect', 'image_upload', 'free_text_input'])\n              .group('app_user_id, app_id'))\n            .group('date_key')\n            .order('date_key')\n            .toString()\n        );\n        // visit https://hiddentao.com/squel/ for help constructing your query \n        /*\n        .where('app_id in (\\''+appIds.join('\\',\\'')+'\\')') \n              \n        queries.push(\n          selectWithParams()\n            .field('date_key')\n            .field('count(*)')\n            .from('app_users')\n            .group('date_key')\n            .order('date_key')\n            .toString()\n        );\n        */\n        runTask('query', queries);\n        \n      },\n      onQueryTask: function(results) {\n        \n        /*\n           Results will always return an array of results. \n           The first query results are found at results[0].\n           You can process the results here if needed.\n           When you are ready call exit(dataYouWantReturned) \n         */\n        \n        let myRows = results[0];\n        const testSampleParts = Math.floor(myRows.length/4);\n        const final = {\n          tests: [{\n            func: 'newUsersByDay',\n            data: [1,2,3,4].map( i => myRows[(i*testSampleParts)-1] )\n          }]\n        }\n               \n        final.data = myRows.map(r => {\n          return [r.date_key, Number(r.count)]\n        })\n        \n        exit(final);\n        \n      }\n    };",
            "name": "59c3f87db2073d4d2925c0f8",
            "links": {},
            "createdAt": "2017-09-21T17:36:28.277Z",
            "updatedAt": "2018-04-06T21:45:06.569Z",
            "clonedNodes": ["59ea84102ce566334fcd15c6", "59ea848005e7004800610597"],
            "id": "59c3f87db2073d4d2925c0f8",
            "apiStatus": "200",
            "apiMessage": "OK",
            "entityType": "scripts",
            "href": "https://snapsmedia.io/api/scripts/59c3f87db2073d4d2925c0f8",
            "edges": {}
          }, {
            "scriptType": "analytics",
            "orgId": "57927e5ca26cac010cae6db2",
            "script": "exports = {\n      queries: function () {\n        \n        const queries = [];\n        \n        // visit https://hiddentao.com/squel/ for help constructing your query \n        queries.push(\n          select()\n            .field('date_key, count(*)')\n            .from(selectWithParams()\n              .field('app_user_id, date_key, count(*)')\n              .from('mv_bot_events')\n              .where(`split_part(description, ' to ', 1) <> 'notification'`)\n              .where('(via IS NULL OR via != \\'notification\\')')\n              .where('event_name in ?', ['message_read', 'bot_state_change', 'funnel_redirect', 'image_upload', 'free_text_input'])\n              .group('date_key, app_user_id'))\n            .group('date_key')\n            .order('date_key')\n            .toString()\n        );\n\n        queries.push(\n          selectWithParams()\n            .field('count(distinct(app_user_id))')\n            .from('mv_bot_events')\n            .where(`split_part(description, ' to ', 1) <> 'notification'`)\n            .where('(via IS NULL OR via != \\'notification\\')')\n            .where('event_name in ?', ['message_read', 'bot_state_change', 'funnel_redirect', 'image_upload', 'free_text_input'])\n            .toString()\n        );\n        //log('active query string:'+queries[1])\n        runTask('query', queries);\n        \n      },\n      onQueryTask: function(results) {\n        \n        /*\n           Results will always return an array of results. \n           The first query results are found at results[0].\n           You can process the results here if needed.\n           When you are ready call exit(dataYouWantReturned) \n         */\n        let myRows = results[0];\n        \n        const testSampleParts = Math.floor(myRows.length/4);\n        const final = {\n          tests: [{\n            func: 'activeUsersByDay',\n            data: [1,2,3,4].map( i => myRows[(i*testSampleParts)-1] )\n          },{\n            func: 'activeUsersByRange',\n            expect: results[1][0].count\n          }]\n        };\n       \n        final.data = myRows.map(r => {\n          return [r.date_key, Number(r.count)]\n        })\n\n        final.aggregateValue = results[1][0].count\n        \n        exit(final);\n        \n      }\n    };",
            "name": "59c3fa0343e0102904bc3e01",
            "links": {},
            "createdAt": "2017-09-21T17:42:51.971Z",
            "updatedAt": "2018-04-06T21:45:06.569Z",
            "clonedNodes": ["59ea84102ce566334fcd15c8", "59ea848005e7004800610599"],
            "id": "59c3fa0343e0102904bc3e01",
            "apiStatus": "200",
            "apiMessage": "OK",
            "entityType": "scripts",
            "href": "https://snapsmedia.io/api/scripts/59c3fa0343e0102904bc3e01",
            "edges": {}
          }, {
            "scriptType": "analytics",
            "orgId": "57927e5ca26cac010cae6db2",
            "script": "exports = {\n      queries: function () {\n        \n        const queries = [];\n        \n        // visit https://hiddentao.com/squel/ for help constructing your query \n        queries.push(\n          selectWithParams()\n            .field('date_key')\n            .field('count(*)')\n            .from('mv_bot_events')\n            .where(`split_part(description, ' to ', 1) <> 'notification'`)\n            //.where('via != \\'notification\\'')\n            .where('(via IS NULL OR via != \\'notification\\')') \n            .where('event_name in ?', ['bot_state_change'])\n            .group('date_key')\n            .order('date_key')\n            .toString()\n        );\n        \n        runTask('query', queries);\n        \n      },\n      onQueryTask: function(results) {\n        \n        /*\n           Results will always return an array of results. \n           The first query results are found at results[0].\n           You can process the results here if needed.\n           When you are ready call exit(dataYouWantReturned) \n         */\n        let myRows = results[0];\n        const testSampleParts = Math.floor(myRows.length/4);\n        const final = {\n          tests: [{\n            func: 'interactionsByDay',\n            data: [1,2,3,4].map( i => myRows[(i*testSampleParts)-1] )\n          }]\n        }\n               \n        final.data = myRows.map(r => {\n          return [r.date_key, Number(r.count)]\n        })\n        \n        exit(final);\n        \n      }\n    };",
            "name": "59c3fb79a437c99b31870de5",
            "links": {},
            "createdAt": "2017-09-21T17:48:54.582Z",
            "updatedAt": "2018-04-06T21:45:06.570Z",
            "clonedNodes": ["59ea84112ce566334fcd15cb", "59ea848005e70048006105a1"],
            "id": "59c3fb79a437c99b31870de5",
            "apiStatus": "200",
            "apiMessage": "OK",
            "entityType": "scripts",
            "href": "https://snapsmedia.io/api/scripts/59c3fb79a437c99b31870de5",
            "edges": {}
          }]
        }
      }
    }
  }
}

export const graphTestData = {
  structure: { "triggers": { "data": [], "apps": { "data": [] }, "rules": { "data": [] }, "rulesets": { "data": [], "rules": { "data": [] }, "rulesets": { "data": [], "rules": { "data": [] } } } } },
  virtualizeResp: {
    "triggers": {
      "data": [{
        "pushStateId": "5ad8be5364c49734a637eec0",
        "secondsFromNow": 82800,
        "description": "",
        "frequency": "hours",
        "isRulesEng": true,
        "active": false,
        "production": false,
        "staging": false,
        "triggerSentence": " When users have   clicked link containing asdf",
        "triggerEvents": [],
        "name": "WHYY",
        "orgId": "5ad8bd24c571e541973cd927",
        "eventName": "funnelEntered",
        "performAction": "",
        "actionOptions": "",
        "meta": { "messaging_type": "MESSAGE_TAG", "standard_plusone": true, "standard_active": true, "tag": "REENGAGEMENT_TEST" },
        "links": { "rules": ["5b11c29e595651be2c9051e8"], "apps": ["5ad8be5364c49734a637eebe"], "rulesets": ["5b11c29e595651be2c9051e9"] },
        "createdAt": "2018-06-01T22:04:48.824Z",
        "updatedAt": "2018-06-11T20:27:35.678Z",
        "id": "5b11c29e595651be2c9051e7",
        "apiStatus": "200",
        "apiMessage": "OK",
        "entityType": "triggers",
        "href": "https://antares-aptible.snapsmedia.io/api/triggers/5b11c29e595651be2c9051e7",
        "edges": {
          "rules": {
            "edges": {
              "5b11c29e595651be2c9051e8": {
                "relation": "object",
                "parentService": "triggers",
                "parentId": "5b11c29e595651be2c9051e7",
                "childService": "rules",
                "childId": "5b11c29e595651be2c9051e8",
                "orderIndex": 0
              }
            },
            "maps": { "parentService": { "5b11c29e595651be2c9051e8": "triggers" }, "parentId": { "5b11c29e595651be2c9051e8": "5b11c29e595651be2c9051e7" }, "childService": { "5b11c29e595651be2c9051e8": "rules" }, "childId": { "5b11c29e595651be2c9051e8": "5b11c29e595651be2c9051e8" }, "orderIndex": { "5b11c29e595651be2c9051e8": 0 }, "relation": { "5b11c29e595651be2c9051e8": "object" } },
            "indexes": { "parentService": ["5b11c29e595651be2c9051e8", "5b11c29e595651be2c9051e8"], "parentId": ["5b11c29e595651be2c9051e8", "5b11c29e595651be2c9051e8"], "childService": ["5b11c29e595651be2c9051e8", "5b11c29e595651be2c9051e8"], "childId": ["5b11c29e595651be2c9051e8", "5b11c29e595651be2c9051e8"], "orderIndex": ["5b11c29e595651be2c9051e8", "5b11c29e595651be2c9051e8"], "relation": ["5b11c29e595651be2c9051e8", "5b11c29e595651be2c9051e8"] }
          },
          "apps": { "edges": { "5ad8be5364c49734a637eebe": { "relation": "subject", "parentService": "triggers", "parentId": "5b11c29e595651be2c9051e7", "childService": "apps", "childId": "5ad8be5364c49734a637eebe", "orderIndex": 0 } }, "maps": { "parentService": { "5ad8be5364c49734a637eebe": "triggers" }, "parentId": { "5ad8be5364c49734a637eebe": "5b11c29e595651be2c9051e7" }, "childService": { "5ad8be5364c49734a637eebe": "apps" }, "childId": { "5ad8be5364c49734a637eebe": "5ad8be5364c49734a637eebe" }, "orderIndex": { "5ad8be5364c49734a637eebe": 0 }, "relation": { "5ad8be5364c49734a637eebe": "subject" } }, "indexes": { "parentService": ["5ad8be5364c49734a637eebe", "5ad8be5364c49734a637eebe"], "parentId": ["5ad8be5364c49734a637eebe", "5ad8be5364c49734a637eebe"], "childService": ["5ad8be5364c49734a637eebe", "5ad8be5364c49734a637eebe"], "childId": ["5ad8be5364c49734a637eebe", "5ad8be5364c49734a637eebe"], "orderIndex": ["5ad8be5364c49734a637eebe", "5ad8be5364c49734a637eebe"], "relation": ["5ad8be5364c49734a637eebe", "5ad8be5364c49734a637eebe"] } },
          "rulesets": { "edges": { "5b11c29e595651be2c9051e9": { "relation": "object", "parentService": "triggers", "parentId": "5b11c29e595651be2c9051e7", "childService": "rulesets", "childId": "5b11c29e595651be2c9051e9", "orderIndex": 0 } }, "maps": { "parentService": { "5b11c29e595651be2c9051e9": "triggers" }, "parentId": { "5b11c29e595651be2c9051e9": "5b11c29e595651be2c9051e7" }, "childService": { "5b11c29e595651be2c9051e9": "rulesets" }, "childId": { "5b11c29e595651be2c9051e9": "5b11c29e595651be2c9051e9" }, "orderIndex": { "5b11c29e595651be2c9051e9": 0 }, "relation": { "5b11c29e595651be2c9051e9": "object" } }, "indexes": { "parentService": ["5b11c29e595651be2c9051e9"], "parentId": ["5b11c29e595651be2c9051e9"], "childService": ["5b11c29e595651be2c9051e9"], "childId": ["5b11c29e595651be2c9051e9"], "orderIndex": ["5b11c29e595651be2c9051e9"], "relation": ["5b11c29e595651be2c9051e9"] } }
        }
      }],
      "apps": { "data": [{ "launchDate": "", "status": "development", "hiddenTemplate": false, "credentialsS3URI": "", "bundleId": "", "productId": "", "keyboardOptions": { "keyboardAndroidAppStoreLink": "", "keyboardAndroidShareText": "", "keyboardIOSAppStoreLink": "", "keyboardShareText": "" }, "appConfig": {}, "sessionTime": 300, "displayName": "Bees", "rlock": false, "rlockinfo": {}, "showInAnalytics": 0, "mixpanel": false, "product": "bot", "name": "Bees", "platform": "fbmessenger", "orgId": "5ad8bd24c571e541973cd927", "links": { "analyticspagetypes": ["59c19f244ca8fc015b183338", "59c4335493bc3331e27ef401"], "appvars": ["5ad8be5302c91306d2c22bee", "5ad8be532007c157d540e67d", "5ad8be531cf1de681a2230fe", "5ad8be535959c1369e16fcbb", "5ad8be5302c91306d2c22bef", "5ad8c702365f684c282ce8e5", "5ae397d9c50b93171009fba1", "5ae397d997fa880195fd0af5", "5ae397d90c0b955645aea5d4", "5ae9ff919565c81fc5f1e128", "5b030694b4f53b73213d0cb9", "5b0306a1b4f53b73213d0cbb", "5b1177fbe82d3c68f018aa7a", "5b11a3235e5c75013634c0fd", "5b15a71ead587a53326d2695", "5b15a72b2ad0424f7acca83c"], "bots": ["5ad8be5364c49734a637eebf"], "icalevents": ["5ae10353fc8d7e106e3c3c64"], "triggers": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7"], "scripts": ["5b19a154ccfc8f0095911f9b", "5b19a2a2f8ee85009524a76b"] }, "createdAt": "2018-04-19T16:05:39.926Z", "updatedAt": "2018-06-11T20:27:35.862Z", "id": "5ad8be5364c49734a637eebe", "apiStatus": "development", "apiMessage": "", "entityType": "apps", "href": "https://antares-aptible.snapsmedia.io/api/apps/5ad8be5364c49734a637eebe", "edges": { "analyticspagetypes": { "edges": { "59c19f244ca8fc015b183338": { "relation": "object", "orderIndex": 0 }, "59c4335493bc3331e27ef401": { "relation": "object", "orderIndex": 1 } }, "maps": { "orderIndex": { "59c19f244ca8fc015b183338": 0, "59c4335493bc3331e27ef401": 1 }, "relation": { "59c19f244ca8fc015b183338": "object", "59c4335493bc3331e27ef401": "object" } }, "indexes": { "orderIndex": ["59c19f244ca8fc015b183338", "59c19f244ca8fc015b183338", "59c4335493bc3331e27ef401", "59c4335493bc3331e27ef401"], "relation": ["59c19f244ca8fc015b183338", "59c4335493bc3331e27ef401", "59c19f244ca8fc015b183338", "59c4335493bc3331e27ef401"] } }, "appvars": { "edges": {}, "maps": {}, "indexes": {} }, "icalevents": { "edges": { "5ae10353fc8d7e106e3c3c64": { "relation": "subject", "parentService": "icalevents", "parentId": "5ae10353fc8d7e106e3c3c64", "childService": "apps", "childId": "5ad8be5364c49734a637eebe", "orderIndex": 0 } }, "maps": { "relation": { "5ae10353fc8d7e106e3c3c64": "subject" }, "parentService": { "5ae10353fc8d7e106e3c3c64": "icalevents" }, "parentId": { "5ae10353fc8d7e106e3c3c64": "5ae10353fc8d7e106e3c3c64" }, "childService": { "5ae10353fc8d7e106e3c3c64": "apps" }, "childId": { "5ae10353fc8d7e106e3c3c64": "5ad8be5364c49734a637eebe" }, "orderIndex": { "5ae10353fc8d7e106e3c3c64": 0 } }, "indexes": { "relation": ["5ae10353fc8d7e106e3c3c64", "5ae10353fc8d7e106e3c3c64"], "parentService": ["5ae10353fc8d7e106e3c3c64", "5ae10353fc8d7e106e3c3c64"], "parentId": ["5ae10353fc8d7e106e3c3c64", "5ae10353fc8d7e106e3c3c64"], "childService": ["5ae10353fc8d7e106e3c3c64", "5ae10353fc8d7e106e3c3c64"], "childId": ["5ae10353fc8d7e106e3c3c64", "5ae10353fc8d7e106e3c3c64"], "orderIndex": ["5ae10353fc8d7e106e3c3c64", "5ae10353fc8d7e106e3c3c64"] } }, "triggers": { "edges": { "5b0ee6c88a8507f968b49323": { "relation": "subject", "parentService": "triggers", "parentId": "5b0ee6c88a8507f968b49323", "childService": "apps", "childId": "5ad8be5364c49734a637eebe", "orderIndex": 0 }, "5b11a345c6e1cd5fbf1ecaf9": { "relation": "object", "parentService": "triggers", "parentId": "5b11a345c6e1cd5fbf1ecaf9", "childService": "apps", "childId": "5ad8be5364c49734a637eebe", "orderIndex": 0 }, "5b11b7bf595651be2c9051d7": { "relation": "subject", "parentService": "triggers", "parentId": "5b11b7bf595651be2c9051d7", "childService": "apps", "childId": "5ad8be5364c49734a637eebe", "orderIndex": 0 }, "5b11c29e595651be2c9051e7": { "relation": "subject", "parentService": "triggers", "parentId": "5b11c29e595651be2c9051e7", "childService": "apps", "childId": "5ad8be5364c49734a637eebe", "orderIndex": 0 } }, "maps": { "relation": { "5b0ee6c88a8507f968b49323": "subject", "5b11a345c6e1cd5fbf1ecaf9": "object", "5b11b7bf595651be2c9051d7": "subject", "5b11c29e595651be2c9051e7": "subject" }, "parentService": { "5b0ee6c88a8507f968b49323": "triggers", "5b11a345c6e1cd5fbf1ecaf9": "triggers", "5b11b7bf595651be2c9051d7": "triggers", "5b11c29e595651be2c9051e7": "triggers" }, "parentId": { "5b0ee6c88a8507f968b49323": "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9": "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7": "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7": "5b11c29e595651be2c9051e7" }, "childService": { "5b0ee6c88a8507f968b49323": "apps", "5b11a345c6e1cd5fbf1ecaf9": "apps", "5b11b7bf595651be2c9051d7": "apps", "5b11c29e595651be2c9051e7": "apps" }, "childId": { "5b0ee6c88a8507f968b49323": "5ad8be5364c49734a637eebe", "5b11a345c6e1cd5fbf1ecaf9": "5ad8be5364c49734a637eebe", "5b11b7bf595651be2c9051d7": "5ad8be5364c49734a637eebe", "5b11c29e595651be2c9051e7": "5ad8be5364c49734a637eebe" }, "orderIndex": { "5b0ee6c88a8507f968b49323": 0, "5b11a345c6e1cd5fbf1ecaf9": 0, "5b11b7bf595651be2c9051d7": 0, "5b11c29e595651be2c9051e7": 0 } }, "indexes": { "relation": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7", "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11c29e595651be2c9051e7"], "parentService": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7", "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7"], "parentId": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7", "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7"], "childService": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7", "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7"], "childId": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7", "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7"], "orderIndex": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7", "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7"] } }, "scripts": { "edges": {}, "maps": {}, "indexes": {} }, "bots": { "edges": {}, "maps": {}, "indexes": {} } } }] },
      "rules": { "data": [{ "action": "Entered", "operator": "", "value": "true", "time": "hasEver", "rlock": false, "rlockinfo": {}, "resourceType": "funnels", "resourceName": "asdf", "resourceId": "asdf", "orgId": "5ad8bd24c571e541973cd927", "links": { "triggers": ["5b11c29e595651be2c9051e7"] }, "createdAt": "2018-06-01T22:04:48.923Z", "updatedAt": "2018-06-11T20:27:35.856Z", "id": "5b11c29e595651be2c9051e8", "apiStatus": "200", "apiMessage": "OK", "entityType": "rules", "href": "https://antares-aptible.snapsmedia.io/api/rules/5b11c29e595651be2c9051e8", "edges": { "triggers": { "edges": { "5b11c29e595651be2c9051e7": { "relation": "subject", "parentService": "triggers", "parentId": "5b11c29e595651be2c9051e7", "childService": "rules", "childId": "5b11c29e595651be2c9051e8", "orderIndex": 0 } }, "maps": { "relation": { "5b11c29e595651be2c9051e7": "subject" }, "parentService": { "5b11c29e595651be2c9051e7": "triggers" }, "parentId": { "5b11c29e595651be2c9051e7": "5b11c29e595651be2c9051e7" }, "childService": { "5b11c29e595651be2c9051e7": "rules" }, "childId": { "5b11c29e595651be2c9051e7": "5b11c29e595651be2c9051e8" }, "orderIndex": { "5b11c29e595651be2c9051e7": 0 } }, "indexes": { "relation": ["5b11c29e595651be2c9051e7", "5b11c29e595651be2c9051e7"], "parentService": ["5b11c29e595651be2c9051e7", "5b11c29e595651be2c9051e7"], "parentId": ["5b11c29e595651be2c9051e7", "5b11c29e595651be2c9051e7"], "childService": ["5b11c29e595651be2c9051e7", "5b11c29e595651be2c9051e7"], "childId": ["5b11c29e595651be2c9051e7", "5b11c29e595651be2c9051e7"], "orderIndex": ["5b11c29e595651be2c9051e7", "5b11c29e595651be2c9051e7"] } } } }] },
      "rulesets": { "data": [{ "ruleSetType": "any", "rlock": false, "rlockinfo": {}, "name": "", "orgId": "5ad8bd24c571e541973cd927", "links": { "rulesets": ["5b1eac9e7157989575bd7cba"] }, "createdAt": "2018-06-01T22:04:48.919Z", "updatedAt": "2018-06-11T20:27:35.857Z", "id": "5b11c29e595651be2c9051e9", "apiStatus": "200", "apiMessage": "OK", "entityType": "rulesets", "href": "https://antares-aptible.snapsmedia.io/api/rulesets/5b11c29e595651be2c9051e9", "edges": { "rulesets": { "edges": { "5b1eac9e7157989575bd7cba": { "relation": "object", "parentService": "rulesets", "parentId": "5b11c29e595651be2c9051e9", "childService": "rulesets", "childId": "5b1eac9e7157989575bd7cba", "orderIndex": 0 } }, "maps": { "parentService": { "5b1eac9e7157989575bd7cba": "rulesets" }, "parentId": { "5b1eac9e7157989575bd7cba": "5b11c29e595651be2c9051e9" }, "childService": { "5b1eac9e7157989575bd7cba": "rulesets" }, "childId": { "5b1eac9e7157989575bd7cba": "5b1eac9e7157989575bd7cba" }, "orderIndex": { "5b1eac9e7157989575bd7cba": 0 }, "relation": { "5b1eac9e7157989575bd7cba": "object" } }, "indexes": { "parentService": ["5b1eac9e7157989575bd7cba"], "parentId": ["5b1eac9e7157989575bd7cba"], "childService": ["5b1eac9e7157989575bd7cba"], "childId": ["5b1eac9e7157989575bd7cba"], "orderIndex": ["5b1eac9e7157989575bd7cba"], "relation": ["5b1eac9e7157989575bd7cba"] } } } }], "rules": { "data": [] }, "rulesets": { "data": [{ "ruleSetType": "any", "rlock": false, "rlockinfo": {}, "name": "", "orgId": "5ad8bd24c571e541973cd927", "links": { "rules": ["5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf"], "rulesets": ["5b11c29e595651be2c9051e9"] }, "createdAt": "2018-06-11T17:09:12.355Z", "updatedAt": "2018-06-11T20:27:35.885Z", "id": "5b1eac9e7157989575bd7cba", "apiStatus": "200", "apiMessage": "OK", "entityType": "rulesets", "href": "https://antares-aptible.snapsmedia.io/api/rulesets/5b1eac9e7157989575bd7cba", "edges": { "rules": { "edges": { "5b1eac9e7157989575bd7cbb": { "relation": "subject", "parentService": "rulesets", "parentId": "5b1eac9e7157989575bd7cba", "childService": "rules", "childId": "5b1eac9e7157989575bd7cbb", "orderIndex": 0 }, "5b1eb16e7157989575bd7cbf": { "relation": "object", "parentService": "rulesets", "parentId": "5b1eac9e7157989575bd7cba", "childService": "rules", "childId": "5b1eb16e7157989575bd7cbf", "orderIndex": 2 } }, "maps": { "parentService": { "5b1eac9e7157989575bd7cbb": "rulesets", "5b1eb16e7157989575bd7cbf": "rulesets" }, "parentId": { "5b1eac9e7157989575bd7cbb": "5b1eac9e7157989575bd7cba", "5b1eb16e7157989575bd7cbf": "5b1eac9e7157989575bd7cba" }, "childService": { "5b1eac9e7157989575bd7cbb": "rules", "5b1eb16e7157989575bd7cbf": "rules" }, "childId": { "5b1eac9e7157989575bd7cbb": "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf": "5b1eb16e7157989575bd7cbf" }, "orderIndex": { "5b1eac9e7157989575bd7cbb": 0, "5b1eb16e7157989575bd7cbf": 2 }, "relation": { "5b1eac9e7157989575bd7cbb": "subject", "5b1eb16e7157989575bd7cbf": "object" } }, "indexes": { "parentService": ["5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf", "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf"], "parentId": ["5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf", "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf"], "childService": ["5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf", "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf"], "childId": ["5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf", "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf"], "orderIndex": ["5b1eac9e7157989575bd7cbb", "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf", "5b1eb16e7157989575bd7cbf"], "relation": ["5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf", "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf"] } } } }], "rules": { "data": [{ "action": "Entered", "operator": "", "value": "true", "time": "", "rlock": false, "rlockinfo": {}, "resourceType": "funnels", "resourceName": "sdf", "resourceId": "sdf", "orgId": "5ad8bd24c571e541973cd927", "links": { "rulesets": ["5b1eac9e7157989575bd7cba"] }, "createdAt": "2018-06-11T17:09:12.410Z", "updatedAt": "2018-06-11T20:27:35.944Z", "id": "5b1eac9e7157989575bd7cbb", "apiStatus": "200", "apiMessage": "OK", "entityType": "rules", "href": "https://antares-aptible.snapsmedia.io/api/rules/5b1eac9e7157989575bd7cbb", "edges": { "rulesets": { "edges": { "5b1eac9e7157989575bd7cba": { "relation": "object", "parentService": "rulesets", "parentId": "5b1eac9e7157989575bd7cba", "childService": "rules", "childId": "5b1eac9e7157989575bd7cbb", "orderIndex": 0 } }, "maps": { "relation": { "5b1eac9e7157989575bd7cba": "object" }, "parentService": { "5b1eac9e7157989575bd7cba": "rulesets" }, "parentId": { "5b1eac9e7157989575bd7cba": "5b1eac9e7157989575bd7cba" }, "childService": { "5b1eac9e7157989575bd7cba": "rules" }, "childId": { "5b1eac9e7157989575bd7cba": "5b1eac9e7157989575bd7cbb" }, "orderIndex": { "5b1eac9e7157989575bd7cba": 0 } }, "indexes": { "relation": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "parentService": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "parentId": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "childService": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "childId": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "orderIndex": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"] } } } }, { "action": "Entered", "operator": "", "value": "false", "time": "", "rlock": false, "rlockinfo": {}, "resourceType": "funnels", "resourceName": "asdflkj", "resourceId": "asdflkj", "orgId": "5ad8bd24c571e541973cd927", "links": { "rulesets": ["5b1eac9e7157989575bd7cba"] }, "createdAt": "2018-06-11T17:29:27.088Z", "updatedAt": "2018-06-11T20:27:35.950Z", "id": "5b1eb16e7157989575bd7cbf", "apiStatus": "200", "apiMessage": "OK", "entityType": "rules", "href": "https://antares-aptible.snapsmedia.io/api/rules/5b1eb16e7157989575bd7cbf", "edges": { "rulesets": { "edges": { "5b1eac9e7157989575bd7cba": { "relation": "subject", "parentService": "rulesets", "parentId": "5b1eac9e7157989575bd7cba", "childService": "rules", "childId": "5b1eb16e7157989575bd7cbf", "orderIndex": 2 } }, "maps": { "relation": { "5b1eac9e7157989575bd7cba": "subject" }, "parentService": { "5b1eac9e7157989575bd7cba": "rulesets" }, "parentId": { "5b1eac9e7157989575bd7cba": "5b1eac9e7157989575bd7cba" }, "childService": { "5b1eac9e7157989575bd7cba": "rules" }, "childId": { "5b1eac9e7157989575bd7cba": "5b1eb16e7157989575bd7cbf" }, "orderIndex": { "5b1eac9e7157989575bd7cba": 2 } }, "indexes": { "relation": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "parentService": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "parentId": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "childService": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "childId": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "orderIndex": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"] } } } }] } } }
    }
  },
  graphPostBody: {
    "orgId": "5ad8bd24c571e541973cd927",
    "state": {
      "triggers": {
        "data": [{
          "pushStateId": "5ad8be5364c49734a637eec0",
          "secondsFromNow": 82800,
          "description": "",
          "frequency": "hours",
          "isRulesEng": true,
          "active": false,
          "production": false,
          "staging": false,
          "triggerSentence": " When users have   clicked link containing asdf",
          "triggerEvents": [],
          "name": "WHYY",
          "orgId": "5ad8bd24c571e541973cd927",
          "eventName": "funnelEntered",
          "performAction": "",
          "actionOptions": "",
          "meta": { "messaging_type": "MESSAGE_TAG", "standard_plusone": true, "standard_active": true, "tag": "REENGAGEMENT_TEST" },
          "links": { "rules": ["5b11c29e595651be2c9051e8"], "apps": ["5ad8be5364c49734a637eebe"], "rulesets": ["5b11c29e595651be2c9051e9"] },
          "createdAt": "2018-06-01T22:04:48.824Z",
          "updatedAt": "2018-06-11T20:27:35.678Z",
          "id": "5b11c29e595651be2c9051e7",
          "apiStatus": "200",
          "apiMessage": "OK",
          "entityType": "triggers",
          "href": "https://antares-aptible.snapsmedia.io/api/triggers/5b11c29e595651be2c9051e7",
          "edges": {
            "rules": {
              "edges": {
                "5b11c29e595651be2c9051e8": {
                  "parentService": "triggers",
                  "parentId": "5b11c29e595651be2c9051e7",
                  "childService": "rules",
                  "childId": "5b11c29e595651be2c9051e8",
                  "relation": "object",
                  "orderIndex": 0
                }
              },
              "maps": { "parentService": { "5b11c29e595651be2c9051e8": "triggers" }, "parentId": { "5b11c29e595651be2c9051e8": "5b11c29e595651be2c9051e7" }, "childService": { "5b11c29e595651be2c9051e8": "rules" }, "childId": { "5b11c29e595651be2c9051e8": "5b11c29e595651be2c9051e8" }, "orderIndex": { "5b11c29e595651be2c9051e8": 0 }, "relation": { "5b11c29e595651be2c9051e8": "object" } },
              "indexes": { "parentService": ["5b11c29e595651be2c9051e8", "5b11c29e595651be2c9051e8"], "parentId": ["5b11c29e595651be2c9051e8", "5b11c29e595651be2c9051e8"], "childService": ["5b11c29e595651be2c9051e8", "5b11c29e595651be2c9051e8"], "childId": ["5b11c29e595651be2c9051e8", "5b11c29e595651be2c9051e8"], "orderIndex": ["5b11c29e595651be2c9051e8", "5b11c29e595651be2c9051e8"], "relation": ["5b11c29e595651be2c9051e8", "5b11c29e595651be2c9051e8"] }
            },
            "apps": { "edges": { "5ad8be5364c49734a637eebe": { "parentService": "triggers", "parentId": "5b11c29e595651be2c9051e7", "childService": "apps", "childId": "5ad8be5364c49734a637eebe", "relation": "subject", "orderIndex": 0 } }, "maps": { "parentService": { "5ad8be5364c49734a637eebe": "triggers" }, "parentId": { "5ad8be5364c49734a637eebe": "5b11c29e595651be2c9051e7" }, "childService": { "5ad8be5364c49734a637eebe": "apps" }, "childId": { "5ad8be5364c49734a637eebe": "5ad8be5364c49734a637eebe" }, "orderIndex": { "5ad8be5364c49734a637eebe": 0 }, "relation": { "5ad8be5364c49734a637eebe": "subject" } }, "indexes": { "parentService": ["5ad8be5364c49734a637eebe", "5ad8be5364c49734a637eebe"], "parentId": ["5ad8be5364c49734a637eebe", "5ad8be5364c49734a637eebe"], "childService": ["5ad8be5364c49734a637eebe", "5ad8be5364c49734a637eebe"], "childId": ["5ad8be5364c49734a637eebe", "5ad8be5364c49734a637eebe"], "orderIndex": ["5ad8be5364c49734a637eebe", "5ad8be5364c49734a637eebe"], "relation": ["5ad8be5364c49734a637eebe", "5ad8be5364c49734a637eebe"] } },
            "rulesets": { "edges": { "5b11c29e595651be2c9051e9": { "parentService": "triggers", "parentId": "5b11c29e595651be2c9051e7", "childService": "rulesets", "childId": "5b11c29e595651be2c9051e9", "relation": "object", "orderIndex": 0 } }, "maps": { "parentService": { "5b11c29e595651be2c9051e9": "triggers" }, "parentId": { "5b11c29e595651be2c9051e9": "5b11c29e595651be2c9051e7" }, "childService": { "5b11c29e595651be2c9051e9": "rulesets" }, "childId": { "5b11c29e595651be2c9051e9": "5b11c29e595651be2c9051e9" }, "orderIndex": { "5b11c29e595651be2c9051e9": 0 }, "relation": { "5b11c29e595651be2c9051e9": "object" } }, "indexes": { "parentService": ["5b11c29e595651be2c9051e9"], "parentId": ["5b11c29e595651be2c9051e9"], "childService": ["5b11c29e595651be2c9051e9"], "childId": ["5b11c29e595651be2c9051e9"], "orderIndex": ["5b11c29e595651be2c9051e9"], "relation": ["5b11c29e595651be2c9051e9"] } }
          },
        }],
        "apps": {
          "data": [{
            "launchDate": "",
            "status": "development",
            "hiddenTemplate": false,
            "credentialsS3URI": "",
            "bundleId": "",
            "productId": "",
            "keyboardOptions": { "keyboardAndroidAppStoreLink": "", "keyboardAndroidShareText": "", "keyboardIOSAppStoreLink": "", "keyboardShareText": "" },
            "appConfig": {},
            "sessionTime": 300,
            "displayName": "Bees",
            "rlock": false,
            "rlockinfo": {},
            "showInAnalytics": 0,
            "mixpanel": false,
            "product": "bot",
            "name": "Bees",
            "platform": "fbmessenger",
            "orgId": "5ad8bd24c571e541973cd927",
            "links": { "analyticspagetypes": ["59c19f244ca8fc015b183338", "59c4335493bc3331e27ef401"], "appvars": ["5ad8be5302c91306d2c22bee", "5ad8be532007c157d540e67d", "5ad8be531cf1de681a2230fe", "5ad8be535959c1369e16fcbb", "5ad8be5302c91306d2c22bef", "5ad8c702365f684c282ce8e5", "5ae397d9c50b93171009fba1", "5ae397d997fa880195fd0af5", "5ae397d90c0b955645aea5d4", "5ae9ff919565c81fc5f1e128", "5b030694b4f53b73213d0cb9", "5b0306a1b4f53b73213d0cbb", "5b1177fbe82d3c68f018aa7a", "5b11a3235e5c75013634c0fd", "5b15a71ead587a53326d2695", "5b15a72b2ad0424f7acca83c"], "bots": ["5ad8be5364c49734a637eebf"], "icalevents": ["5ae10353fc8d7e106e3c3c64"], "triggers": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7"], "scripts": ["5b19a154ccfc8f0095911f9b", "5b19a2a2f8ee85009524a76b"] },
            "createdAt": "2018-04-19T16:05:39.926Z",
            "updatedAt": "2018-06-11T20:27:35.862Z",
            "id": "5ad8be5364c49734a637eebe",
            "apiStatus": "development",
            "apiMessage": "",
            "entityType": "apps",
            "href": "https://antares-aptible.snapsmedia.io/api/apps/5ad8be5364c49734a637eebe",
            "edges": { "analyticspagetypes": { "edges": { "59c19f244ca8fc015b183338": { "relation": "object", "orderIndex": 0 }, "59c4335493bc3331e27ef401": { "relation": "object", "orderIndex": 1 } }, "maps": { "orderIndex": { "59c19f244ca8fc015b183338": 0, "59c4335493bc3331e27ef401": 1 }, "relation": { "59c19f244ca8fc015b183338": "object", "59c4335493bc3331e27ef401": "object" } }, "indexes": { "orderIndex": ["59c19f244ca8fc015b183338", "59c19f244ca8fc015b183338", "59c4335493bc3331e27ef401", "59c4335493bc3331e27ef401"], "relation": ["59c19f244ca8fc015b183338", "59c4335493bc3331e27ef401", "59c19f244ca8fc015b183338", "59c4335493bc3331e27ef401"] } }, "appvars": { "edges": {}, "maps": {}, "indexes": {} }, "icalevents": { "edges": { "5ae10353fc8d7e106e3c3c64": { "relation": "subject", "parentService": "icalevents", "parentId": "5ae10353fc8d7e106e3c3c64", "childService": "apps", "childId": "5ad8be5364c49734a637eebe", "orderIndex": 0 } }, "maps": { "relation": { "5ae10353fc8d7e106e3c3c64": "subject" }, "parentService": { "5ae10353fc8d7e106e3c3c64": "icalevents" }, "parentId": { "5ae10353fc8d7e106e3c3c64": "5ae10353fc8d7e106e3c3c64" }, "childService": { "5ae10353fc8d7e106e3c3c64": "apps" }, "childId": { "5ae10353fc8d7e106e3c3c64": "5ad8be5364c49734a637eebe" }, "orderIndex": { "5ae10353fc8d7e106e3c3c64": 0 } }, "indexes": { "relation": ["5ae10353fc8d7e106e3c3c64", "5ae10353fc8d7e106e3c3c64"], "parentService": ["5ae10353fc8d7e106e3c3c64", "5ae10353fc8d7e106e3c3c64"], "parentId": ["5ae10353fc8d7e106e3c3c64", "5ae10353fc8d7e106e3c3c64"], "childService": ["5ae10353fc8d7e106e3c3c64", "5ae10353fc8d7e106e3c3c64"], "childId": ["5ae10353fc8d7e106e3c3c64", "5ae10353fc8d7e106e3c3c64"], "orderIndex": ["5ae10353fc8d7e106e3c3c64", "5ae10353fc8d7e106e3c3c64"] } }, "triggers": { "edges": { "5b0ee6c88a8507f968b49323": { "relation": "subject", "parentService": "triggers", "parentId": "5b0ee6c88a8507f968b49323", "childService": "apps", "childId": "5ad8be5364c49734a637eebe", "orderIndex": 0 }, "5b11a345c6e1cd5fbf1ecaf9": { "relation": "object", "parentService": "triggers", "parentId": "5b11a345c6e1cd5fbf1ecaf9", "childService": "apps", "childId": "5ad8be5364c49734a637eebe", "orderIndex": 0 }, "5b11b7bf595651be2c9051d7": { "relation": "subject", "parentService": "triggers", "parentId": "5b11b7bf595651be2c9051d7", "childService": "apps", "childId": "5ad8be5364c49734a637eebe", "orderIndex": 0 }, "5b11c29e595651be2c9051e7": { "relation": "subject", "parentService": "triggers", "parentId": "5b11c29e595651be2c9051e7", "childService": "apps", "childId": "5ad8be5364c49734a637eebe", "orderIndex": 0 } }, "maps": { "relation": { "5b0ee6c88a8507f968b49323": "subject", "5b11a345c6e1cd5fbf1ecaf9": "object", "5b11b7bf595651be2c9051d7": "subject", "5b11c29e595651be2c9051e7": "subject" }, "parentService": { "5b0ee6c88a8507f968b49323": "triggers", "5b11a345c6e1cd5fbf1ecaf9": "triggers", "5b11b7bf595651be2c9051d7": "triggers", "5b11c29e595651be2c9051e7": "triggers" }, "parentId": { "5b0ee6c88a8507f968b49323": "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9": "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7": "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7": "5b11c29e595651be2c9051e7" }, "childService": { "5b0ee6c88a8507f968b49323": "apps", "5b11a345c6e1cd5fbf1ecaf9": "apps", "5b11b7bf595651be2c9051d7": "apps", "5b11c29e595651be2c9051e7": "apps" }, "childId": { "5b0ee6c88a8507f968b49323": "5ad8be5364c49734a637eebe", "5b11a345c6e1cd5fbf1ecaf9": "5ad8be5364c49734a637eebe", "5b11b7bf595651be2c9051d7": "5ad8be5364c49734a637eebe", "5b11c29e595651be2c9051e7": "5ad8be5364c49734a637eebe" }, "orderIndex": { "5b0ee6c88a8507f968b49323": 0, "5b11a345c6e1cd5fbf1ecaf9": 0, "5b11b7bf595651be2c9051d7": 0, "5b11c29e595651be2c9051e7": 0 } }, "indexes": { "relation": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7", "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11c29e595651be2c9051e7"], "parentService": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7", "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7"], "parentId": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7", "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7"], "childService": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7", "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7"], "childId": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7", "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7"], "orderIndex": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7", "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7"] } }, "scripts": { "edges": {}, "maps": {}, "indexes": {} }, "bots": { "edges": {}, "maps": {}, "indexes": {} } },
          }]
        },
        "rules": {
          "data": [{
            "action": "Entered",
            "operator": "",
            "value": "true",
            "time": "hasEver",
            "rlock": false,
            "rlockinfo": {},
            "resourceType": "funnels",
            "resourceName": "asdf",
            "resourceId": "asdf",
            "orgId": "5ad8bd24c571e541973cd927",
            "links": { "triggers": ["5b11c29e595651be2c9051e7"] },
            "createdAt": "2018-06-01T22:04:48.923Z",
            "updatedAt": "2018-06-11T20:27:35.856Z",
            "id": "5b11c29e595651be2c9051e8",
            "apiStatus": "200",
            "apiMessage": "OK",
            "entityType": "rules",
            "href": "https://antares-aptible.snapsmedia.io/api/rules/5b11c29e595651be2c9051e8",
            "edges": { "triggers": { "edges": { "5b11c29e595651be2c9051e7": { "relation": "subject", "parentService": "triggers", "parentId": "5b11c29e595651be2c9051e7", "childService": "rules", "childId": "5b11c29e595651be2c9051e8", "orderIndex": 0 } }, "maps": { "relation": { "5b11c29e595651be2c9051e7": "subject" }, "parentService": { "5b11c29e595651be2c9051e7": "triggers" }, "parentId": { "5b11c29e595651be2c9051e7": "5b11c29e595651be2c9051e7" }, "childService": { "5b11c29e595651be2c9051e7": "rules" }, "childId": { "5b11c29e595651be2c9051e7": "5b11c29e595651be2c9051e8" }, "orderIndex": { "5b11c29e595651be2c9051e7": 0 } }, "indexes": { "relation": ["5b11c29e595651be2c9051e7", "5b11c29e595651be2c9051e7"], "parentService": ["5b11c29e595651be2c9051e7", "5b11c29e595651be2c9051e7"], "parentId": ["5b11c29e595651be2c9051e7", "5b11c29e595651be2c9051e7"], "childService": ["5b11c29e595651be2c9051e7", "5b11c29e595651be2c9051e7"], "childId": ["5b11c29e595651be2c9051e7", "5b11c29e595651be2c9051e7"], "orderIndex": ["5b11c29e595651be2c9051e7", "5b11c29e595651be2c9051e7"] } } },
          }]
        },
        "rulesets": {
          "data": [{
            "ruleSetType": "any",
            "rlock": false,
            "rlockinfo": {},
            "name": "",
            "orgId": "5ad8bd24c571e541973cd927",
            "links": { "rulesets": ["5b1eac9e7157989575bd7cba"] },
            "createdAt": "2018-06-01T22:04:48.919Z",
            "updatedAt": "2018-06-11T20:27:35.857Z",
            "id": "5b11c29e595651be2c9051e9",
            "apiStatus": "200",
            "apiMessage": "OK",
            "entityType": "rulesets",
            "href": "https://antares-aptible.snapsmedia.io/api/rulesets/5b11c29e595651be2c9051e9",
            "edges": { "rulesets": { "edges": { "5b1eac9e7157989575bd7cba": { "parentService": "rulesets", "parentId": "5b11c29e595651be2c9051e9", "childService": "rulesets", "childId": "5b1eac9e7157989575bd7cba", "relation": "object", "orderIndex": 0 } }, "maps": { "parentService": { "5b1eac9e7157989575bd7cba": "rulesets" }, "parentId": { "5b1eac9e7157989575bd7cba": "5b11c29e595651be2c9051e9" }, "childService": { "5b1eac9e7157989575bd7cba": "rulesets" }, "childId": { "5b1eac9e7157989575bd7cba": "5b1eac9e7157989575bd7cba" }, "orderIndex": { "5b1eac9e7157989575bd7cba": 0 }, "relation": { "5b1eac9e7157989575bd7cba": "object" } }, "indexes": { "parentService": ["5b1eac9e7157989575bd7cba"], "parentId": ["5b1eac9e7157989575bd7cba"], "childService": ["5b1eac9e7157989575bd7cba"], "childId": ["5b1eac9e7157989575bd7cba"], "orderIndex": ["5b1eac9e7157989575bd7cba"], "relation": ["5b1eac9e7157989575bd7cba"] } } },
          }],
          "rules": { "data": [] },
          "rulesets": {
            "data": [{
              "ruleSetType": "any",
              "rlock": false,
              "rlockinfo": {},
              "name": "",
              "orgId": "5ad8bd24c571e541973cd927",
              "links": { "rules": ["5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf"], "rulesets": ["5b11c29e595651be2c9051e9"] },
              "createdAt": "2018-06-11T17:09:12.355Z",
              "updatedAt": "2018-06-11T20:27:35.885Z",
              "id": "5b1eac9e7157989575bd7cba",
              "apiStatus": "200",
              "apiMessage": "OK",
              "entityType": "rulesets",
              "href": "https://antares-aptible.snapsmedia.io/api/rulesets/5b1eac9e7157989575bd7cba",
              "edges": { "rules": { "edges": { "5b1eac9e7157989575bd7cbb": { "parentService": "rulesets", "parentId": "5b1eac9e7157989575bd7cba", "childService": "rules", "childId": "5b1eac9e7157989575bd7cbb", "relation": "subject", "orderIndex": 0 }, "5b1eb16e7157989575bd7cbf": { "parentService": "rulesets", "parentId": "5b1eac9e7157989575bd7cba", "childService": "rules", "childId": "5b1eb16e7157989575bd7cbf", "relation": "object", "orderIndex": 2 } }, "maps": { "parentService": { "5b1eac9e7157989575bd7cbb": "rulesets", "5b1eb16e7157989575bd7cbf": "rulesets" }, "parentId": { "5b1eac9e7157989575bd7cbb": "5b1eac9e7157989575bd7cba", "5b1eb16e7157989575bd7cbf": "5b1eac9e7157989575bd7cba" }, "childService": { "5b1eac9e7157989575bd7cbb": "rules", "5b1eb16e7157989575bd7cbf": "rules" }, "childId": { "5b1eac9e7157989575bd7cbb": "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf": "5b1eb16e7157989575bd7cbf" }, "orderIndex": { "5b1eac9e7157989575bd7cbb": 0, "5b1eb16e7157989575bd7cbf": 2 }, "relation": { "5b1eac9e7157989575bd7cbb": "subject", "5b1eb16e7157989575bd7cbf": "object" } }, "indexes": { "parentService": ["5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf", "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf"], "parentId": ["5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf", "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf"], "childService": ["5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf", "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf"], "childId": ["5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf", "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf"], "orderIndex": ["5b1eac9e7157989575bd7cbb", "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf", "5b1eb16e7157989575bd7cbf"], "relation": ["5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf", "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf"] } } },
            }],
            "rules": {
              "data": [{
                "action": "Entered",
                "operator": "",
                "value": "true",
                "time": "",
                "rlock": false,
                "rlockinfo": {},
                "resourceType": "funnels",
                "resourceName": "sdf",
                "resourceId": "sdf",
                "orgId": "5ad8bd24c571e541973cd927",
                "links": { "rulesets": ["5b1eac9e7157989575bd7cba"] },
                "createdAt": "2018-06-11T17:09:12.410Z",
                "updatedAt": "2018-06-11T20:27:35.944Z",
                "id": "5b1eac9e7157989575bd7cbb",
                "apiStatus": "200",
                "apiMessage": "OK",
                "entityType": "rules",
                "href": "https://antares-aptible.snapsmedia.io/api/rules/5b1eac9e7157989575bd7cbb",
                "edges": { "rulesets": { "edges": { "5b1eac9e7157989575bd7cba": { "relation": "object", "parentService": "rulesets", "parentId": "5b1eac9e7157989575bd7cba", "childService": "rules", "childId": "5b1eac9e7157989575bd7cbb", "orderIndex": 0 } }, "maps": { "relation": { "5b1eac9e7157989575bd7cba": "object" }, "parentService": { "5b1eac9e7157989575bd7cba": "rulesets" }, "parentId": { "5b1eac9e7157989575bd7cba": "5b1eac9e7157989575bd7cba" }, "childService": { "5b1eac9e7157989575bd7cba": "rules" }, "childId": { "5b1eac9e7157989575bd7cba": "5b1eac9e7157989575bd7cbb" }, "orderIndex": { "5b1eac9e7157989575bd7cba": 0 } }, "indexes": { "relation": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "parentService": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "parentId": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "childService": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "childId": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "orderIndex": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"] } } },
              }, {
                "action": "Entered",
                "operator": "",
                "value": "false",
                "time": "",
                "rlock": false,
                "rlockinfo": {},
                "resourceType": "funnels",
                "resourceName": "asdflkj",
                "resourceId": "asdflkj",
                "orgId": "5ad8bd24c571e541973cd927",
                "links": { "rulesets": ["5b1eac9e7157989575bd7cba"] },
                "createdAt": "2018-06-11T17:29:27.088Z",
                "updatedAt": "2018-06-11T20:27:35.950Z",
                "id": "5b1eb16e7157989575bd7cbf",
                "apiStatus": "200",
                "apiMessage": "OK",
                "entityType": "rules",
                "href": "https://antares-aptible.snapsmedia.io/api/rules/5b1eb16e7157989575bd7cbf",
                "edges": { "rulesets": { "edges": { "5b1eac9e7157989575bd7cba": { "relation": "subject", "parentService": "rulesets", "parentId": "5b1eac9e7157989575bd7cba", "childService": "rules", "childId": "5b1eb16e7157989575bd7cbf", "orderIndex": 2 } }, "maps": { "relation": { "5b1eac9e7157989575bd7cba": "subject" }, "parentService": { "5b1eac9e7157989575bd7cba": "rulesets" }, "parentId": { "5b1eac9e7157989575bd7cba": "5b1eac9e7157989575bd7cba" }, "childService": { "5b1eac9e7157989575bd7cba": "rules" }, "childId": { "5b1eac9e7157989575bd7cba": "5b1eb16e7157989575bd7cbf" }, "orderIndex": { "5b1eac9e7157989575bd7cba": 2 } }, "indexes": { "relation": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "parentService": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "parentId": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "childService": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "childId": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "orderIndex": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"] } } },
              }]
            }
          }
        }
      }
    },
    "structure": { "triggers": { "data": [], "apps": { "data": [] }, "rules": { "data": [] }, "rulesets": { "data": [], "rules": { "data": [] }, "rulesets": { "data": [], "rules": { "data": [] } } } } },
    "delinks": []
  },
  graphPostBodyAfterRuleUpdates: {
    "orgId": "5ad8bd24c571e541973cd927",
    "state": {
      "triggers": {
        "data": [{
          "pushStateId": "5ad8be5364c49734a637eec0",
          "secondsFromNow": 82800,
          "description": "",
          "frequency": "hours",
          "isRulesEng": true,
          "active": false,
          "production": false,
          "staging": false,
          "triggerSentence": " When users have   clicked link containing asdf",
          "triggerEvents": [],
          "name": "WHYY",
          "orgId": "5ad8bd24c571e541973cd927",
          "eventName": "funnelEntered",
          "performAction": "",
          "actionOptions": "",
          "meta": { "messaging_type": "MESSAGE_TAG", "standard_plusone": true, "standard_active": true, "tag": "REENGAGEMENT_TEST" },
          "links": { "rules": ["5b11c29e595651be2c9051e8"], "apps": ["5ad8be5364c49734a637eebe"], "rulesets": ["5b11c29e595651be2c9051e9"] },
          "createdAt": "2018-06-01T22:04:48.824Z",
          "updatedAt": "2018-06-13T19:48:36.688Z",
          "id": "5b11c29e595651be2c9051e7",
          "apiStatus": "200",
          "apiMessage": "OK",
          "entityType": "triggers",
          "href": "https://antares-aptible.snapsmedia.io/api/triggers/5b11c29e595651be2c9051e7",
          "edges": {
            "rules": {
              "edges": {
                "5b11c29e595651be2c9051e8": {
                  "parentService": "triggers",
                  "parentId": "5b11c29e595651be2c9051e7",
                  "childService": "rules",
                  "childId": "5b11c29e595651be2c9051e8",
                  "relation": "subject",
                  "orderIndex": 0
                }
              },
              "maps": { "parentService": { "5b11c29e595651be2c9051e8": "triggers" }, "parentId": { "5b11c29e595651be2c9051e8": "5b11c29e595651be2c9051e7" }, "childService": { "5b11c29e595651be2c9051e8": "rules" }, "childId": { "5b11c29e595651be2c9051e8": "5b11c29e595651be2c9051e8" }, "orderIndex": { "5b11c29e595651be2c9051e8": 0 }, "relation": { "5b11c29e595651be2c9051e8": "subject" } },
              "indexes": { "parentService": ["5b11c29e595651be2c9051e8", "5b11c29e595651be2c9051e8"], "parentId": ["5b11c29e595651be2c9051e8", "5b11c29e595651be2c9051e8"], "childService": ["5b11c29e595651be2c9051e8", "5b11c29e595651be2c9051e8"], "childId": ["5b11c29e595651be2c9051e8", "5b11c29e595651be2c9051e8"], "orderIndex": ["5b11c29e595651be2c9051e8", "5b11c29e595651be2c9051e8"], "relation": ["5b11c29e595651be2c9051e8", "5b11c29e595651be2c9051e8"] }
            },
            "apps": { "edges": { "5ad8be5364c49734a637eebe": { "parentService": "triggers", "parentId": "5b11c29e595651be2c9051e7", "childService": "apps", "childId": "5ad8be5364c49734a637eebe", "relation": "subject", "orderIndex": 0 } }, "maps": { "parentService": { "5ad8be5364c49734a637eebe": "triggers" }, "parentId": { "5ad8be5364c49734a637eebe": "5b11c29e595651be2c9051e7" }, "childService": { "5ad8be5364c49734a637eebe": "apps" }, "childId": { "5ad8be5364c49734a637eebe": "5ad8be5364c49734a637eebe" }, "orderIndex": { "5ad8be5364c49734a637eebe": 0 }, "relation": { "5ad8be5364c49734a637eebe": "subject" } }, "indexes": { "parentService": ["5ad8be5364c49734a637eebe", "5ad8be5364c49734a637eebe"], "parentId": ["5ad8be5364c49734a637eebe", "5ad8be5364c49734a637eebe"], "childService": ["5ad8be5364c49734a637eebe", "5ad8be5364c49734a637eebe"], "childId": ["5ad8be5364c49734a637eebe", "5ad8be5364c49734a637eebe"], "orderIndex": ["5ad8be5364c49734a637eebe", "5ad8be5364c49734a637eebe"], "relation": ["5ad8be5364c49734a637eebe", "5ad8be5364c49734a637eebe"] } },
            "rulesets": { "edges": { "5b11c29e595651be2c9051e9": { "parentService": "triggers", "parentId": "5b11c29e595651be2c9051e7", "childService": "rulesets", "childId": "5b11c29e595651be2c9051e9", "relation": "object", "orderIndex": 0 } }, "maps": { "parentService": { "5b11c29e595651be2c9051e9": "triggers" }, "parentId": { "5b11c29e595651be2c9051e9": "5b11c29e595651be2c9051e7" }, "childService": { "5b11c29e595651be2c9051e9": "rulesets" }, "childId": { "5b11c29e595651be2c9051e9": "5b11c29e595651be2c9051e9" }, "orderIndex": { "5b11c29e595651be2c9051e9": 0 }, "relation": { "5b11c29e595651be2c9051e9": "object" } }, "indexes": { "parentService": ["5b11c29e595651be2c9051e9"], "parentId": ["5b11c29e595651be2c9051e9"], "childService": ["5b11c29e595651be2c9051e9"], "childId": ["5b11c29e595651be2c9051e9"], "orderIndex": ["5b11c29e595651be2c9051e9"], "relation": ["5b11c29e595651be2c9051e9"] } }
          },
        }],
        "apps": {
          "data": [{
            "launchDate": "",
            "status": "development",
            "hiddenTemplate": false,
            "credentialsS3URI": "",
            "bundleId": "",
            "productId": "",
            "keyboardOptions": { "keyboardAndroidAppStoreLink": "", "keyboardAndroidShareText": "", "keyboardIOSAppStoreLink": "", "keyboardShareText": "" },
            "appConfig": {},
            "sessionTime": 300,
            "displayName": "Bees",
            "rlock": false,
            "rlockinfo": {},
            "showInAnalytics": 0,
            "mixpanel": false,
            "product": "bot",
            "name": "Bees",
            "platform": "fbmessenger",
            "orgId": "5ad8bd24c571e541973cd927",
            "links": { "analyticspagetypes": ["59c19f244ca8fc015b183338", "59c4335493bc3331e27ef401"], "appvars": ["5ad8be5302c91306d2c22bee", "5ad8be532007c157d540e67d", "5ad8be531cf1de681a2230fe", "5ad8be535959c1369e16fcbb", "5ad8be5302c91306d2c22bef", "5ad8c702365f684c282ce8e5", "5ae397d9c50b93171009fba1", "5ae397d997fa880195fd0af5", "5ae397d90c0b955645aea5d4", "5ae9ff919565c81fc5f1e128", "5b030694b4f53b73213d0cb9", "5b0306a1b4f53b73213d0cbb", "5b1177fbe82d3c68f018aa7a", "5b11a3235e5c75013634c0fd", "5b15a71ead587a53326d2695", "5b15a72b2ad0424f7acca83c"], "bots": ["5ad8be5364c49734a637eebf"], "icalevents": ["5ae10353fc8d7e106e3c3c64"], "triggers": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7"], "scripts": ["5b19a154ccfc8f0095911f9b", "5b19a2a2f8ee85009524a76b"] },
            "createdAt": "2018-04-19T16:05:39.926Z",
            "updatedAt": "2018-06-13T19:48:36.927Z",
            "id": "5ad8be5364c49734a637eebe",
            "apiStatus": "development",
            "apiMessage": "",
            "entityType": "apps",
            "href": "https://antares-aptible.snapsmedia.io/api/apps/5ad8be5364c49734a637eebe",
            "edges": { "analyticspagetypes": { "edges": { "59c19f244ca8fc015b183338": { "relation": "object", "orderIndex": 0 }, "59c4335493bc3331e27ef401": { "relation": "object", "orderIndex": 1 } }, "maps": { "orderIndex": { "59c19f244ca8fc015b183338": 0, "59c4335493bc3331e27ef401": 1 }, "relation": { "59c19f244ca8fc015b183338": "object", "59c4335493bc3331e27ef401": "object" } }, "indexes": { "orderIndex": ["59c19f244ca8fc015b183338", "59c19f244ca8fc015b183338", "59c4335493bc3331e27ef401", "59c4335493bc3331e27ef401"], "relation": ["59c19f244ca8fc015b183338", "59c4335493bc3331e27ef401", "59c19f244ca8fc015b183338", "59c4335493bc3331e27ef401"] } }, "appvars": { "edges": {}, "maps": {}, "indexes": {} }, "icalevents": { "edges": { "5ae10353fc8d7e106e3c3c64": { "relation": "subject", "parentService": "icalevents", "parentId": "5ae10353fc8d7e106e3c3c64", "childService": "apps", "childId": "5ad8be5364c49734a637eebe", "orderIndex": 0 } }, "maps": { "relation": { "5ae10353fc8d7e106e3c3c64": "subject" }, "parentService": { "5ae10353fc8d7e106e3c3c64": "icalevents" }, "parentId": { "5ae10353fc8d7e106e3c3c64": "5ae10353fc8d7e106e3c3c64" }, "childService": { "5ae10353fc8d7e106e3c3c64": "apps" }, "childId": { "5ae10353fc8d7e106e3c3c64": "5ad8be5364c49734a637eebe" }, "orderIndex": { "5ae10353fc8d7e106e3c3c64": 0 } }, "indexes": { "relation": ["5ae10353fc8d7e106e3c3c64", "5ae10353fc8d7e106e3c3c64"], "parentService": ["5ae10353fc8d7e106e3c3c64", "5ae10353fc8d7e106e3c3c64"], "parentId": ["5ae10353fc8d7e106e3c3c64", "5ae10353fc8d7e106e3c3c64"], "childService": ["5ae10353fc8d7e106e3c3c64", "5ae10353fc8d7e106e3c3c64"], "childId": ["5ae10353fc8d7e106e3c3c64", "5ae10353fc8d7e106e3c3c64"], "orderIndex": ["5ae10353fc8d7e106e3c3c64", "5ae10353fc8d7e106e3c3c64"] } }, "triggers": { "edges": { "5b0ee6c88a8507f968b49323": { "relation": "subject", "parentService": "triggers", "parentId": "5b0ee6c88a8507f968b49323", "childService": "apps", "childId": "5ad8be5364c49734a637eebe", "orderIndex": 0 }, "5b11a345c6e1cd5fbf1ecaf9": { "relation": "object", "parentService": "triggers", "parentId": "5b11a345c6e1cd5fbf1ecaf9", "childService": "apps", "childId": "5ad8be5364c49734a637eebe", "orderIndex": 0 }, "5b11b7bf595651be2c9051d7": { "relation": "subject", "parentService": "triggers", "parentId": "5b11b7bf595651be2c9051d7", "childService": "apps", "childId": "5ad8be5364c49734a637eebe", "orderIndex": 0 }, "5b11c29e595651be2c9051e7": { "relation": "subject", "parentService": "triggers", "parentId": "5b11c29e595651be2c9051e7", "childService": "apps", "childId": "5ad8be5364c49734a637eebe", "orderIndex": 0 } }, "maps": { "relation": { "5b0ee6c88a8507f968b49323": "subject", "5b11a345c6e1cd5fbf1ecaf9": "object", "5b11b7bf595651be2c9051d7": "subject", "5b11c29e595651be2c9051e7": "subject" }, "parentService": { "5b0ee6c88a8507f968b49323": "triggers", "5b11a345c6e1cd5fbf1ecaf9": "triggers", "5b11b7bf595651be2c9051d7": "triggers", "5b11c29e595651be2c9051e7": "triggers" }, "parentId": { "5b0ee6c88a8507f968b49323": "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9": "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7": "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7": "5b11c29e595651be2c9051e7" }, "childService": { "5b0ee6c88a8507f968b49323": "apps", "5b11a345c6e1cd5fbf1ecaf9": "apps", "5b11b7bf595651be2c9051d7": "apps", "5b11c29e595651be2c9051e7": "apps" }, "childId": { "5b0ee6c88a8507f968b49323": "5ad8be5364c49734a637eebe", "5b11a345c6e1cd5fbf1ecaf9": "5ad8be5364c49734a637eebe", "5b11b7bf595651be2c9051d7": "5ad8be5364c49734a637eebe", "5b11c29e595651be2c9051e7": "5ad8be5364c49734a637eebe" }, "orderIndex": { "5b0ee6c88a8507f968b49323": 0, "5b11a345c6e1cd5fbf1ecaf9": 0, "5b11b7bf595651be2c9051d7": 0, "5b11c29e595651be2c9051e7": 0 } }, "indexes": { "relation": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7", "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11c29e595651be2c9051e7"], "parentService": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7", "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7"], "parentId": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7", "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7"], "childService": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7", "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7"], "childId": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7", "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7"], "orderIndex": ["5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7", "5b0ee6c88a8507f968b49323", "5b11a345c6e1cd5fbf1ecaf9", "5b11b7bf595651be2c9051d7", "5b11c29e595651be2c9051e7"] } }, "scripts": { "edges": {}, "maps": {}, "indexes": {} }, "bots": { "edges": {}, "maps": {}, "indexes": {} } },
          }]
        },
        "rules": {
          "data": [{
            "action": "Entered",
            "operator": "",
            "value": "true",
            "time": "hasEver",
            "rlock": false,
            "rlockinfo": {},
            "resourceType": "funnels",
            "resourceName": "asdf",
            "resourceId": "asdf",
            "orgId": "5ad8bd24c571e541973cd927",
            "links": { "triggers": ["5b11c29e595651be2c9051e7"] },
            "createdAt": "2018-06-01T22:04:48.923Z",
            "updatedAt": "2018-06-13T19:48:36.933Z",
            "id": "5b11c29e595651be2c9051e8",
            "apiStatus": "200",
            "apiMessage": "OK",
            "entityType": "rules",
            "href": "https://antares-aptible.snapsmedia.io/api/rules/5b11c29e595651be2c9051e8",
            "edges": { "triggers": { "edges": { "5b11c29e595651be2c9051e7": { "relation": "object", "parentService": "triggers", "parentId": "5b11c29e595651be2c9051e7", "childService": "rules", "childId": "5b11c29e595651be2c9051e8", "orderIndex": 0 } }, "maps": { "relation": { "5b11c29e595651be2c9051e7": "object" }, "parentService": { "5b11c29e595651be2c9051e7": "triggers" }, "parentId": { "5b11c29e595651be2c9051e7": "5b11c29e595651be2c9051e7" }, "childService": { "5b11c29e595651be2c9051e7": "rules" }, "childId": { "5b11c29e595651be2c9051e7": "5b11c29e595651be2c9051e8" }, "orderIndex": { "5b11c29e595651be2c9051e7": 0 } }, "indexes": { "relation": ["5b11c29e595651be2c9051e7", "5b11c29e595651be2c9051e7"], "parentService": ["5b11c29e595651be2c9051e7", "5b11c29e595651be2c9051e7"], "parentId": ["5b11c29e595651be2c9051e7", "5b11c29e595651be2c9051e7"], "childService": ["5b11c29e595651be2c9051e7", "5b11c29e595651be2c9051e7"], "childId": ["5b11c29e595651be2c9051e7", "5b11c29e595651be2c9051e7"], "orderIndex": ["5b11c29e595651be2c9051e7", "5b11c29e595651be2c9051e7"] } } },
            "method": "PATCH"
          }]
        },
        "rulesets": {
          "data": [{
            "ruleSetType": "any",
            "rlock": false,
            "rlockinfo": {},
            "name": "",
            "orgId": "5ad8bd24c571e541973cd927",
            "links": { "rulesets": ["5b1eac9e7157989575bd7cba"] },
            "createdAt": "2018-06-01T22:04:48.919Z",
            "updatedAt": "2018-06-13T19:48:36.927Z",
            "id": "5b11c29e595651be2c9051e9",
            "apiStatus": "200",
            "apiMessage": "OK",
            "entityType": "rulesets",
            "href": "https://antares-aptible.snapsmedia.io/api/rulesets/5b11c29e595651be2c9051e9",
            "edges": { "rulesets": { "edges": { "5b1eac9e7157989575bd7cba": { "parentService": "rulesets", "parentId": "5b11c29e595651be2c9051e9", "childService": "rulesets", "childId": "5b1eac9e7157989575bd7cba", "relation": "object", "orderIndex": 0 } }, "maps": { "parentService": { "5b1eac9e7157989575bd7cba": "rulesets" }, "parentId": { "5b1eac9e7157989575bd7cba": "5b11c29e595651be2c9051e9" }, "childService": { "5b1eac9e7157989575bd7cba": "rulesets" }, "childId": { "5b1eac9e7157989575bd7cba": "5b1eac9e7157989575bd7cba" }, "orderIndex": { "5b1eac9e7157989575bd7cba": 0 }, "relation": { "5b1eac9e7157989575bd7cba": "object" } }, "indexes": { "parentService": ["5b1eac9e7157989575bd7cba"], "parentId": ["5b1eac9e7157989575bd7cba"], "childService": ["5b1eac9e7157989575bd7cba"], "childId": ["5b1eac9e7157989575bd7cba"], "orderIndex": ["5b1eac9e7157989575bd7cba"], "relation": ["5b1eac9e7157989575bd7cba"] } } },
            "method": "PATCH"
          }],
          "rules": { "data": [] },
          "rulesets": { "data": [{ "ruleSetType": "any", "rlock": false, "rlockinfo": {}, "name": "", "orgId": "5ad8bd24c571e541973cd927", "links": { "rules": ["5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf"], "rulesets": ["5b11c29e595651be2c9051e9"] }, "createdAt": "2018-06-11T17:09:12.355Z", "updatedAt": "2018-06-13T19:48:37.023Z", "id": "5b1eac9e7157989575bd7cba", "apiStatus": "200", "apiMessage": "OK", "entityType": "rulesets", "href": "https://antares-aptible.snapsmedia.io/api/rulesets/5b1eac9e7157989575bd7cba", "edges": { "rules": { "edges": { "5b1eac9e7157989575bd7cbb": { "parentService": "rulesets", "parentId": "5b1eac9e7157989575bd7cba", "childService": "rules", "childId": "5b1eac9e7157989575bd7cbb", "relation": "object", "orderIndex": 0 }, "5b1eb16e7157989575bd7cbf": { "parentService": "rulesets", "parentId": "5b1eac9e7157989575bd7cba", "childService": "rules", "childId": "5b1eb16e7157989575bd7cbf", "relation": "subject", "orderIndex": 2 } }, "maps": { "parentService": { "5b1eac9e7157989575bd7cbb": "rulesets", "5b1eb16e7157989575bd7cbf": "rulesets" }, "parentId": { "5b1eac9e7157989575bd7cbb": "5b1eac9e7157989575bd7cba", "5b1eb16e7157989575bd7cbf": "5b1eac9e7157989575bd7cba" }, "childService": { "5b1eac9e7157989575bd7cbb": "rules", "5b1eb16e7157989575bd7cbf": "rules" }, "childId": { "5b1eac9e7157989575bd7cbb": "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf": "5b1eb16e7157989575bd7cbf" }, "orderIndex": { "5b1eac9e7157989575bd7cbb": 0, "5b1eb16e7157989575bd7cbf": 2 }, "relation": { "5b1eac9e7157989575bd7cbb": "object", "5b1eb16e7157989575bd7cbf": "subject" } }, "indexes": { "parentService": ["5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf", "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf"], "parentId": ["5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf", "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf"], "childService": ["5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf", "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf"], "childId": ["5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf", "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf"], "orderIndex": ["5b1eac9e7157989575bd7cbb", "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf", "5b1eb16e7157989575bd7cbf"], "relation": ["5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf", "5b1eac9e7157989575bd7cbb", "5b1eb16e7157989575bd7cbf"] } } }, "method": "PATCH" }], "rules": { "data": [{ "action": "Entered", "operator": "", "value": "true", "time": "", "rlock": false, "rlockinfo": {}, "resourceType": "funnels", "resourceName": "change1", "resourceId": "change1", "orgId": "5ad8bd24c571e541973cd927", "links": { "rulesets": ["5b1eac9e7157989575bd7cba"] }, "createdAt": "2018-06-11T17:09:12.410Z", "updatedAt": "2018-06-13T19:48:37.059Z", "id": "5b1eac9e7157989575bd7cbb", "apiStatus": "200", "apiMessage": "OK", "entityType": "rules", "href": "https://antares-aptible.snapsmedia.io/api/rules/5b1eac9e7157989575bd7cbb", "edges": { "rulesets": { "edges": { "5b1eac9e7157989575bd7cba": { "relation": "subject", "parentService": "rulesets", "parentId": "5b1eac9e7157989575bd7cba", "childService": "rules", "childId": "5b1eac9e7157989575bd7cbb", "orderIndex": 0 } }, "maps": { "relation": { "5b1eac9e7157989575bd7cba": "subject" }, "parentService": { "5b1eac9e7157989575bd7cba": "rulesets" }, "parentId": { "5b1eac9e7157989575bd7cba": "5b1eac9e7157989575bd7cba" }, "childService": { "5b1eac9e7157989575bd7cba": "rules" }, "childId": { "5b1eac9e7157989575bd7cba": "5b1eac9e7157989575bd7cbb" }, "orderIndex": { "5b1eac9e7157989575bd7cba": 0 } }, "indexes": { "relation": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "parentService": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "parentId": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "childService": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "childId": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "orderIndex": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"] } } }, "method": "PATCH" }, { "action": "Entered", "operator": "", "value": "false", "time": "", "rlock": false, "rlockinfo": {}, "resourceType": "funnels", "resourceName": "change2", "resourceId": "change2", "orgId": "5ad8bd24c571e541973cd927", "links": { "rulesets": ["5b1eac9e7157989575bd7cba"] }, "createdAt": "2018-06-11T17:29:27.088Z", "updatedAt": "2018-06-13T19:48:37.072Z", "id": "5b1eb16e7157989575bd7cbf", "apiStatus": "200", "apiMessage": "OK", "entityType": "rules", "href": "https://antares-aptible.snapsmedia.io/api/rules/5b1eb16e7157989575bd7cbf", "edges": { "rulesets": { "edges": { "5b1eac9e7157989575bd7cba": { "relation": "object", "parentService": "rulesets", "parentId": "5b1eac9e7157989575bd7cba", "childService": "rules", "childId": "5b1eb16e7157989575bd7cbf", "orderIndex": 2 } }, "maps": { "relation": { "5b1eac9e7157989575bd7cba": "object" }, "parentService": { "5b1eac9e7157989575bd7cba": "rulesets" }, "parentId": { "5b1eac9e7157989575bd7cba": "5b1eac9e7157989575bd7cba" }, "childService": { "5b1eac9e7157989575bd7cba": "rules" }, "childId": { "5b1eac9e7157989575bd7cba": "5b1eb16e7157989575bd7cbf" }, "orderIndex": { "5b1eac9e7157989575bd7cba": 2 } }, "indexes": { "relation": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "parentService": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "parentId": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "childService": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "childId": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"], "orderIndex": ["5b1eac9e7157989575bd7cba", "5b1eac9e7157989575bd7cba"] } } }, "method": "PATCH" }] } }
        }
      }
    },
    "structure": { "triggers": { "data": [], "apps": { "data": [] }, "rules": { "data": [] }, "rulesets": { "data": [], "rules": { "data": [] }, "rulesets": { "data": [], "rules": { "data": [] } } } } },
    "delinks": []
  },
}

export const testGraphStateAfterDelink = {};
export const testGraphStateAfterAdd = {};

export const makeNode = (entity, service) => ({
  id: entity.id,
  data: entity,
  nodeType: service
});
export const getEdgeId = (a, b) => [a, b].sort().join('-');

export const addStandardEdgeData = (parentId, parentService, childId, childService, otherEdgeData) => {
  const standardEdges = {
    parentService,
    parentId,
    childService,
    childId
  };
  return Object.assign({}, standardEdges, otherEdgeData);
}

export const makeEdge = edge => {
  const origin = edge.parentId;
  const destin = edge.childId;

  return ({
    id: getEdgeId(origin, destin),
    data: edge,
    origin,
    destin,
  });
}

export const parseVSdata = structure => {
  const getServiceData = (service, layer = {}) => {
    const layerEntities = (layer.data || []).reduce((map, e) => {
      map[e.id] = makeNode(e, service);
      return map;
    }, {});

    const result = Object.assign({}, layerEntities, Object.keys(layer)
      .filter(cService => cService !== 'data')
      .reduce((map, s) => Object.assign(map, getServiceData(s, layer[s])), {})
    )

    return result;
  }

  // entity.edges[service].edge[id] <-- get every obj for every combo of service
  const getEdges = (entity, nodes) => {
    const services = Object.keys(entity.edges);
    const edgeData = services.reduce((dataArr, s) => {
      const ids = Object.keys(entity.edges[s].edges);
      return ids.map(id => entity.edges[s].edges[id]).concat(dataArr);
    }, []);
    return edgeData.map(makeEdge).reduce((map, e) => Object.assign(map, {
      [e.id]: e
    }), {});
  }

  const getStructureEdges = (service, layer, nodes) => {
    const layerEdges = (layer.data || []).reduce((map, entity) =>
      Object.assign(map, getEdges(entity, nodes)), {});

    return Object.assign({}, layerEdges, Object.keys(layer)
      .filter(service => service !== 'data')
      .reduce((map, s) => {
        map = Object.assign({}, getStructureEdges(s, layer[s], nodes));
        return map;
      }, {})
    )
  }

  const rootService = Object.keys(structure)[0];
  const rootLayer = structure[rootService];
  const rootId = rootLayer.data[0].id;

  const nodes = getServiceData(rootService, rootLayer);
  const edges = getStructureEdges(rootService, rootLayer, nodes);

  return { nodes, edges, rootId };
}

export const testEntities = [{
    id: nodeId[0],
    helloWorld: 'hello',
    service: 'banana'
  },
  {
    id: nodeId[1],
    helloWorld: 'asdfg',
    service: 'elephant'
  },
  {
    id: nodeId[2],
    anotherEntity: 'hello',
    service: 'ennui'
  }
]

export const expectNode = (entity, updateStatus) =>
  Object.assign({}, INIT_NODE, makeNode(entity, entity.service), {
    data: {
      entity: {},
      updateStatus
    }
  });
