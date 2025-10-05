// app_api/controllers/trips.js
const Trip = require('../models/travlr');

// GET /api/trips -> list all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({}).exec();
    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json({ message: 'Error fetching trips', error: err.message });
  }
};

// GET /api/trips/:tripCode -> single trip by code
const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode }).exec();
    if (!trip) return res.status(404).json({ message: 'Trip not found' });
    return res.status(200).json(trip);
  } catch (err) {
    return res.status(500).json({ message: 'Error fetching trip', error: err.message });
  }
};

module.exports = { tripsList, tripsFindByCode };
