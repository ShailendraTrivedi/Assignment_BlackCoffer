const assignmentModel = require("../models/assignment.models");

/** GET: http://localhost:5000 */
const fetchAllData = async (req, res) => {
  try {
    const newItem = await assignmentModel.find({});
    return res.status(200).send(newItem);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error to finding items from the database" });
  }
};

/** GET: http://localhost:5000/filter/sector/:sector */
const filterBySector = async (req, res) => {
  try {
    const { sector } = req.params;
    const filteredItems = await assignmentModel.find({ sector: sector });
    return res.status(200).json(filteredItems);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error to filter sector from the database" });
  }
};

/** GET: http://localhost:5000/filter/end_year/:end_year */
const filterByEndYear = async (req, res) => {
  console.log("hello");
  try {
    const { end_year } = req.params;
    const filteredItems = await assignmentModel.find({ end_year: end_year });
    return res.status(200).json(filteredItems);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error to filter end_year from the database" });
  }
};

/** GET: http://localhost:5000/filter/start_year/:start_year */
const filterByStartYear = async (req, res) => {
  try {
    const { start_year } = req.params;
    const filteredItems = await assignmentModel.find({
      start_year: start_year,
    });
    return res.status(200).json(filteredItems);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error to filter start_year from the database" });
  }
};

/** GET: http://localhost:5000/filter/topic/:topic */
const filterByTopic = async (req, res) => {
  try {
    const { topic } = req.params;
    const filteredItems = await assignmentModel.find({ topic: topic });
    return res.status(200).json(filteredItems);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error to filter topic from the database" });
  }
};

/** GET: http://localhost:5000/filter/source/:source */
const filterBySource = async (req, res) => {
  try {
    const { source } = req.params;
    const filteredItems = await assignmentModel.find({ source: source });
    return res.status(200).json(filteredItems);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error to filter source from the database" });
  }
};

/** GET: http://localhost:5000/filter/region/:region */
const filterByRegion = async (req, res) => {
  try {
    const { region } = req.params;
    const filteredItems = await assignmentModel.find({ region: region });
    return res.status(200).json(filteredItems);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error to filter region from the database" });
  }
};

/** GET: http://localhost:5000/filter/pestle/:pestle */
const filterByPestle = async (req, res) => {
  try {
    const { pestle } = req.params;
    const filteredItems = await assignmentModel.find({ pestle: pestle });
    return res.status(200).json(filteredItems);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error to filter pestle from the database" });
  }
};

/** GET: http://localhost:5000/filter/country/:country */
const filterByCountry = async (req, res) => {
  try {
    const { country } = req.params;
    const filteredItems = await assignmentModel.find({ country: country });
    return res.status(200).json(filteredItems);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error to filter country from the database" });
  }
};

/** GET: http://localhost:5000/filter/likelihood/:likelihood */
const filterByLikelihood = async (req, res) => {
  try {
    const { likelihood } = req.params;
    const filteredItems = await assignmentModel.find({
      likelihood: likelihood,
    });
    return res.status(200).json(filteredItems);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error to filter likelihood from the database" });
  }
};

/** GET: http://localhost:5000/filter/relevance/:relevance */
const filterByRelevance = async (req, res) => {
  try {
    const { relevance } = req.params;
    const filteredItems = await assignmentModel.find({ relevance: relevance });
    return res.status(200).json(filteredItems);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error to filter relevance from the database" });
  }
};

/** GET: http://localhost:5000/filter/intensity/:intensity */
const filterByIntensity = async (req, res) => {
  try {
    const { intensity } = req.params;
    const filteredItems = await assignmentModel.find({ intensity: intensity });
    return res.status(200).json(filteredItems);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error to filter intensity from the database" });
  }
};

module.exports = {
  fetchAllData,
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
};
