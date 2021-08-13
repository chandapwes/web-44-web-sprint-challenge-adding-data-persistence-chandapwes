// build your `Project` model here
 const db = require('../../data/dbConfig')

 function getProjects() {
    return db('projects')  
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