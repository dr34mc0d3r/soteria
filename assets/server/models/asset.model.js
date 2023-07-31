const mongoose = require('mongoose');
const assetSchema =  new mongoose.Schema({
  username: String,
  password: {
    type: String,
    required: true,
    unique: true,
  },
});
const Asset = mongoose.model("Asset", assetSchema);
module.exports = Asset;