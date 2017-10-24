chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    console.log(request);
    console.log(sender);
    console.log(sendResponse);

    var res = "Hello world";
    sendResponse({farewell: res});
  }
);
