const Sequelize = require('sequelize')

const databaseUrl = 
  process.env.DATABASE_URL ||
  'postgres://postgres:munchie@localhost:5432/postgres'

const db = new Sequelize(databaseUrl)
db.sync()
  .then(() => console.table({'Database connected': "whoohoo!"}))
  .catch(console.error)

module.exports = db