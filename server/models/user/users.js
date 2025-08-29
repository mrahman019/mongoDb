//Models is a folder to store db schema
import mongoose, { Types } from "mongoose";

/*

fullname ==> string 
age ==> 20
is ALive ==> boolean
email ==> strimng 
password ==> string 

*/
const userSchema = new mongoose.Schema({

    fullName:{
        type:String,
    },
    age:{
        type: Number,
    },

    isAlive:{
        type: Boolean,
    },

    email:{
        type: String,
    },

    password:{
        type: String,
    },
});

const usermodel = mongoose.model("users, userschema")
export default usermodel


//1. make a schema 
//2. convert that into a model
//3. export default that model



