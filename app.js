const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('welcome to home page');
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log('working');
});
