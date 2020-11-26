//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { url } = require("inspector");

const app = express();
var multer  = require('multer');
var fs = require('fs'); 
var imgModel = require('./model');

var path = require('path');
var upload = multer();
var storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, 'uploads') 
    }, 
    filename: (req, file, cb) => { 
        cb(null, file.fieldname + '-' + Date.now()) 
    } 
}); 
  
var upload = multer({ storage: storage }); 


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-adi:Test123@cluster0.eetnj.mongodb.net/usersAddedBooks", {useNewUrlParser: true, useUnifiedTopology: true });

var imgModel = require('./model'); 
app.get('/', (req, res) => { 
  imgModel.find({}, (err, items) => { 
      if (err) { 
          console.log(err); 
      } 
      else { 
          res.render('market_2', { items: items }); 
      } 
  }); 
}); 




app.post('/', upload.single('image'), (req, res, next) => { 
  
  var obj = { 
      email: req.body.email,
      name: req.body.name, 
      desc: req.body.desc, 
      url: req.body.url,
      image: { 
          data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
          contentType: 'image/png'
      } 
  } 
  imgModel.create(obj, (err, item) => { 
      if (err) { 
          console.log(err); 
      } 
      else { 
          // item.save(); 
          res.redirect('/'); 
      } 
  }); 
}); 





app.listen(3000, function() {
  console.log("Server started on port 3000");
});
