const jwt = require("jsonwebtoken");

const secretCode = process.env.SECRET_CODE || "test";

const getJwt = (data) => {
  const { id, username, email } = data;
  return jwt.sign(
    {
      id,
      username,
      email,
    },
    secretCode,
    {
      expiresIn: "24h",
    }
  );
};

const getVerification = (data) => {
  return jwt.verify(data, secretCode);
};

module.exports = { getJwt, getVerification };
