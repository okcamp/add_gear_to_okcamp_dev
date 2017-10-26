chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		getAmazonItemData();
	}
});

function getAmazonItemData(){
  get_asin = location.href.match(/\/dp\/(.*?)\//)[1];
  get_title = document.getElementById('productTitle').innerText;

  if (document.getElementsByClassName('shipping-weight')) {
    get_weight = document.getElementsByClassName('shipping-weight')[0].children[1].innerHTML;
  } else {
    get_weight = null;
  }

  if (document.getElementById('productDescription')) {
    get_description = document.getElementById('productDescription').children[0].innerHTML;
  } else {
    get_description = null;
  }
  chrome.runtime.sendMessage({
      'asin': get_asin,
      'title': get_title,
      'weight': get_weight,
      'description': get_description
    }, function(response){
    console.log(get_asin, get_title, get_weight, get_description);
  });
}
