const { AirportService } = require("../services/");
const as = new AirportService();
const create = async(req,res)=>{
    //route: /api/v1/cities/cityId/airports  : /api/v1/cities/2/aiports-> associate with city id 2
    try{
        const airport= await as.create(req.body,req.params.id);
        res.status(201).json({
            message:"Suucees",
            data: airport,
            error:{}
        })
    }catch(e){
        res.status(404).json({
            message:"failed",
            error:e
        })
    }
}
const getAll = async (req,res)=>{
    try{
        const airports= await as.getAll();
         res.status(200).json({
            message:"Fetched All Airports Successfully",
            data: airports,
            error:{}
        })
    }catch(e){
        res.status(404).json({
            message:"failed",
            error:e
        })
    }
}

const deleteAirport = async (req,res)=>{
    console.log(req.params.id);
    try{
        const result = await as.deleteAirport(req.params.id);
        res.status(200).json({
            message:"Deleted Succesfully",
            result:result,
            error:{}
        })
    }catch(e){
        console.log(e);
        res.status(404).json({
            message:"failed",
            error:e
        })
    }
}

const getAirport = async (req,res)=>{
    try{
        const airport =await as.getAirport(req.params.id);
        res.status(200).json({
            message:"Fteched airport Succesfully",
            data:airport,
            error:{}
        })
    }catch(e){
        res.status(404).json({
            message:"failed",
            error:e
        })
    }
}

const updateAirport = async (req,res)=>{
    try{
        const airport =await as.updateAirport(req.body,req.params.id);
        res.status(200).json({
            message:"Updated airport Succesfully",
            data:airport,
            error:{}
        })
    }catch(e){
        res.status(404).json({
            message:"failed",
            error:e
        })
    }
}

const getAirportsByCity = async (req,res)=>{
    try{
        const airports = await as.getAirportsByCity(req.params.name);
        res.status(200).json({
            message:"Fetched airport by city Succesfully",
            data:airports,
            error:{}
        })
    }catch(e){
        res.status(404).json({
            message:"failed",
            error:e
        })
    }
}
module.exports ={
    create,
    getAll,
    deleteAirport,
    getAirport,
    updateAirport,
    getAirportsByCity
}