const {City} = require('../models/index');
const {Airport} = require("../models/index");
const CityRepo = require("./City-Repo");
class AirportRepo{
    async create(name,id){
     try{
          name.cityId=id;
          return await Airport.create(name,id);
     }catch(e){
       throw {e};
     }
    }

    async getAll(){
        try{
            // return Airport.findAll();

            return Airport.findAll({     //it will also print city with airports
                include:{
                    model:City
                }
            })
        }catch(e){
            throw {e}
        }
    }
    
    async deleteAirport(id){
        try{
            const airport =await Airport.findByPk(id);
            let ans= await airport.destroy();
            console.log(ans);
            return true;
        }catch(e){
            throw {e}
        }
    }

    async getAirport(id){
        try{
            return await Airport.findByPk(id,{
                include:{
                    model:City
                }
            });
        }catch(e){
            throw {e}
        }
    }

    async updateAirport(data,id){
        try{
           let airport = await Airport.findByPk(id);
           airport.name=data.name;
           airport.address = data.address;
           return await airport.save();
        }catch(e){
            throw {e}
        }
    }
    
    async getAirportsByCity(name){
        try{
            const city = await City.findOne({
                where:{
                    name:name
                }
            });
            const airports= await city.getAirports();
            return airports;
        }catch(e){
            throw {e}
        }
    }
}

module.exports = AirportRepo;