//  Add your code here
//  Add your code here
const { Schema, model } = require('mongoose')

const celebSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
})

const Celebmodel = model('celebrities', celebSchema)

module.exports = Celebmodel