/**
 * Created by RFreeman on 2/8/2017.
 */

// create a game model with mongoose to do CRUD operations
let mongoose = require('mongoose');

let gameSchema = new mongoose.Schema({
   title: {
       type: String,
       required: 'Title is Required'
   },
    developer: {
        type: String,
        required: 'Developer is Required'
    },
    genre: {
        type: String
    },
    year: {
        type: Number,
        required: 'Year is Required',
        min: 1970
    }
});

// make this model public
module.exports = mongoose.model('Game', gameSchema);
