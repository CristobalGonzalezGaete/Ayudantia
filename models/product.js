const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100
    },
    price:{
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 250
    }
    //categories: {
      //  type: [Schema.ObjectId],
        //ref: 'Category',
    //},
})

module.exports = mongoose.model('Product', productSchema);