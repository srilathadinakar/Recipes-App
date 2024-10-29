import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import recipeRoute from './Routers/recipesRouter.js';
import connectDB from './Database/dbConfig.js';

//dotenv config
dotenv.config();

//initialize
const app = express();

// cors middleware
app.use(cors({
    origin:"*",
    credentials:true,
    methods:["GET","POST","PUT","DELETE"]
}))

//default middleware for req.body
app.use(express.json());

connectDB();

//Default route for cannot get
app.get("/",(req,res)=>{
    res.status(200).send("Welcome to Our API")
});

//custom routes from routers
app.use("/api/recipe", recipeRoute)

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server is started and running on the port");
    
})