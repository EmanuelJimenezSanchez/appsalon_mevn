import mongoose from 'mongoose'

export const db = async () => {
  try {
    const db = await mongoose.connect('mongodb+srv://root:HhXp9otsOIjDv0dY@cluster0.f02twmo.mongodb.net/?retryWrites=true&w=majority')

    console.log(`MongoDB connected: ${db.connection.host}`)
  } catch (error) {
    console.log('Error: ', error.message)
    process.exit(1)
  }
}