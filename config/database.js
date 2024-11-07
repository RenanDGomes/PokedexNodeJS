const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgresql://api-homolog_owner:oHQgbPWu4i6S@ep-round-sky-a57j8tcy.us-east-2.aws.neon.tech/api-homolog', {
  dialect: 'postgres',
  ssl: true,  
  dialectOptions: {
    ssl: {
      require: true,    
      rejectUnauthorized: false 
    }
  }
});

module.exports = sequelize;
