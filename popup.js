window.onload = function(){
  var selectBox = {};

  var category_json = new XMLHttpRequest();
  category_json.open("get", "http://localhost:3000/ja/api/categories", true);
  category_json.onload = function(){
    var json = JSON.parse(this.responseText);
    for (var i=0; i<json.length; i++){
      selectBox[json[i]['id']] = json[i]['name_ja']
    }
  }
  category_json.send(null);

  console.log(selectBox);

  var select = document.getElementById('category_id');
  for ( var i in selectBox ) {
      var option = document.createElement('option');
      option.setAttribute('value', i);
      option.innerHTML = selectBox[i];
      select.appendChild(option);
  }

  var bk = chrome.extension.getBackgroundPage();
  document.getElementById('asin').value = bk.params['asin'];
  document.getElementById('title').value = bk.params['title'];
  document.getElementById('weight').value = bk.params['weight'];
  document.getElementById('description').value = bk.params['description'];
}

window.addEventListener("load", function () {
  function sendData() {
    var XHR = new XMLHttpRequest();
    var FD  = new FormData(form);

    XHR.addEventListener("load", function(event) {
      console.log(event.target.responseText);
    });
    XHR.addEventListener("error", function(event) {
      console.log('Oups! Something goes wrong.');
    });
    XHR.open("POST", "http://localhost:3000/ja/api/sample/putsform.json");
    XHR.setRequestHeader('ACCESS_TOKEN', '003e7958e5da76c4c8b66b90aaf27d9f');
    XHR.send(FD);
  }

  var form = document.getElementById("add_okcamp_form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData();
  });
});
