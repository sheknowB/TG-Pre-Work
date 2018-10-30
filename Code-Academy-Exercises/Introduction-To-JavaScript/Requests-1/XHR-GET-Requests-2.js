const xhr = new XMLHttpRequest ();
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
};

xhr.open ('GET', url); // creates a new request, GET type and URL of the request
xhr.send ();

// In the above exercise we've written the boilerplate code for an AJAX GET request using an XMLHttpRequest object.
