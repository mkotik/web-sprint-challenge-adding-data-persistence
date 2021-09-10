const resources = [
  { resource_name: "wood", resource_description: "Dry fire wood" },
  {
    resource_name: "paint",
    resource_description: "Warm colors for the sun and cool colors for the sky",
  },
  {
    resource_name: "lighter fluid",
  },
  {
    resource_name: "lighter",
    resource_description: "Preferably use a long BBQ lighter",
  },
];

exports.resources = resources;

exports.seed = function (knex) {
  return knex("resources").insert(resources);
};
