let WebLinkLinkObj = window.location;

// console.log(WebLinkLinkObj);
console.log("Atcoder Site: Extension on Work");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {

      var contestLink = WebLinkLinkObj.pathname.toString();
      var contest = contestLink.substring(10,16);
      var link = "https://img.atcoder.jp/"+ contest + "/editorial.pdf"   

      // alert(link);

      
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": link});
    }
  }
);
