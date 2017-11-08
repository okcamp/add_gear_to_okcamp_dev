// TODO ログインまわりの処理を追加する
// localStorageにaccess_tokenが無かったらログイン画面をpopup
// もしあったならaccess_tokenがactiveなのかどうかを検証する
// access_tokenが無効(期限切れ)だった場合は再度ログインをする

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.sendMessage(tab.id, "Action");
});

var params = {};
var categories = {};
var makers = {};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){

    name_arr = [request.title, request.current_color, request.current_style]
    mixed_title = name_arr.filter(function(e){return e}).join(' ')

    var XHR = new XMLHttpRequest();

    XHR.addEventListener("progress", function(event) {
      console.log('Submit data')
    });
    XHR.addEventListener("load", function(event) {
      alert(event.target.responseText);
    });
    XHR.addEventListener("error", function(event) {
      alert(event.target.responseText);
      // rollbarとかで検知させられないかね
    });
    // ↓これ、この順番じゃないとダメなので注意
    XHR.open("POST", "http://localhost:3000/ja/api/gear");
    XHR.setRequestHeader('ACCESS_TOKEN', '3a956a05a4f25ae777e9fd45226f0b86');
    XHR.setRequestHeader("Content-Type", "application/json")
    XHR.send(JSON.stringify({
      'asin_ja': request.asin,
      'title_ja': mixed_title,
      'weight': request.weight
    }))
  }
);
