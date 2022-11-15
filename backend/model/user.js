import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import validator from 'validator'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: [2, "minimun 2letters"],
        maxlength: 30
    },
    lastname: {
        type: String,
        required: true,
        unique: false,
        lowercase: true,
        minlength: [2, "minimun 2letters"],
        maxlength: 30

    },
    email: {
        type: String,
        required: true,
        unique:true,
       validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Email is inValid");
        }
       }
    },
    phone: {
        type: String,
        required: true,
        unique:true,
        validate(value){
            if(!validator.isMobilePhone(value)){
                throw new Error("This is not a valid mobile number")
            }
        }
    },
    gender: {
        type: String,
        required: true,
        minlength: [2, "minimun 2letters"],
        maxlength: 30
    }
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');

// we need to turn it into a model
const postUser = mongoose.model('user', userSchema);

export default postUser;