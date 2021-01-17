const express = require('express')

const dbtuesdayschema = require('../Schema/schema')

const route = express.Router()

route.get('/', async (req, res)=>{
      
    try{

        const newData = await dbtuesdayschema.find()
        res.status(200).json(newData)
    }catch(error){

        res.status(404).send('error:' + error)
    }  

        
})

route.get('/:id', async function(req, res){

    try{

        const newData = await dbtuesdayschema.findById(req.params.id)
        res.status(200).json(newData)
    }catch(error){

        res.status(404).send('error:' + error)

    }  
  
})

route.post('/', async function(req, res){

    // const createData = new dbtodoschema({
    //     title:req.body.title,
    //     task:req.body.task,
    //     who:req.body.who,
    //     dateTime:req.body.dateTime,
    //     startTime:req.body.startTime
        
    // })

    // try{

    //     const newData = await createData.save()
    //     res.status(201).json(newData)
    // }catch(error){
    //     res.status(404).send('error:' + error)
    // }

    const newData = await dbtuesdayschema.create(req.body)
    res.status(200).json(newData)
})

route.patch('/:id', async (req, res)=>{
    const newData = await dbtuesdayschema.findByIdAndUpdate(req.params.id, req.body,{
       new:true, 
    });
    res.status(200).json(newData);
})

route.delete("/:id",  async(req, res) =>{
    const newData = await dbtuesdayschema.findOneAndDelete(req.params.id);
    res.status(200).send("Delete");
})


module.exports = route