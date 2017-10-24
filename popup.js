window.onload = function(){
  var bk = chrome.extension.getBackgroundPage();
  document.getElementById('asin').innerHTML = bk.params['asin'];
  document.getElementById('title').innerHTML = bk.params['title'];
  document.getElementById('weight').innerHTML = bk.params['weight'];
  document.getElementById('description').innerHTML = bk.params['description'];
}
