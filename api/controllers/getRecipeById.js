const axios = require('axios');
require('dotenv').config();
const APIKEY = process.env.API_KEY;
const URL = `https://api.spoonacular.com/recipes/`;

exports.getRecipeById = async (req, res) => {
    const { id } = req.params;
 
        //https://api.spoonacular.com/recipes/{id}/information
        try {
            const { data } = await axios(`${URL}${id}/information?apiKey=${APIKEY}`);
            
            const recipe = {
                id:data.id,
                name: data.title,
                img: data.image,
                diets: data.diets
                    .map((d) => d)
                    .filter((d) => d != null)
                    .join(", "),
                    summary:data.summary,
                    healthScore: data.healthScore,
                    steps:  data.analyzedInstructions[0].steps[0].step,
                                          };
                    

      
            return res.status(200).send(recipe);
        } catch (error) {
            res.send(error)
        }
   }
