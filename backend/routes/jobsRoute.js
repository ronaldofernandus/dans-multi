const jobsRoute = require("express").Router();
const jobsController = require("../controller/jobsController");

const authentication = require("../middleware/tokenMiddleWare");

jobsRoute.get("/", jobsController.getJobsByWord);

jobsRoute.get("/page", authentication, jobsController.getPageJobs);
jobsRoute.get("/positions/:id", authentication, jobsController.getPositionById);

module.exports = jobsRoute;


