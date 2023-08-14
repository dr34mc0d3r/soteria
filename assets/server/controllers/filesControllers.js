






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


    // console.log("response file:", req.file);
    const responseData = {
      message: "File uploaded successfully!",
      filePath: req.file.path
    }

    const jsonContent = JSON.stringify(responseData);
    res.status(200).send(jsonContent);

  } catch (err) {
    console.log(err);

  }
};







