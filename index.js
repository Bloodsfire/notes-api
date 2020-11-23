import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import { sequelize } from './app/models/index.js';
import routes from './app/routes/index.js';
import seeds from './app/seeds/index.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.options('*', cors());

routes(app);

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(() => {
    if (eraseDatabaseOnSync) {
        seeds();
    }

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });
});