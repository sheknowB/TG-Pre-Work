const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

//	JSON.stringify() will convert a value to a JSON string
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response
  }
};
xhr.open('POST', url);
xhr.send(data);

//  In this exercise we wrote the boilerplate code for an AJAX POST request using XLMHttpRequest object.
