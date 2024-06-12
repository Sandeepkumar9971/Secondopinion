import mongoose from "mongoose";

const specializationsSchma = new mongoose.Schema({
    id:String,
    spec:String,
})

export const Specialization = mongoose.models.specializations || mongoose.model("specializations",specializationsSchma)



const stateschema = new mongoose.Schema({
    name:String,
    id:Number

})
export const statedata = mongoose.models.states|| mongoose.model('states',stateschema)

const cityschema = new mongoose.Schema({
    name:String,
    id:Number

})
export const citydata = mongoose.models.cities || mongoose.model('cities',cityschema)


const countryschema = new mongoose.Schema({
    name:String,
    id:Number
})
export const countrydata = mongoose.models.countrydatas || mongoose.model('countrydatas',countryschema)
