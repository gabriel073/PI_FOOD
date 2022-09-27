const { Recipe, Diet } = require("../src/db.js");


exports.addRecipe = async (req, res) => {
  const { name, summary, img, healthScore, steps, diets } = req.body;

  if (!name)
    return res.status(400).json("The name is required");
  if (!req.body)
    return res.status(400).json("The necessary information was not passed on");
    if (!summary)
    return res.status(400).json("The summary is required");
        if (!healthScore)
    return res.status(400).json("The healthScore is required");  
      if (!steps)
    return res.status(400).json("The steps is required");
    if (!diets)
    return res.status(400).json("The diets is required");


  try {
    const newRecipe = await Recipe.create({
      name:name, img:img, summary:summary, healthScore:healthScore, steps:steps

    });
    
    for (const d of diets) {
      let dietRecipe = await Diet.findOne({ where: { name: d } });
      await newRecipe.addDiet(dietRecipe);
  }  

const formateRecipe = {
      id:newRecipe.id, 
      name: newRecipe.name,
      img: newRecipe.img,
      summary: newRecipe.summary,
      healthScore: newRecipe.healthScore,
      steps: newRecipe.steps,

    diets: diets.map((d) => d)
    .filter((p) => p != null)
    .join(", "),
    }
    res.status(201).json(formateRecipe)
  } catch (error) {
    res.status(404).send(error);
  }

}

