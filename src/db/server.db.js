import { Sequelize } from 'sequelize';
import { DB_NAME } from '../constants.js';
import { initModels } from './centralize.models.js';

const sequelize = new Sequelize(DB_NAME, process.env.PG_USER, process.env.PG_PASSWORD, {
    host: process.env.PG_HOST,
    dialect: 'postgres', 
    logging: console.log,
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log(`\nPostgreSQL connected! DB HOST: ${process.env.PG_HOST}`);
        await sequelize.sync({ force: false });
    } catch (error) {
        console.error("PostgreSQL connection FAILED: ", error.message || error);
        process.exit(1);
    }
};

const db = initModels(sequelize);

export { sequelize, connectDB, db };
