const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/app1'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './dist/app1/index.html'));
})

app.listen(process.env.PORT || 3000, onStartServer);

function onStartServer() {
  console.log('listening');
}