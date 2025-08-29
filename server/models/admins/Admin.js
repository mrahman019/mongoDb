import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type: string,
    },

    gender:{
        type: string,
    },

    email:{
        type: string,
    },
    phone:{
        type: string,
    },
    isAlive:{
        type: Boolean,
    },

    address:{
        type: string,

    },

    profilepic:{
        type: string,
    },


});
