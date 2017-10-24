window.onload = function(){
  var bk = chrome.extension.getBackgroundPage();
  document.getElementById('asin').value = bk.params['asin'];
  document.getElementById('title').value = bk.params['title'];
  document.getElementById('weight').value = bk.params['weight'];
  document.getElementById('description').value = bk.params['description'];
}
