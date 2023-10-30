import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL || '').then(()=>{console.log('sucesfully conected')})
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDB;
