const { Schema, model } = require('mongoose');

const PatientSchema = new Schema({
  patient1: {
    type: String,
    id:1 ,
  },

  Medication:[]
});

const Perscription = model('Perscription', PerscriptionSchema);

module.exports = Perscription;
