const axios = require("axios");
require("dotenv").config();

const { Diet, Recipe } = require("../src/db.js");

exports.getRecipeById = async (req, res) => {
  const { id } = req.params;
  let recipe = {};
  try {
    if (id.length < 10) {
      let data = fs.readFileSync("bbdd.json");
      let allRecipes = JSON.parse(data);
      recipe = allRecipes.map((r) => {
        if (r.id == id)
          return {
            id: r.id,
            name: r.name,
            summary: r.summary,
            img: r.img,
            healthScore: r.healthScore,
            steps: r.steps,
            diets: r.Diets.map((d) => d.name)
              .filter((p) => p != null)
              .join(", "),
          };
      });
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
        diets: recipe.Diets.map((d) => d.name)
          .filter((p) => p != null)
          .join(", "),
      };

      return res.status(200).json(formatedDetail);
    }
  } catch (error) {
    res.send(error);
  }
};
