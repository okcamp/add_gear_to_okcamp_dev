window.onload = function(){
  var bk = chrome.extension.getBackgroundPage();

  var categorySelect = document.getElementById('category_id');
  console.log(bk.categories);
  for ( var i in bk.categories) {
      var option = document.createElement('option');
      option.setAttribute('value', i);
      option.innerHTML = bk.categories[i];
      categorySelect.appendChild(option);
  }

  var makerSelect = document.getElementById('maker_id');
  console.log(bk.makers);
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
    XHR.open("POST", "http://localhost:3000/ja/api/gear");
    XHR.setRequestHeader('ACCESS_TOKEN', '003e7958e5da76c4c8b66b90aaf27d9f');
    XHR.send(FD);
  }

  var form = document.getElementById("add_okcamp_form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData();
  });
});
