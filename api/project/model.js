const db = require("../../data/dbConfig");

const getAll = async () => {
  const projects = await db("projects");

  return projects.map((project) => ({
    ...project,
    project_completed: project.project_completed ? true : false,
  }));
};

const getById = async (id) => {
  return await db("projects").where("project_id", id).first();
};

const insert = async (project) => {
  const newId = await db("projects").insert(project);
  const newProject = await getById(newId);

  const returnObj = {
    project_id: newProject.project_id,
    project_name: newProject.project_name,
    project_description: newProject.project_description,
    project_completed: newProject.project_completed ? true : false,
  };

  return returnObj;
};

module.exports = {
  getAll,
  insert,
};
