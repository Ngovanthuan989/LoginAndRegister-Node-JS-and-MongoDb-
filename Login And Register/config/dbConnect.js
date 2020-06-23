const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testDB', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('Connect to the db')
});
module.exports = mongoose;