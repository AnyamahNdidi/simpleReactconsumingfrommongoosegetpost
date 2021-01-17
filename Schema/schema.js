const mongose = require('mongoose')

const tuedaydbschema = mongose.Schema({
     
    user:{
        type:String,
        require:true
    },
    
    intrest:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
  
})

module.exports = mongose.model("dbtuesdayschema", tuedaydbschema)