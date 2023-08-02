const Asset = require('../models/asset.model');
// const bcrypt = require('bcrypt');
// const { generateToken } = require('../middleware/auth');




// cat_id: Number,
// assignedTo: String,
// Condition: String,
// PurchaseDate: Date,
// DesolveDate: Date,
// SerialNumber: String,
// Details: String,
// ExpireDate: Date,


exports.createAsset = async (req, res) => {
  const { cat_id, assignedTo, Condition, PurchaseDate, DesolveDate, SerialNumber, Details, ExpireDate } = req.body;
  // console.log("req.body: ", req.body);

  try {
    const asset = {
      cat_id: cat_id,
        assignedTo: assignedTo,
        Condition: Condition,
        PurchaseDate: PurchaseDate,
        DesolveDate: DesolveDate,
        SerialNumber: SerialNumber,
        Details: Details,
        ExpireDate: ExpireDate
      };

    Asset.create(asset).then(result => {
        res.status(201).json({
          message: "Asset created successfully",
        });
      }).catch(error => {
        res.status(500).json({
          message: "Something went wrong!",
        });
      });

  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'An error occurred!! ' });
  }
};


exports.updateAssetByID = async (req, res) => {
  console.log('------------REQUESTED ID: ', req.params.id);
  const id = req.params.id;

  Asset.findByPk(id).then(result => {
    if (result) {
      const asset = {
        cat_id: result.cat_id,
        assignedTo: result.assignedTo,
        Condition: result.Condition,
        PurchaseDate: result.PurchaseDate,
        DesolveDate: result.DesolveDate,
        SerialNumber: result.SerialNumber,
        Details: result.Details,
        ExpireDate: result.ExpireDate
      };
      c
      console.log('------------asset: ', asset);
      res.status(200).json(asset);
    } else {
      res.status(404).json({
        message: "Asset not found!"
      })
    }
  }).catch(error => {
    res.status(500).json({
      message: "Something went wrong!"
    })
  });
};

exports.deleteAssetByID = async (req, res) => {
  const id = req.params.id;

}

exports.assetGetByID = async (req, res) => {
  console.log('------------REQUESTED ID: ', req.params.id);
  const id = req.params.id;

  Asset.findByPk(id).then(result => {
    if (result) {
      const asset = {
        cat_id: result.cat_id,
        assignedTo: result.assignedTo,
        Condition: result.Condition,
        PurchaseDate: result.PurchaseDate,
        DesolveDate: result.DesolveDate,
        SerialNumber: result.SerialNumber,
        Details: result.Details,
        ExpireDate: result.ExpireDate
      };
      c
      console.log('------------asset: ', asset);
      res.status(200).json(asset);
    } else {
      res.status(404).json({
        message: "Asset not found!"
      })
    }
  }).catch(error => {
    res.status(500).json({
      message: "Something went wrong!"
    })
  });
};



exports.assetQuery = async (req, res) => {
  try {
    const assets = await Asset.find({});
    res.json(assets);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'An error occurred!!' });
  }
};





