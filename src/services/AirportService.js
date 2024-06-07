const {AirportRepo} = require('../repository/index');
class AirportService{
    repo= new AirportRepo();
    async create(name,id){
        try {
            return await this.repo.create(name,id);
            
        } catch (e) {
            throw {e}
        }
    }

    async getAll(){
        try{
            return await this.repo.getAll();
        }catch(e){
            throw {e}
        }
    }

    async deleteAirport(id){
        try{
            return await this.repo.deleteAirport(id);
        }catch(e){
            throw {e}
        }
    }

    async getAirport(id){
        try{
            return await this.repo.getAirport(id);
        }catch(e){
            throw {e}
        }
    }

    async updateAirport(data,id){
        try{
            return await this.repo.updateAirport(data,id);
        }catch(e){
            throw {e}
        }
    }

    async getAirportsByCity(name){
        try{
            const aiports= await this.repo.getAirportsByCity(name);
            return aiports;
        }catch(e){
            throw {e}
        }
    }
}

module.exports = AirportService;