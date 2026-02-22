import mongoose from 'mongoose';


async function connect_db() {
  try {
    await mongoose.connect("mongodb://localhost:27017/user_manager");
    console.log("Database connected successfully!")
  } catch (err) {
    console.error(err.message)
  }
}

export default connect_db;
