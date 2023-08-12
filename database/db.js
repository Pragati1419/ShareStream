import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const DBConnection = async() => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;
    const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-ofwtpvy-shard-00-00.j0re7oz.mongodb.net:27017,ac-ofwtpvy-shard-00-01.j0re7oz.mongodb.net:27017,ac-ofwtpvy-shard-00-02.j0re7oz.mongodb.net:27017/?ssl=true&replicaSet=atlas-fr93zr-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
      await mongoose.connect(MONGODB_URI ,
        {
            useNewUrlParser : true,
        });
        console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting to the database ', error.message);
    }
}
export default DBConnection;