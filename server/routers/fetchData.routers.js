const { Router } = require("express");
const {
  fetchAllData,
  fetchBySector,
} = require("../controllers/fetchData.controller");

const fetchRouter = Router();

/** GET REQUEST */
fetchRouter.route("/").get(fetchAllData);

module.exports = fetchRouter;
