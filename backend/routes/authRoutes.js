import express from 'express'
import { login, register, user, verifyAccount } from '../controllers/authController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

// Rutas de autenticacion y registro de usuarios
router.post('/register', register)
router.get('/verify/:token', verifyAccount)
router.post('/login', login)

// Area Privada - Requiere JWT
router.get('/user', authMiddleware, user)

export default router