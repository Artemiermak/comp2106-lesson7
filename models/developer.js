// create a game model with mongoose to do CRUD operations
let mongoose = require('mongoose');

let developerSchema = new mongoose.Schema({

  name: {
    type: String,
    required: 'This field is required.'
  },
  year : {
    type: String,
    required: 'This field is required.'
  },
  address : {
    type: String,
    required: 'This field is required.'
  },
  revenue : {
    type: Number
  }
});

// make this model public
module.exports = mongoose.model('Developer', developerSchema);
