






exports.delete = async (req, res) => {
  console.log('------------REQUESTED ID: ', req.params.id);
  const id = req.params.id;

  res.status(200).json(req);


  // if file exists {}
  //       res.status(200).json(user);
  //     } else {
  //       res.status(404).json({
  //         message: "User not found!"
  //       })
  //     }
  //   }).catch(error => {
  //     res.status(500).json({
  //       message: "Something went wrong!"
  //     })
  //   });
}

exports.getFiles = async (req, res) => {
  console.log('------------REQUESTED ID: ', req.params.id);
  const id = req.params.id;

  res.status(200).json(req);

  // if file exists {}
  //       res.status(200).json(user);
  //     } else {
  //       res.status(404).json({
  //         message: "User not found!"
  //       })
  //     }
  //   }).catch(error => {
  //     res.status(500).json({
  //       message: "Something went wrong!"
  //     })
  //   });
}

exports.upload = async (req, res) => {
  try {

    let file = req.file;
    console.log("-----------upload controller hit", file);
    res.send({
      status: 1,
      code: 200,
      data: {
        originname: file.originalname,
        generatename: file.filename,
        filePath: file.path
      }
    });




  } catch (err) {
    console.log(err);

  }
};







