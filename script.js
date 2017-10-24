get_asin = document.getElementById("ASIN").value;

chrome.runtime.sendMessage({asin: get_asin}, function(response){
  console.log(response.farewell);
});
