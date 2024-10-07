// import dotenv from 'dotenv';
// dotenv.config();

// import { Sequelize } from 'sequelize';

// let sequelize;

// if (process.env.DATABASE_URL) {
//     console.log('PRODUCTION INSTANCE');
//     sequelize = new Sequelize(process.env.DATABASE_URL, {
//         dialect: 'postgres',
//         dialectOptions: {
//             ssl: {
//                 require: true,
//                 rejectUnauthorized: false,
//             },
//         },
//     })
// } else {
//     console.log('FAIL')
//     sequelize = new Sequelize(
//         process.env.DB_NAME || 'kanban_db',
//         process.env.DB_USER || 'postgres',
//         process.env.DB_PASSWORD,
//         {
//             host: 'localhost',
//             dialect: 'postgres',
//         },
//     );
// }

// export default sequelize;

import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true, // Enforce SSL
          rejectUnauthorized: false, // This allows self-signed certificates, if any
        },
      },
    })
  : new Sequelize(
      process.env.DB_NAME || '',
      process.env.DB_USER || '',
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
          decimalNumbers: true,
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      },
    );

export default sequelize;