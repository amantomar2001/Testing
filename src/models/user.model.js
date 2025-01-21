import mongoose, {mongo, schema} from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const UserSchema= new Schema(
{
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true, 
    },
    fullName: {
        type: String,
        required: true,
        trim: true, 
        index: true
    },
    avatar: {
        type: String, // cloudinary url
        required: true,
    },
    coverImage: {
        type: String, // cloudinary url
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    refreshToken: {
        type: String
    }

},{timestamps:true})
UserSchema.pre("save", async function(next){
    if(!this.isModified("password"){
      next()
    })
    this.password= await bcrypt.hash(this.password, 10)

    })
UserSchema.methods.comparePassword= async function(password){
    return await bcrypt.compare(password, this.password)
}
})
export const User= mongoose.model("User",UserSchema)