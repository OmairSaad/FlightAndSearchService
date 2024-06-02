const { City, sequelize } = require('../models/index');
class CityRepo {
    async createCity(name) {
        try {
            return await City.create(name);
        } catch (er) {
            throw {er};
        }
    }

    async deleteCity(cityId) {
        try {
            // await City.destroy({
            //     where: {
            //         id: cityId
            //     }
            // });
            // return true;
            const city =await City.findByPk(cityId);
             await city.destroy();
            return true;
        } catch (er) {
            throw {er};
        }
    }

    async getCity(cityId) {
        try {
            const city =await City.findByPk(cityId);
            return city;
        } catch (er) {
            throw {er};
        }
    }

    async updateCity(cityId, data) {
        try {
            // const city =await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // });
            // return true;
            const city = await City.findByPk(cityId);
            city.name = data.name;
            return await city.save();     //save this city in db
        }catch (er) {
            throw {er};
        }
    }

     async getAllCities(){
        try{
            return await City.findAll();
        }catch (er) {
            throw {er};
        } 
    } 
}
module.exports = CityRepo; 