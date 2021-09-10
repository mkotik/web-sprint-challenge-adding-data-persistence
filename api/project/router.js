const express = require("express");
const Project = require("./model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.getAll();
    res.status(200).json(projects);
  } catch (err) {
    next(nerr);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const response = await Project.insert(req.body);
    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
