const fs = require("fs");

const { Diet, Recipe } = require("../src/db.js");

exports.getRecipeById = async (req, res) => {
  const { id } = req.params;
  let recipe = {};
  try {
    if (id.length < 10) {
      let data = fs.readFileSync("bbdd.json");
      let allRecipes = await JSON.parse(data);
      let index = allRecipes.findIndex((r) => r.id == id);
      recipe = allRecipes[index];

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
      console.log(formatedDetail);
      return res.status(200).json(formatedDetail);
    }
  } catch (error) {
    res.send(error);
  }
};
