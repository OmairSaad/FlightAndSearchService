const { CityRepo } = require("../repository/index");
class CityService{
    repo = new CityRepo();
    async getAllCities(filter){
        try{
            const cities = await this.repo.getAllCities(filter);
             return cities;
        }catch(er){
         throw {er}
        }
    }

    async createCity(data){
        try{
            const city = await this.repo.createCity(data);
            return city;
        }catch(er){
            throw {er};
        }
    }

    async getCity(citId){
        try{
            const city =await this.repo.getCity(citId);
            return city;
        }catch(er){
            throw {er};
        }
    }

    async deleteCity(cityId){
        try{
           return await this.repo.deleteCity(cityId);
        }catch(er){
            throw {er};
        }
    }

    async updateCity(cityId,data){
        try{
           return await this.repo.updateCity(cityId,data);
        }catch(er){
            throw {er};
        }
    }
}

// CityService.getAllCi.call(new CityService());
module.exports = CityService;
