// Information to reach API
const apiKey = '6482f11c4d7447198e049ee63c13b07d';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  fetch(url,{
    method: 'POST',
    headers: { 'Content-type': 'application/json', 'apikey': apiKey},
    body: data
  });
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

//  Manipulate the boiler code to allow us to shorten a url using the Rebrandly URL Shorterner API.
