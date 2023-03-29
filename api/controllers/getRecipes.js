const axios = require('axios');
require('dotenv').config();
const  fs = require('fs');
const {Recipe}= require('../src/db.js')


const APIKEY = process.env.API_KEY;
const URL = `https://api.spoonacular.com/recipes/`;

exports.getRecipes = async (req, res) => {

    // let recipesDb = [];

    try {

        let data = fs.readFileSync("bbdd.json");
        let allRecipes = JSON.parse(data);
        // console.log(allRecipes)
       const recipesDb = await Recipe.findAll();
    //    console.log(recipesDb);

        allRecipes = allRecipes.concat(recipesDb);

        // console.log(recipesDb);

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





