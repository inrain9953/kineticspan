import mongoose from "mongoose";

const kineticModel = new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    message:String,
});

export const KineticProduct = mongoose.models.kinetic || mongoose.model("kinetic", kineticModel)