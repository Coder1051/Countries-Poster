const { Schema,SchemaTypes, model } = require('mongoose');
const userSchema = new Schema({
    name: {
        type: SchemaTypes.String,
        required: true
    },
    email: {
        type: SchemaTypes.String,
        required: true
    },
    dob: {
        type: SchemaTypes.Date,
        required: true
    },
    password: {
        type: SchemaTypes.String,
        required: true
    },
    contact: {
        type: SchemaTypes.Number,
        required: true
    }
})
const User = new model(("User"), userSchema)
module.exports = User