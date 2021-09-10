const db = require("../../data/dbConfig");

const getAll = async () => {
  const tasks = await db("tasks as t")
    .select("t.*", "p.project_name", "p.project_description")
    .join("projects as p", "t.project_id", "p.project_id");

  return tasks.map((task) => ({
    ...task,
    task_completed: task.task_completed ? true : false,
  }));
};

const getById = async (id) => {
  return await db("tasks").where("task_id", id).first();
};

const insert = async (task) => {
  const newId = await db("tasks").insert(task);
  const newTask = await getById(newId);

  const returnObj = {
    task_id: newTask.task_id,
    task_description: newTask.task_description,
    task_notes: newTask.task_notes,
    task_completed: newTask.task_completed ? true : false,
    project_id: newTask.project_id,
  };

  return returnObj;
};

module.exports = {
  getAll,
  insert,
};
