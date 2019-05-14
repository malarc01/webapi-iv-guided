const envReader = require('dotenv');
envReader.config(); //reads .env & mergies it into process.env
// require('dotenv').config(); // same result different way

const server = require('./api/server.js');

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
