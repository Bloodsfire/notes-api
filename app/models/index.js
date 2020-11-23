import config from '../config/db.config.js';
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
{
        host: config.HOST,
        dialect: config.dialect,
        pool: {...config.pool}
    }
);

const models = {};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

export {
    sequelize,
    Sequelize
}

