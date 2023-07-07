import {Sequelize} from 'sequelize'


export const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASS, {
    host: process.env.HOST,
    port: 6000,
    dialect: 'postgres',
  });
