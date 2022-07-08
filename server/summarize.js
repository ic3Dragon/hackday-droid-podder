const fetch = require('node-fetch');
const FormData = require('form-data');
require('dotenv').config();

const apiKey = process.env.CLOUD_KEY;

const summarize = async myText => {
  const formdata = new FormData();
  formdata.append('key', apiKey);
  formdata.append('txt', myText);
  formdata.append('limit', 50);

  const requestOptions = {
    method: 'POST',
    body: formdata,
  };

  const response = await fetch('https://api.meaningcloud.com/summarization-1.0', requestOptions)
    .then(res => res.json())
    .catch(error => console.log('error', error));

  const data = await response;

  return data;
};
module.exports = summarize;
