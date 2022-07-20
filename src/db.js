const {Pool} = require('pg')
const { db } = require('./config')

const { user, password, host, port, database } = db

const pool = new Pool({
    user,
    password,
    host,
    port,
    database,
})

module.exports = pool