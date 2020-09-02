// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const db = require('../../../lib/db')
const escape = require('sql-template-strings')

export default  async (req, res) => {
  let slug = req.query.slug

  const project = await db.query(escape`
    select * from project where slug = ${slug}
  `)

  const listImg = await db.query(escape`
    SELECT images_project.name
    FROM images_project
    INNER JOIN project ON images_project.idProject=project.idProject where images_project.idProject = ${project[0].idProject}
  `)


  // res.statusCode = 200
  res.json({ project: project, listImg: listImg })
}
