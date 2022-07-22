const axios = require('axios');
// process.env.API_KEY  
const APIKEY = 'a0b0347a76bd4fc3b1f7b38db53d0793';
const URL = `https://api.spoonacular.com/recipes/`;

exports.getRecipes = async (req, res) => {

        try {
            const { data } = await axios(`${URL}complexSearch?apiKey=${APIKEY}&addRecipeInformation=true`);
  const allRecipes = data.results.map((recipe) => {
                return {
                    id: recipe.id,
                    title: recipe.title,
                    img: recipe.image,
                    diets: recipe.diets
                    .map((d) => d)
                    .filter((d) => d != null)
                    .join(", "),
                };
            });
            return res.status(200).send(allRecipes);
        } catch (error) {
            res.send(error);
        }
    }





