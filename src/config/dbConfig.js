import mongoose from 'mongoose'

export async function connect(){
    try{
        await mongoose.connect('mongodb+srv://sandeephexbusiness:sandeep123@cluster0.ultbtfz.mongodb.net/doctor?retryWrites=true&w=majority')
        console.log("Connection successfully established with MongoDB.")
    }catch(err){
        console.log("MongoDB connection FAILED: ",err)
    }
}