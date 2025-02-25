const moongose = require ('mongoose');

const MoviesSchema= new moongose.Schema({
    name :{
        type:String,
        required:true
    },
    year: {
        type: Number,
        required:true
    }

})
const ReviewSchema = new moongose.Schema({
    review: {
        type:String,
        require:true
    },
    ratings:{
        type:Number,
        require:true
    },
    movies:{
        type:moongose.Schema.Types.ObjectId,
        ref:'Movies'
    }
})
const Movies = moongose.model('Movies',MoviesSchema);
const Review =moongose.model('Review',ReviewSchema);
module.exports={Movies,Review}