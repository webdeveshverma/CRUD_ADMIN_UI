import mongoose  from "mongoose";

const  adminSchema= mongoose.Schema({

    email:{
        type:String,
        require:true,
        unique:false,
        trim:true,
    
    },
    password:{
        type:String,
        require:true,
        unique:true
    },
});


const postAdmin=new mongoose.model('admin',adminSchema);

export default postAdmin;