import mongoose from "mongoose";

const connectDB = async () => {

    try{

        const connetionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\n Mongodb connected !!! ${connetionInstance.connection.host}`)

    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;