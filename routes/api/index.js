const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

// Routes will go here
router.use("/users", userRoutes);
// Routes will go here
router.use("/thoughts", thoughtRoutes);

module.exports = router;
