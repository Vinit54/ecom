import mongoose from "mongoose";

const Connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.qwh9k.mongodb.net/eComm?retryWrites=true&w=majority`
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected successfully");
  } catch (error) {
    console.log("Error", error.message);
  }
};

export default  Connection;
