if(localStorage.okcampAccessToken = ''){
  var XHR = new XMLHttpRequest();
  XHR.addEventListener("load", function(event) {
    chrome.runtime.sendMessage(function(tab){
    	chrome.tabs.sendMessage(tab.id, "comp");
    });
    return true
  });
  XHR.addEventListener("error", function(event) {
    sendResponse(event.target.responseText);
    return true
  });
  XHR.open("POST", "https://okcamp.me/api/user_sessions");
  XHR.send({
    // username, userpassword
  })
}
alert(localStorage.foobar)

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, "Action");
});

var params = {};
var categories = {};
var makers = {};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  name_arr = [request.title, request.current_color, request.current_style]
  mixed_title = name_arr.filter(function(e){return e}).join(' ')

  var XHR = new XMLHttpRequest();
  XHR.addEventListener("load", function(event) {
    chrome.runtime.sendMessage(function(tab){
    	chrome.tabs.sendMessage(tab.id, "comp");
    });
    return true
  });
  XHR.addEventListener("error", function(event) {
    sendResponse(event.target.responseText);
    return true
    // rollbarとかで検知させられないかね
  });
  // ↓これ、この順番じゃないとダメなので注意
  XHR.open("POST", "https://okcamp.me/ja/api/gear");
  XHR.setRequestHeader('ACCESS_TOKEN', 'YOUR_ACCESS_TOKEN');
  XHR.setRequestHeader("Content-Type", "application/json")
  XHR.send(JSON.stringify({
    'asin_ja': request.asin,
    'title_ja': mixed_title,
    'weight': request.weight
  }))
});
