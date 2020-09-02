// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const db = require('../../lib/db')
const escape = require('sql-template-strings')

export default  async (req, res) => {
  const intouch = await db.query(escape`
    select * from intouch
  `)

  const latestProject = await db.query(escape`
    select * from project order by date DESC limit 2
  `)

  const category = await db.query(escape`
    select * from category
  `)

  const projectAccom = await db.query(escape`
    SELECT
    category,
    COUNT(*) as total
    FROM
        project
    GROUP BY category;
  `)

  // res.statusCode = 200
  res.json({ project: latestProject,intouch: intouch,category: category, projectAccom: projectAccom })
}
