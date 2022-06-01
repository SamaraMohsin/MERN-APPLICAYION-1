const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  firstname: {
    type: String,
    // required: true,
  },
  lastname: {
    type: String,
    // required: true,
  },
  gender: {
    type: String,
    // required: true,
  },
  dob: {
    type: Date,
    //required: true,
  },
  treatmentName: {
    type: String,
    //required: true,
  },
  treatmentType: {
    type: String,
    //required: true,
  },
  startDate: {
    type: Date,
    //required: true,
  },
  endDate: {
    type: Date,
    //required: true,
  },
  method: {
    type: String,
    //required: true,
  },
  reasonForTaking: {
    type: String,
    //required: true,
  },
  feedback: {
    type: String,
    //required: true,
  },
  itreatmentRecommendation: {
    type: String,
  },
  heardAboutUs: {
    type: String,
    //required: true,
  },
  toldAboutSideEffects: {
    type: String,
    //required: true,
  },
});

//model func takes 2 things, 1ts:name of collection(jo compass me create kia tha table users k naam se) then schema that represents that model
const FormModel = mongoose.model("forms", FormSchema);
module.exports = FormModel;
