import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
    name:String,
    procedure:String,
    incredents:[],
    duration:String,
})

const recipes = mongoose.model("recipes",recipeSchema);

export default recipes;