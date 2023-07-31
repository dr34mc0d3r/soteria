const Asset = require('../models/asset.model');
// const bcrypt = require('bcrypt');
// const { generateToken } = require('../middleware/auth');




// item_id: Number,
// assignedTo: String,
// Condition: String,
// PurchaseDate: Date,
// DesolveDate: Date,
// SerialNumber: String,
// Details: String,
// ExpireDate: Date,


exports.addAsset = async (req, res) => {
  const { item_id, assignedTo, Condition, PurchaseDate, DesolveDate, SerialNumber, Details, ExpireDate } = req.body;
  // console.log("req.body: ", req.body);

  try {
    const asset = {
        item_id: item_id,
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

exports.loginUser = async (req, res) => {
  const { username, email, password } = req.body;


  // console.log("req.body: ", req.body);
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    } else {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          const payload = { userId: user._id };
          const token = generateToken(payload);

          res.status(200).json({
            id: user.id,
            message: "Authentication successful!",
            token: token
          });

        } else {
          res.status(401).json({
            message: "Invalid credentials!",
          });
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'An error occurred while logging in' });
  }
};


exports.logOutUser = async (req, res) => {
  try {
    // res.cookie('token', "", {
    //   httpOnly: true,
    //   secure: false,
    //   sameSite: "strict",
    //   expires: new Date,
    //   path: "/"
    // });

    res.status(200).json({
      message: "Logout successful!",
      token: ""
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'An error occurred while logging out' });
  }
};

exports.profile = async (req, res) => {
  console.log('------------REQUESTED ID: ', req.params.id);
  const id = req.params.id;

  User.findByPk(id).then(result => {
    if (result) {
      const user = {
        id: result.id,
        createdAt: result.createdAt,
        email: result.email,
        username: result.username,
        updatedAt: result.updatedAt
      };
      console.log('------------user: ', user);
      res.status(200).json(user);
    } else {
      res.status(404).json({
        message: "User not found!"
      })
    }
  }).catch(error => {
    res.status(500).json({
      message: "Something went wrong!"
    })
  });
}



exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'An error occurred!!' });
  }
};





