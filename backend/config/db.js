import mongoose from 'mongoose'
import colors from 'colors'

export const db = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI)

    console.log(colors.cyan(`MongoDB connected: ${db.connection.host}`))
  } catch (error) {
    console.log('Error: ', error.message)
    process.exit(1)
  }
}