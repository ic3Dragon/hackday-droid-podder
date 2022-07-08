const express = require('express');
const cors = require('cors');
const summarize = require('./summarize');

const port = 8080;
const app = express();
const whitelist = ['http://localhost:3000'];

const corsOptions = {
  origin(origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (_, res) => {
  res.json({ msg: 'Hello World!' });
});

app.post('/summary', async (req, res) => {
  console.log('post summary');
  const result = await summarize(req.body.text);
  if (result.status.msg !== 'OK') {
    return res.send('something went wrong');
  }
  return res.json(result.summary);
});

app.post('/soundbox', async (req, res) => {
  console.log('post soundbox');
  await setTimeout(() => {
    res.sendFile('./public/voiced.mp3', { root: __dirname });
  }, 500);
  // uncomment bellow to go live again!

  // const result = await verbalize(req.body.text);
  // if (result === false) {
  //   res.send('something went wrong');
  // } else {
  // res.sendFile('./public/voiced.mp3', { root: __dirname });
  // }
  // res.end();
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
