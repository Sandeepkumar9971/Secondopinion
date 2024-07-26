import mongoose from 'mongoose'

export async function connect(){
    try{
        await mongoose.connect("database String")
        console.log("Connection successfully established with MongoDB.")
    }catch(err){
        console.log("MongoDB connection FAILED: ",err)
    }
}