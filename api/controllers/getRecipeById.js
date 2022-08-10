const axios = require('axios');
require('dotenv').config();
const APIKEY = process.env.API_KEY;
const URL = `https://api.spoonacular.com/recipes/`;
const { Diet, Recipe } = require("../src/db.js");

exports.getRecipeById = async (req, res) => {
    const { id } = req.params;
    let recipe = {};
    try {
        if (id.length < 10) {

            const { data } = await axios(`${URL}${id}/information?apiKey=${APIKEY}`);

            recipe = {
                id: data.id,
                name: data.title,
                img: data.image,
                diets: data.diets
                    .map((d) => d)
                    .filter((d) => d != null)
                    .join(", "),
                summary: data.summary,
                dishTypes: data.dishTypes
                    .map((d) => d)
                    .filter((d) => d != null)
                    .join(", "),
                healthScore: data.healthScore,
                steps: data.analyzedInstructions.length > 0 ? data.analyzedInstructions[0].steps[0].step : ""
            };
         

            return res.status(200).send(recipe);
        } else {
            recipe = await Recipe.findOne({
                where: { id: id },
                include: {
                    model: Diet,
                    attributes: ["name"],
                    through: { attributes: [] },
                },
            });

            const formatedDetail = {
                id: recipe.id,
                name: recipe.name,
                summary: recipe.summary,
                img: recipe.img,
                healthScore: recipe.healthScore,
                steps: recipe.steps,
                diets: recipe.Diets
                    .map((d) => d.name)
                    .filter((p) => p != null)
                    .join(", "),
            };

            return res.status(200).json(formatedDetail);
        }
    } catch (error) {
        res.send(error)
    }
}
