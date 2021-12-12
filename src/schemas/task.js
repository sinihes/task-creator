const mongoose = require('mongoose')
const {Schema} = mongoose;

/* Creación del modelo */
const tareaSchema = new Schema({
    title: String,
    description: String,
    status: Boolean
})

module.exports = mongoose.model('Tarea', tareaSchema);