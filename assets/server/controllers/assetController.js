const Asset = require('../models/asset.model');
// const bcrypt = require('bcrypt');
// const { generateToken } = require('../middleware/auth');



// User_id: String
// Cat_id: Number,
// AssignedTo: String,
// Condition: String,
// PurchaseDate: Date,
// DesolveDate: Date,
// SerialNumber: String,
// Details: String,
// ExpireDate: Date,
// UploadedFile: String


exports.createAsset = async (req, res) => {
  const { User_id, Cat_id, AssignedTo, Condition, PurchaseDate, DesolveDate, SerialNumber, Details, ExpireDate, UploadedFile } = req.body;
  // console.log("req.body: ", req.body);

  try {
    const asset = {
      User_id: User_id,
      Cat_id: Cat_id,
      AssignedTo: AssignedTo,
        Condition: Condition,
        PurchaseDate: PurchaseDate,
        DesolveDate: DesolveDate,
        SerialNumber: SerialNumber,
        Details: Details,
        ExpireDate: ExpireDate,
        UploadedFile: UploadedFile
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

  const id = req.params.id;

  Asset.findByPk(id).then(result => {
    if (result) {
      const asset = {
        User_id: result.User_id,
        Cat_id: result.Cat_id,
        AssignedTo: result.AssignedTo,
        Condition: result.Condition,
        PurchaseDate: result.PurchaseDate,
        DesolveDate: result.DesolveDate,
        SerialNumber: result.SerialNumber,
        Details: result.Details,
        ExpireDate: result.ExpireDate,
        UploadedFile: result.UploadedFile
      };

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


  try {
    const result = await Asset.findByIdAndDelete(id);
    res.status(201).json({
      message: "Asset deleted successfully",
      result: result
    });
  } catch(err) {
    res.status(500).json({
      message: "Something went wrong!",
      err: err
    });
  }



}

exports.assetForId = async (req, res) => {

  const id = req.params.id;

  Asset.find({ User_id: id }).then(result => {
    if (result) {
      
      res.status(200).json(result);

    } else {
      res.status(404).json({
        message: "Assets for user id not found!"
      })
    }
  }).catch(error => {
    res.status(500).json({
      message: "Something went wrong!"
    })
  });
}

exports.assetGetByID = async (req, res) => {

  const id = req.params.id;

  Asset.findByPk(id).then(result => {
    if (result) {
      const asset = {
        User_id: result.User_id,
        Cat_id: result.Cat_id,
        AssignedTo: result.AssignedTo,
        Condition: result.Condition,
        PurchaseDate: result.PurchaseDate,
        DesolveDate: result.DesolveDate,
        SerialNumber: result.SerialNumber,
        Details: result.Details,
        ExpireDate: result.ExpireDate,
        UploadedFile: result.UploadedFile
      };

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





