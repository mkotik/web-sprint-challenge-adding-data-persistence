const tasks = [
  {
    task_description: "Paint the sun",
    notes: "Use yellow and red paint",
    project_id: 2,
  },
  {
    task_description: "Paint the sky",
    notes: "Use blue and white paint",
    project_id: 2,
  },
  {
    task_description: "Stack the wood",
    notes: "Make sure to leave enough air space",
    project_id: 1,
  },
  {
    task_description: "Apply lighter fluid",
    project_id: 1,
  },
  {
    task_description: "Apply fire from a lighter",
    notes: "Be careful!",
    project_id: 1,
  },
];

exports.tasks = tasks;

exports.seed = function (knex) {
  return knex("tasks").insert(tasks);
};
