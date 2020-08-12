const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: process.env.DB_HOST_DEV,
    database: process.env.DB_NAME_DEV,
    user: process.env.DB_USER_DEV,
    password: process.env.DB_PASSWORD_DEV
  }
})

exports.query = async query => {
  try {
    const results = await db.query(query)
    await db.end()
    return results
  } catch (error) {
    return { error }
  }
}