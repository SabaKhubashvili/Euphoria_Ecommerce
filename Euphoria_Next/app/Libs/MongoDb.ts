// path-to-db.js
import { MongoClient, MongoClientOptions } from 'mongodb';

const uri = process.env.NEXT_PUBLIC_DATABASE_URL;
const client = new MongoClient(uri || '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as MongoClientOptions); // Specify the MongoClientOptions type

async function connectDB() {
  try {
    await client.connect();
    return client; // Return the client instance
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export default connectDB;
