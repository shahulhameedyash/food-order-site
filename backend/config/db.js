import mongoose from "mongoose";


export const connectDb = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/food-delivary').then(() => console.log("db connected"))
}

