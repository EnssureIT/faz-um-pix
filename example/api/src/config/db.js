var mongoose = require('mongoose');
var dotenv = require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
useUnifiedTopology: true,
useNewUrlParser: true,})
.then(() => console.log('Pica two Fly'))
.catch(err => {
console.log(Error, err.message);
});
////////////////////////Não alterar//////////////////////////


////// Declara as Models
const Pay = require('../models/Pay')

///// Exporta as Models
module.exports = { Pay };

