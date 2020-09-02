// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const db = require('../../../lib/db')
const escape = require('sql-template-strings')

export default  async (req, res) => {

  let category = req.query.category
  const dataCategory = await db.query(escape`
    select * from project where category = ${category}
  `)

  // res.statusCode = 200
  res.json({ dataCategory: dataCategory})
}
