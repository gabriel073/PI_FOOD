const axios = require('axios');
require('dotenv').config();
const  fs = require('fs');


const APIKEY = process.env.API_KEY;
const URL = `https://api.spoonacular.com/recipes/`;

exports.getRecipes = async (req, res) => {
    try {
        let rawData = fs.readFileSync("bbdd.json");
        let allRecipes = JSON.parse(rawData);
        console.log(allRecipes)
        // const { data } = await axios(`${URL}complexSearch?apiKey=${APIKEY}&addRecipeInformation=true&number=100`);
    // const allsRecipes = await allRecipes.map((recipe) => {
    //         return {
    //             id: recipe.id,
    //             name: recipe.title,
    //             img: recipe.image,
    //             healthScore: recipe.healthScore,
    //             diets: recipe.diets
    //              .map((d) => d)
    //              .filter((d) => d != null)
    //             .join(", "),
    //         };
    //     });
   
    return res.status(200).send(allRecipes);
} catch (error) {
    res.send(error);
}
}





