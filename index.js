export default {
    async fetch(request) {
      let url = new URL(request.url);
      url.hostname = "ankitsingh90.pythonanywhere.com"; // Change to your target domain
      
      let modifiedRequest = new Request(url, request);
      return fetch(modifiedRequest);
    }
  }
  