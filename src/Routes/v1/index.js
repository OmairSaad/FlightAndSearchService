const express = require('express');
const { getAllCities, CreateCity, getCity, deleteCity, updateCity } = require('../../controllers/City-Controller');
const router = express.Router();

router.route('/cities').get(getAllCities).post(CreateCity);
router.route('/cities/:id').get(getCity).delete(deleteCity).put(updateCity);
module.exports = router;