
class search {
    constructor(query){this.query = query;this.bool =true; /**this.bool = this.loadClient()**/}
Onsearch(){
    if (this.bool){
        return this.searchQuery(this.query);}
    else{
        return false
    
    }
}
  loadClient() {
    gapi.client.setApiKey("AIzaSyDU5ZO9JRffbvI0K1ysljPwYECJs2awInA");
    this.response = gapi.client.load("https://content.googleapis.com/discovery/v1/apis/customsearch/v1/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { 
                  console.error("Error loading GAPI client for API", err); 
                  return false
                });
    gapi.load("client");
    return true
  }
  // Make sure the client is loaded before calling this method.
  execute(query) {
    return gapi.client.search.cse.list({
      "cx": "ed7e53bb2addc0bca",
      "q": query,
    //"num": 1,
      "access_token": "AIzaSyDU5ZO9JRffbvI0K1ysljPwYECJs2awInA",
      "callback": "hndlr"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
                return response
              },
              function(err) { console.error("Execute error", err); });
  }
searchQuery(q){
  var searchURL = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDU5ZO9JRffbvI0K1ysljPwYECJs2awInA&cx=ed7e53bb2addc0bca&q="+q;
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", searchURL, false);
  xmlHttp.send(null);
  console.log(xmlHttp.responseText);
  //const json = JSON.parse(xmlHttp.responseText)
  return xmlHttp.responseText;
}
}