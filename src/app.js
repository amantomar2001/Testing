import express from "express"
const app= express()
import cors from "cors"
import cookieParser from "cookie-parser"
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true    
}))

app.use(express.json({limit:"16kb"}))

export {app}