// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const db = require('../../lib/db')
const escape = require('sql-template-strings')

export default  async (req, res) => {
  const testimonials = await db.query(escape`
    select * from testimonials
  `)

  const our_team = await db.query(escape`
    select * from our_team
  `)

  const partnership = await db.query(escape`
    select * from partnership
  `)

  // res.statusCode = 200
  res.json({ testimonials: testimonials, our_team: our_team,partnership:partnership })
}
