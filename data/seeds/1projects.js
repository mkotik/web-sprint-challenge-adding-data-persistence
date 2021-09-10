const projects = [
  {
    project_name: "Campfire",
    project_description: "Build a campfire",
  },
  {
    project_name: "Sunset Painting",
    project_description: "Make a painting of a sunset.",
  },
];

exports.projects = projects;

exports.seed = function (knex) {
  return knex("projects").insert(projects);
};
