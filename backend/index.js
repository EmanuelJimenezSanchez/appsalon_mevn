// const express = require('express') // CommonJS
import express from 'express' // ES6
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import { db } from './config/db.js'
import servicesRoutes from './routes/servicesRoutes.js'
import authRoutes from './routes/authRoutes.js'
import appointmentRoutes from './routes/appointmentRoutes.js'

// Variables de entorno
dotenv.config()

// Configurar la app
const app = express()

// Leer datos via body
app.use(express.json())

// Conectar a la base de datos
db()

// Configurar CORS
const whitelist = [process.env.FRONTEND_URL]

if(process.argv[2] === '--insomnia') {
  whitelist.push(undefined)
}

const corsOptions = {
  origin: function(origin, callback) {
    if(whitelist.includes(origin)) {
      // Permite la conexion
      callback(null, true)
    } else {
      // No permitir la conexion
      callback(new Error('Error de CORS'))
    }
  }
}

app.use(cors(corsOptions))

// Definir una ruta
app.use('/api/services', servicesRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/appointments', appointmentRoutes)

// Definir puerto
const PORT = process.env.PORT || 4000

//Arrancar la app
app.listen(PORT, () => {
  console.log( colors.blue(`El servidor se está ejecutando en el puerto: ${PORT}`))
})