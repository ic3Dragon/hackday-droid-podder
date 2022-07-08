const fetch = require('node-fetch');
require('dotenv').config();
const fs = require('fs');

const myApiKey = process.env.LOVO_API_KEY;
const url = 'https://api.lovo.ai/v1/conversion';

const verbalize = async text => {
  try {
    fs.unlinkSync('./public/voiced.mp3');
  } catch (err) {
    console.log(err.message);
  }
  const data = {
    text,
    speaker_id: 'Bill Bosma',
    emphasis: '[0, 5]',
    speed: 1,
    pause: 1,
    encoding: 'mp3',
  };
  const option = {
    method: 'POST',
    headers: {
      apiKey: myApiKey,
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(data),
  };

  await fetch(url, option)
    .then(res => {
      if (res.status !== 200) {
        return new Error('failed to convert');
      }
      return res.arrayBuffer();
    })
    .then(buffer => {
      fs.appendFileSync('./public/voiced.mp3', Buffer.from(buffer));
      return true;
    }).catch(error => {
      console.log(error.message);
      return false;
    });
};

module.exports = verbalize;
