const mongoose = require('mongoose');
const config = require('./config');
const con = mongoose.connection;
const { host, port, db } = config;
con.on('error', (err) => {
  console.log('some error occured');
   console.log(err);
});
con.on('connect', (data) => {
  console.log('success');
  console.log(data);
})
const conn = mongoose.connect(`mongodb://${host}:${port}/${db}`);
console.log('success');
console.log(conn);
