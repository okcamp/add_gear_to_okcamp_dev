var params = {};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    params['asin'] = request.asin;
    params['title'] = request.title;
    params['weight'] = request.weight;
    params['description'] = request.description;
  }
);
