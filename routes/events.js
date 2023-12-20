const router = require("express").Router();
const { getAllEvents, createEvent } = require("../controller/eventController");
const checkAuth = require("../middleware/check_auth");

router
    .route("/events")
    .post(checkAuth,createEvent)
    .get(getAllEvents);

router
    .route("/events:/id")
    .get();

module.exports = router;
