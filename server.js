const express = require('express');
const path = require('path');

const { PORT, NODE_ENV, DIST_DIR } = require('./constants');

const app = express();
const STATIC = path.resolve(__dirname, DIST_DIR);
const INDEX = path.resolve(STATIC, 'index.html');

app.use(express.static(STATIC));
app.get('*', (req, res) => {
  res.sendFile(INDEX);
});

app.listen(PORT, () => {
  /* eslint-disable */
  console.log(`App listening on port ${PORT}! Path: ${STATIC}. node_env: ${NODE_ENV}`);
});
