const db = require("../../data/dbConfig");

const getAll = () => {
  return db("resources");
};

const getById = (id) => {
  return db("resources").where("resource_id", id).first();
};

const insert = async (resource) => {
  const newId = await db("resources").insert(resource);
  return getById(newId);
};

module.exports = {
  getAll,
  insert,
};
