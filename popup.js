window.onload = function(){
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

    XHR.setRequestHeader('ACCESS_TOKEN', '');

    XHR.send(FD);
  }

  var form = document.getElementById("add_okcamp_form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData();
  });
});
