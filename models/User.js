const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type:String, required:true, unique:true},
    nickname: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    links: [{ type: Types.ObjectId}]
})

module.exports= model('User', schema)