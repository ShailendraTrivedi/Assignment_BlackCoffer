const { Router } = require("express");
const {
  filterByEndYear,
  filterByStartYear,
  filterByTopic,
  filterBySector,
  filterByRegion,
  filterByPestle,
  filterBySource,
  filterByCountry,
  filterByLikelihood,
  filterByRelevance,
  filterByIntensity,
} = require("../controllers/fetchData.controller");

const fetchByType = Router();

/** GET REQUEST BY FILTERS */
fetchByType.route("/end_year/:end_year").get(filterByEndYear);
fetchByType.route("/start_year/:start_year").get(filterByStartYear);
fetchByType.route("/topic/:topic").get(filterByTopic);
fetchByType.route("/sector/:sector").get(filterBySector);
fetchByType.route("/region/:region").get(filterByRegion);
fetchByType.route("/pestle/:pestle").get(filterByPestle);
fetchByType.route("/source/:source").get(filterBySource);
fetchByType.route("/country/:country").get(filterByCountry);
fetchByType.route("/likelihood/:likelihood").get(filterByLikelihood);
fetchByType.route("/relevance/:relevance").get(filterByRelevance);
fetchByType.route("/intensity/:intensity").get(filterByIntensity);

module.exports = fetchByType;
