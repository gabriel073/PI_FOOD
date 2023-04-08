const axios = require("axios");
require("dotenv").config();
const fs = require("fs");
const { Recipe, Diet } = require("../src/db.js");

// const APIKEY = process.env.API_KEY;
// const URL = `https://api.spoonacular.com/recipe`;

exports.getRecipes = async (req, res) => {
  try {   
    let data = fs.readFileSync("bbdd.json");
    let allRecipes = JSON.parse(data);
    let recipesDb = await Recipe.findAll({
      include: {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    const recipesFormated = await recipesDb.map((recipe) => {
      return {
        id: recipe.id,
        name: recipe.name,
        img: recipe.img,
        healthScore: recipe.healthScore,
        diets: recipe.Diets.map((d) => d.name)
          .filter((d) => d != null)
          .join(", "),
      };
    });

    allRecipes = allRecipes.concat(recipesFormated);
    return res.status(200).send(allRecipes);
  } catch (error) {
    res.send(error);
  }
};
