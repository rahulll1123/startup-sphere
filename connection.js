import mongoose from "mongoose";
async function connectdbs() {
    const conn = await mongoose.connect("mongodb+srv://raj902121raj:rahulpandit123@database.ox2us.mongodb.net/")
}

export { connectdbs }