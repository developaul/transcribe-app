import mongoose from 'mongoose';

const mongoURI = process.env.MONGO_URI;

const cached: { connection?: typeof mongoose; promise?: Promise<typeof mongoose> } = {};

const connectMongo = async () => {
  if (!mongoURI)
    throw new Error('Please define the MONGO_URI environment variable inside .env.local')

  if (cached.connection)
    return cached.connection

  if (!cached.promise) {
    const opts = { bufferCommands: false }
    cached.promise = mongoose.connect(mongoURI, opts)
  }

  try {
    cached.connection = await cached.promise
  } catch (e) {
    cached.promise = undefined
    throw e
  }

  return cached.connection
}

export default connectMongo;