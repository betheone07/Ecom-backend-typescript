import * as mongoose from 'mongoose';

const Schema = mongoose.Schema

export const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  plan: {
    type: Object,
    required: true
  },
  fileUploaded: {
    type: String,
    required: true
  },
  nationalId: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  contact: {
    type: Number,
    required: true
  },
  regAddress: {
    type: Object,
    required: true
  },
  taxOption: {
    type: String,
    required: true
  }
});