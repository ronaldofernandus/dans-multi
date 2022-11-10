const { getVerification } = require("../helpers/jwtFile");

const authentication = (req, res, next) => {
  const getToken = req.headers.get_token;

  if (getToken) {
    try {
      let verifyToken = getVerification(getToken);

      req.userData = verifyToken;
      next();
    } catch (err) {
      res.status(401).json({
        message: `Token not verify`,
      });
    }
  } else {
    res.status(403).json({
      message: "token not found",
    });
    next();
  }
};

module.exports = authentication;
