import mongoose from "mongoose";


export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://shahulhameedyash:87786369@cluster0.pvoxl.mongodb.net/food-delivary').then(() => console.log("db connected"))
}

