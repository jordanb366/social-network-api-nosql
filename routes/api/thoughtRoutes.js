const router = require("express").Router();

// User routes will go here

const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
} = require("../../controllers/thoughtController.js");

// /api/users
router.route("/").get(getThoughts).post(createThought);

// /api/users/:studentId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
