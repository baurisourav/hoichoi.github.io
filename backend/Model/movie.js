const mongoose=require('mongoose')

const movieModel=new mongoose.Schema({
    movie_name:{type:String,
    required:true},
    poster_link:{type:String}

},{timestamps:true}) 

module.exports= mongoose.model("movie",movieModel)