// build your `Project` model here
const db = require('../../data/dbConfig')

 async function getProjects() {
    const rows = await db('projects as p')
        .where('p.projects')
        .select('p.*')
        .orderBy('p.project_id')

    const result = {
        project_id: rows[0].project_id,
        project_name: rows[0].project_name,
        project_description: rows[0].project_description,
        project_completed: false,
    }

    return result
 }

 function postProject(project) {
    return db('projects').insert(project)
    .then(([project_id]) => {
        return db('projects').where('project_id', project_id).first()
    })
 }

 module.exports = {
     getProjects,
     postProject,
 }