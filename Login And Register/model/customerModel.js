var mongoose = require('../config/dbConnect');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
    fullname: String,
    address: String,
    age: Number,
    email: String,
    password: String,

}, {
    collection: 'customer'
})

var CustomerModel = mongoose.model('customer', CustomerSchema);

module.exports = CustomerModel;