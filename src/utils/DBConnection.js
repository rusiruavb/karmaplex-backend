const { Sequelize } = require('sequelize')
const Config = require('../configs')

const sequelize = new Sequelize({
  host: Config.POSTGRES_HOST_ADDRESS,
  username: Config.POSTGRES_USER_NAME,
  password: Config.POSTGRES_PASSWORD,
  dialect: 'postgres',
  database: Config.POSTGRES_DATABASE,
  logging: console.log
})

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database Sync')
  })
  .catch((error) => {
    console.log('Database Sync Error: ', error.message)
  })

module.exports = sequelize