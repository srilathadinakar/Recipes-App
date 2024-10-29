import recipes from "../Models/recipesSchema.js";

//create/post method
export const createRecipe = async (req, res) => {
  try {
    const newrecipe = new recipes(req.body);

    await newrecipe.save();
    res
      .status(200)
      .json({ message: "Recipe Added Successfully", data: newrecipe });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error in Create Recipe", data: error });
  }
};

// get method
export const getAllRecipes = async (req, res) => {
  try {
    const getRecipe = await recipes.find();
    res
      .status(200)
      .json({ message: "Recipes Retrived Successfully", data: getRecipe });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// get by id method
export const getRecipeById = async(req,res)=>{
  try {
    const recipeID = req.params.id;
    const recipe = await recipes.findById(recipeID);
    if(!recipe){
      return res.status(404).json({message:"Recipe Not Found"})
    }
    res.status(200).json({message:"Recipe Retrived Successfully",data:recipe})

  } catch (error) {
    res.status(500).json({message:error.message,})
  }
}

// update method
export const updateRecipe = async(req,res)=>{
  try {
    const recipeId = req.params.id;
    const{name,procedure,incredents,duration} = req.body;
    const result = await recipes.findByIdAndUpdate(
      {_id:recipeId},
      {name,procedure,incredents,duration},
      {new:true}
    );
    if(result.matchedCount === 0){
      return res.status(404).json({message:"Recipe Not Found"})
    }
    res.status(200).json({message:"Recipe Updated Successfully",data:result})

  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

//delete method
export const deleteRecipe = async(req,res)=>{
  try {
    const recipeId = req.params.id;
    const result = await recipes.findByIdAndDelete(
      {_id:recipeId},
    );
    if(!result){
      return res.status(404).json({message:"Recipe Not Found"})
    }
    const recipe = await recipes.find();
    res.status(200).json({message:"Recipe Deleted Successfully",data:recipe})
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}