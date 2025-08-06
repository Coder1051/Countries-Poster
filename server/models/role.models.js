const {mongoose, SchemaTypes } = require("mongoose")

const roleSchema = new mongoose.Schema({
    Name:{
        type: SchemaTypes.String,
        require:true
    },
    Rank: {
        type: SchemaTypes.Number,
        require: true,
        default:1
    }    
    
})

const Role = mongoose.model("Role",roleSchema)

module.exports = Role;