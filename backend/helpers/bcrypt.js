const bcrypt = require("bcrypt");
const saltRound = +process.env.SALT_ROUND || 10;

const encrypt = (data) => {
  // console.log(data);
  return bcrypt.hashSync(data, saltRound);
};

const decrypt = (data, encryptPwd) => {
  // console.log(data, encryptPwd);
  return bcrypt.compareSync(data, encryptPwd);
};

module.exports = { encrypt, decrypt };
