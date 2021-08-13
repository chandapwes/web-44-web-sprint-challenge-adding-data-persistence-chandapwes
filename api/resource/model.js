// build your `Resource` model here
const db = require('../../data/dbConfig')

function getResources() {
    return db('resources')
}

function postResource(resource) {
    return db('resources').insert(resource)
    .then(([resource_id]) => {
        return db('resources').where('resource_id', resource_id).first()
    })
 }

 module.exports = {
     getResources,
     postResource,
 }