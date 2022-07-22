const { getRecipeById } = require ('../../controllers/getRecipeById');
const { Router } = require('express');
const { getRecipes } = require('../../controllers/getRecipes.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/recipes', getRecipes);
router.get('/recipes/:id', getRecipeById);



module.exports = router;
