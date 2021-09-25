const CarsService = require("./service");

async function fetchAvailableCars(req, res, next) {
  try {
    if (!req.query.from || !req.query.to) {
      return res
        .status(400)
        .json({ message: "query 'fro'm and 'to' must be provided" });
    }

    const availableCars = await CarsService.fetchAvailableCars(req.query);

    if (!availableCars) return res.status(404).json({ message: "User not found" });
    res.status(200).json(availableCars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  fetchAvailableCars,
};
