const { Schema, SchemaTypes, model } = require('mongoose');
const myAd = new Schema({
    Name: {
        type: SchemaTypes.String,
        require: true
    },
    Image: {
        type: SchemaTypes.String,
        require: true
    },
    Description: {
        type: SchemaTypes.String,
        require: true
    }
})
const MyAd =new model("MyAd",myAd);
module.exports = MyAd