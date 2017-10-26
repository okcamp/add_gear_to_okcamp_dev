chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.sendMessage(tab.id, "Action");
});

var params = {};
var categories = {};
var makers = {};

// まずaccess_tokenがactiveなのかどうかを検証する

// access_tokenが無効だった場合はログインをさせる

// 実際のpopup.htmlに値を渡す
var category_json = new XMLHttpRequest();
category_json.open("get", "http://www.okcamp.me/ja/api/categories", true);
category_json.onload = function(){
  console.log(this.responseText);
  var json = JSON.parse(this.responseText);
  for (var i=0; i<json.length; i++){
    categories[json[i]['id']] = json[i]['name_ja']
  }
}
category_json.send(null);

var maker_json = new XMLHttpRequest();
maker_json.open("get", "http://www.okcamp.me/ja/api/makers", true);
maker_json.onload = function(){
  console.log(this.responseText);
  var json = JSON.parse(this.responseText);
  for (var i=0; i<json.length; i++){
    makers[json[i]['id']] = json[i]['name_ja']
  }
}
maker_json.send(null);

// ここでメーカーとカテゴリーを正確じゃないにしても把握できるのか？

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    params['asin'] = request.asin;
    params['title'] = request.title;
    params['weight'] = request.weight;
    params['description'] = request.description;
    chrome.tabs.create({"url": "popup.html" });
  }
);
