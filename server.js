/* eslint-disable no-console */
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');
const dbConfig = require('./config/database');

mongoose.connect(dbConfig.mongoURI, dbConfig.options).then(con => {
  console.log(con.connections);
  console.log('DB connection success');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

console.log(process.argv);
