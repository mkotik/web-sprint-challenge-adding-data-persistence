const express = require("express");
const Resources = require("./model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const resources = await Resources.getAll();
    res.status(200).json(resources);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const response = await Resources.insert(req.body);
    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
