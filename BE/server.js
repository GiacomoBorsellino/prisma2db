import express, { json, urlencoded } from 'express';
import createError from 'http-errors';

// require('dotenv').config();

import dotenv from 'dotenv'
// const dotenv = dotenv.config()

const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));

// Porta usata dal Front-End
import cors from "cors";

var corsOptions = {
    origin: `http://localhost:4200`
};

app.use(cors(corsOptions));

/** Chiamata di controllo */
app.get('/', async (req, res, next) => {
    res.send({ message: 'Chiamata di Controllo' });
});

/** Import Routes */
import itemsRouter from './routes/items.js';
app.use('/api/v1', itemsRouter);

/** Gestione Route non trovata */
app.use((req, res, next) => {
    next({ message: "error" });
});

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        status: err.status || 300,
        message: err.message
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log('Server in ascolto'); })
