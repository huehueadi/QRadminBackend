import mongoose from "mongoose";

const connectionDatabase = async()=>{
    try {
         await mongoose.connect("mongodb+srv://temploginoffice:PjXUP5BQwMxU3wSS@cluster0.leggj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
       });
         console.log("Database is connected")
    } catch (error) {
        console.log("Error while Connection to the Database", error)
    }
}

export default connectionDatabase