/*@vahidzahani*/

const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');
app.use(express.static(path.resolve('./public')));

app.get('/', (req, res) => {
  const publicDir = path.resolve('./public');
  fs.readdir(publicDir, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
		const fileListWithIp = files.map(file => `http://127.0.0.1:3000/${file}`).join('<br>');
		res.send(fileListWithIp);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});