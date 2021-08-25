// I think this is establishing the PatientDB.  Maybe.
const { Schema, model } = require('mongoose');

const PatientSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  medications :[

  ]

  
});

const Patient = model('Patient', PatientSchema);

module.exports = Patient;


// "_id" : ObjectId("61258fa2e481224c90fd83bf"),
// "name" : "PatientA",
// "medications" : [
//     {
//     "drugB": {
//         "dosage":30,
//         "description":"String!",
//             "reason":"String!",
//         }
//     },
//     {
//         "drugC":{
//             "dosage": 50,
//             "description":"String!",
//             "reason":"String!",
//             }
//     }
//  ]
// }