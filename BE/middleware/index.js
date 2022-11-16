/** Import dei middlewares authJwt e verifySignup */
const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");

/** Export dei middlewares authJwt e verifySignup */
module.exports = {
  authJwt,
  verifySignUp
};