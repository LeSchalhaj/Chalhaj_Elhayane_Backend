let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let MatierSchema = Schema({
    id: Number,
   
    label:String
   
});


// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('matieres', MatierSchema);
