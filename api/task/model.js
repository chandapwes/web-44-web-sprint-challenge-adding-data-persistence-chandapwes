// build your `Task` model here
const db = require('../../data/dbConfig')

function getTasks() {
    return db('tasks')
}

function postTask(task) {
    return db('tasks').insert(task)
    .then(([task_id]) => {
        return db('tasks').where('task_id', task_id).first()
    })
}

module.exports = {
    getTasks,
    postTask,
}