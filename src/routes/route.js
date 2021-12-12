const express = require('express');
const model = require('../schemas/task');
const route = express.Router();



/* Renderizar index.ejs */
route.get('/',(req,res)=>{
    model.find({},(err, tasks)=>{
        if(err) throw err;
        res.render('index',{
            tasks:tasks
        })
    })

})


/* Añadir una nueva tarea */
route.post('/add', (req,res) =>{
    let body = req.body;
    body.status = false;
    model.create(body, (err, task)=>{
        if(err) throw err;
        res.redirect('/')
    })

})


/* Cambiar el estado de la tarea de false a true */
route.get('/turn/:id', (req,res) =>{
    let id = req.params.id;
    model.findById(id, (err, task)=>{
        if(err) throw err;
        task.status = !task.status;
        task.save()
        .then(()=> res.redirect('/'))
    })
})



/*Borrar campos de tareas*/
route.get('/delete/:id', (req,res) =>{
    let id = req.params.id;
    model.remove({_id : id}, (err, task) =>{
        if(err) throw err;
        res.redirect('/')
    })
})



module.exports = route;