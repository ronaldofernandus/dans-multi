const indexRoute = require("express").Router();

const userRoutes = require("./userRoute");
indexRoute.use("/user", userRoutes);

const jobsRoute = require("./jobsRoute");
indexRoute.use("/", jobsRoute);

module.exports = indexRoute;
