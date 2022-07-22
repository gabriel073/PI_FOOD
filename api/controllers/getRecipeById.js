const axios = require('axios');
// process.env.API_KEY  
const APIKEY = 'a0b0347a76bd4fc3b1f7b38db53d0793';
const URL = `https://api.spoonacular.com/recipes/`;

exports.getRecipeById = async (req, res) => {
    const { id } = req.params;
        //https://api.spoonacular.com/recipes/{id}/information
        try {
            const { data } = await axios(`${URL}${id}/information?apiKey=${APIKEY}`);
            const recipe = {
                name: data.title,
                img: data.image,
                diets: data.diets
                    .map((d) => d)
                    .filter((d) => d != null)
                    .join(", "),
            };


            return res.status(200).send(recipe);
        } catch (error) {
            res.send(error)
        }
   }
