/** Configurazione */
// const { application } = require('express');
import { Router, json, urlencoded } from 'express';
const router = Router();

/** Middleware usato per recepire la request del post */
router.use(json());
router.use(urlencoded({ extended: false }));

/** Importo dei controllers */
import { getItems } from "../controllers/items.controller.js";

/** Middleware di autenticazione: controlla se ad ogni richiesta c'è un token di autenticazione allegato */
// const { authJwt } = require("../middleware");

/** GET di tutti i documenti */
router.get('/items', getItems);

/** Export dei router in server.js */
export default router;