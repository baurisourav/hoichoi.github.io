const movieModel=require('../Model/movie.js')


const createMovie=async function(req,res){
    let data=await movieModel.create(req.body)
    
}
module.exports.createMovie=createMovie