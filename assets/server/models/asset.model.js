const mongoose = require('mongoose');
const assetSchema =  new mongoose.Schema({
  User_id: String,
  Cat_id: Number,
  AssignedTo: String,
  Condition: String,
  PurchaseDate: Date,
  DesolveDate: Date,
  SerialNumber: String,
  Details: String,
  ExpireDate: Date,
  UploadedFile: String,
},{ timestamps: true });
const Asset = mongoose.model("Asset", assetSchema);
module.exports = Asset;