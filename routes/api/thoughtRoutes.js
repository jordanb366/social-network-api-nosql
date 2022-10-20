const router = require("express").Router();

// User routes will go here

const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController.js");

// /api/users
router.route("/").get(getThoughts).post(createThought);

// /api/users/:studentId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
  .route("/api/thoughts/:thoughtId/reactions")
  .post(createReaction)
  .delete(deleteReaction);

module.exports = router;
