const { Schema, model } = require('mongoose');

const MedicationSchema = new Schema({
    name: {
        type: String,

    },
    brandName: {
        type: String
    },
    drugType: {
        type: String
    },
    datePerscribed: {
        type: Date
    }


});

const Medication = model('Medication', MedicationSchema);

module.exports = Medication;
