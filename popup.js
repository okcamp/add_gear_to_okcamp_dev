window.onload = function(){
  var bk = chrome.extension.getBackgroundPage();

  var categorySelect = document.getElementById('category_id');
  for ( var i in bk.categories) {
    var option = document.createElement('option');
    option.setAttribute('value', i);
    option.innerHTML = bk.categories[i];
    categorySelect.appendChild(option);
  }

  var makerSelect = document.getElementById('maker_id');
  for ( var i in bk.makers) {
    var option = document.createElement('option');
    option.setAttribute('value', i);
    option.innerHTML = bk.makers[i];
    makerSelect.appendChild(option);
  }

  document.getElementById('asin_ja').value = bk.params['asin'];
  document.getElementById('title_ja').value = bk.params['title'];
  document.getElementById('weight').value = bk.params['weight'];
  document.getElementById('description_ja').value = bk.params['description'];

  document.getElementById("category_id").selectedIndex = localStorage.selectedCategory - 1;
  document.getElementById("maker_id").selectedIndex = localStorage.selectedMaker - 1;
}

window.addEventListener("load", function () {
  function sendData() {
    var XHR = new XMLHttpRequest();
    var FD  = new FormData(form);

    XHR.addEventListener("progress", function(event) {
      document.getElementById('submit_button').value = '送信中';
    });
    XHR.addEventListener("load", function(event) {
      console.log(event.target.responseText);
      document.getElementById('submit_button').value = '登録しました';
    });
    XHR.addEventListener("error", function(event) {
      alert('Error!');
      // rollbarとかで検知させられないかね
    });
    // ↓これ、この順番じゃないとダメなので注意
    XHR.open("POST", "http://localhost:3000/ja/api/gear");
    XHR.setRequestHeader('ACCESS_TOKEN', '3b9fdc4a783ddb29a20ca89658ff0a9b');
    XHR.send(FD);
  }

  var form = document.getElementById("add_okcamp_form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    localStorage.selectedCategory = document.getElementById("category_id").value
    localStorage.selectedMaker = document.getElementById("maker_id").value
    sendData();
  });
});
