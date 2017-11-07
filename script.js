chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		getAmazonItemData();
	}
});

function getAmazonItemData(){
  current_asin = location.href.match(/\/dp\/(.*?)\//)[1];
  current_title = document.getElementById('productTitle').innerText;
  current_head_title = document.title;

  if (document.getElementsByClassName('shipping-weight')) {
    current_weight = document.getElementsByClassName('shipping-weight')[0].children[1].innerHTML;
  } else {
    current_weight = null;
  }

  if (document.getElementById('variation_color_name')) {
    current_color = document.getElementById('variation_color_name').querySelector(".selection").innerText;
  } else {
    current_color = null;
  }

  if (document.getElementById('variation_style_name')) {
    current_style = document.getElementById('variation_style_name').querySelector(".selection").innerText;
  } else {
    current_style = null;
  }

  if (document.getElementById('productDescription')) {
    current_description = document.getElementById('productDescription').children[0].innerHTML;
  } else {
    current_description = null;
  }

  send_data = {
      'asin': current_asin,
      'title': current_title,
      'head_title': current_head_title,
      'weight': current_weight,
      'current_color': current_color,
      'current_style': current_style,
      'description': current_description,
    }

  chrome.runtime.sendMessage(send_data, function(response){
    console.log(send_data);
  });
}
