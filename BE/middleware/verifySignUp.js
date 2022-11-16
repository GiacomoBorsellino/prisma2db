/** Import del Model User */
const db = require('../models');
const { sequelize } = require('../models');
const User = db.user;

/** Middleware che verifica, in fase di registrazione, se l'email è già presente nel database 
 * @async
 * @param {object} - Corpo Utente
 */
const verifySignUp = (request, response, next) => {
  const user = request.body;
  db.sequelize.sync({alter: true}).then(() => {
    return User.findOne({where: {email: user.email}})
  })
  .then((user) => {
    if (user) {
      response.status(400).json({failed:true})
      return;
    }
  next();
  })
};

module.exports = verifySignUp;