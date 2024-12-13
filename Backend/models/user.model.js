import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true, lowercase: true },
    password: { type: String, require: true },
    confirmpassword: { type: String, require: true },
},
    {
        timestamps: true, //for keeping record when the user is created and when it was updated..
    }
);

const User = mongoose.model("User", userSchema);
export default User;