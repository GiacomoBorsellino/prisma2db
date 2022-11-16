/** Import del pacchetto jwt e del file di configurazione */
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

/** Import di Sequelize "destrutturato", permette uso di intelliSense */
const { Sequelize } = require('sequelize'); 
/** Import dei Datatypes destrutturati */
const { DataTypes } = require("sequelize"); 
const { sequelize } = require('../models');
/** Import del Model User */
const db = require("../models");
const User = db.user;

/** Middleware di verifica del token 
 * @async
 * @param {string} token - x-access-token inviato nell'header della fetch
*/
verifyToken = (request, response, next) => {
  let token = request.headers["x-access-token"];
  let userId = request.headers["user-id"]
  console.log(`HEADERS::::::::::${JSON.stringify(request.headers)}`)
  console.log(`TOKEN::::::::::${token}`)

  console.log(`USER ID::::::::::${userId}`)

  /** Controllo assenza token */
  if (!token) {
    return response.status(403).send({
      message: "Nessun token pervenuto"
    });
  }

  /** Controllo token valido */
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return response.status(401).send({
        message: "Non autorizzato!"
      });
    }

    if (userId != decoded.id) {
      return response.status(401).send({
        message: "Non autorizzato!"
      });
    }
    
    console.log(`DECODED ID::::::::::${decoded.id}`)
    userId = decoded.id;
    next();
  });
};

/** Export dei middlewares */
const authJwt = {
  verifyToken: verifyToken
};

module.exports = authJwt;