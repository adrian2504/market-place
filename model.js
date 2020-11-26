var mongoose = require('mongoose'); 
  
var imageSchema = new mongoose.Schema({
    email: { type: String },
    name: { type: String }, 
    desc: { type: String },
    url: { type: String },
    image: { data: Buffer, contentType: String} 
  });
   
  
//Image is a model which has a schema imageSchema 
  
module.exports = new mongoose.model('Image', imageSchema); 
  