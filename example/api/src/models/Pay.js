var mongoose = require('mongoose');
var Schema = mongoose.Schema;
////////////////////////////////// Default de Toda Model


/// Declara Schema da Model
var PaySchema = new Schema({    
    merchant_account: String,
    merchant_name: String,
    merchant_city: String,
    transaction_amount: Number,
    info_adic: String
});

/// Seta a Model no Mongoose
var Pay = mongoose.model('Pay', PaySchema);

/// Exporta a Model
module.exports = Pay;
