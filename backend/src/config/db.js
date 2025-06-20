import mongoose from "mongoose"


export const dbConnection = async (URI,callback)=> {
    try {
        const db = await mongoose.connect(URI)
    console.log("DB connected to", db.connection.host )
    callback()
        
    } catch (error) {
        console.log('error in connection to DB ', error.message)
       process.exit(1) // 1 is for falilure and 0 is for success 
    }
}