// const express = require('express') // CommonJS
import express from 'express' // ES6
import { db } from './config/db.js'
import servicesRoutes from './routes/servicesRoutes.js'

// Configurar la app
const app = express()

// Conectar a la base de datos
db()

// Definir una ruta
app.use('/api/services', servicesRoutes)

// Definir puerto
const PORT = process.env.PORT || 4000

//Arrancar la app
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})