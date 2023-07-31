const jwt = require('jsonwebtoken');
const { secretKey } = require('./config');


const generateToken = (payload) => {
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  return  token ;
};
const verifyToken = (req, res, next) => {
  // console.log("headers:", req.headers);
  const token = req.headers.token; 
  // console.log("token:", token);
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      req.userId = decoded.userId;
      next();
    }); 
  };
  
module.exports = { generateToken, verifyToken };
