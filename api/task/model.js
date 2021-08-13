// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {
    const rows = await db('tasks as t')
        .leftJoin('projects as p', 't.task_id', 'p.task_id')
        .leftJoin('project_resources_id as pr', 'pr.project_id', 'p.project_id')
        .leftJoin('resources as r', 'r.resources_id', 'pr.resources_id')
        .select(
            't.task_id',
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description'
        )
        .orderBy('task_id')
        .where('t.tasks')
    
    const result = {
        task_id: rows[0].task_id,
        task_description: rows[0].task_description,
        task_notes: rows[0].task_notes,
        task_completed: false,
        project_name: rows[0].project_name,
        project_description: rows[0].project_description,
    }
    return result
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