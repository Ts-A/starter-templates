const mongoose = require('mongoose');

const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, {}).then(console.log).catch(console.log);

mongoose.connection.on('connected', () => {
  console.log('Mongoose is running');
});

mongoose.connection.on('error', () => {
  console.log('Error occurred');
});
