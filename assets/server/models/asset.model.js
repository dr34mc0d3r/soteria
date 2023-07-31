const mongoose = require('mongoose');
const assetSchema =  new mongoose.Schema({
  item_id: Number,
  assignedTo: String,
  Condition: String,
  PurchaseDate: Date,
  DesolveDate: Date,
  SerialNumber: String,
  Details: String,
  ExpireDate: Date,
}{ timestamps: true });
const Asset = mongoose.model("Asset", assetSchema);
module.exports = Asset;