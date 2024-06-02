const { CityService } = require("../services/index");
let cs = new CityService();
const CreateCity = async (req,res)=>{
    try{
        const city = await cs.createCity(req.body);
        return res.status(201).json({
            data: city,
            success:true,
            message:"Successfully crreated city",
            error:{}
        })
    }catch(er){
        return res.status(500).json({
            success:false,
            message:"failed",
            error: er
        })
    }
}
const getAllCities = async (req,res)=>{
    try{
        const cities = await cs.getAllCities();
        res.status(200).json({
            data:cities,
            success:true,
            message:"Succesfully fetched all cities",
            error:{}
        })
    }catch(er){
        return res.status(500).json({
            success:false,
            message:"failed",
            error: er
        })
    }
}
const deleteCity = async(req,res)=>{
    try{ 
            const response = await cs.deleteCity(req.params.id);
            return res.status(200).json({
                success:true,
                message:"Successfully city is deleted",
                error:{}
            })
        }catch(er){
            return res.status(500).json({
                success:false,
                message:"failed",
                error: er
            })
        }
   
    
}
const getCity = async (req,res)=>{
    
    try{
        const city = await cs.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success:true,
            message:"Successfully fetched a city",
            error:{}
        })
    }catch(er){
        return res.status(500).json({
            success:false,
            message:"failed",
            error: er
        })
    }
}
const updateCity = async (req,res)=>{
    try{
        const city = await cs.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: city,
            success:true,
            message:"Succesfully city is updated",
            error:{}
        })
    }catch(er){
        return res.status(500).json({
            success:false,
            message:"failed",
            error: er
        })
    }
}
module.exports = {
    CreateCity,
    getAllCities,
    deleteCity,
    getCity,
    updateCity
}