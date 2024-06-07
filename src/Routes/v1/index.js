const express = require('express');
const { getAllCities, CreateCity, getCity, deleteCity, updateCity, getCitybyName } = require('../../controllers/City-Controller');
const { create, getAll, deleteAirport, getAirport, updateAirport, getAirportsByCity } = require('../../controllers/Airport-Controller');
const router = express.Router();

router.route('/cities').get(getAllCities).post(CreateCity);
router.route('/cities/:id').get(getCity).delete(deleteCity).put(updateCity);
router.route('/cities/:id/airports').post(create)
router.route('/cities/:name/airports').get(getAirportsByCity)
router.route('/airports').get(getAll)
router.route('/airports/:id').delete(deleteAirport).get(getAirport).patch(updateAirport);
module.exports = router; 