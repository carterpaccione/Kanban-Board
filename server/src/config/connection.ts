import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

let sequelize;

if (process.env.DATABASE_URL) {
    console.log('PRODUCTION INSTANCE');
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    })
} else {
    console.log('FAIL')
    sequelize = new Sequelize(
        process.env.DB_NAME || 'kanban_db',
        process.env.DB_USER || 'postgres',
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'postgres',
        },
    );
}

export default sequelize;