require('dotenv').config();


const { Diet } = require("../src/db.js");

exports.getDiets = async (req, res) => {

    const diets = ['Gluten Free', 'Dairy Free', 'Ketogenic', 'Vegetarian', 'Lacto Ovo Vegetarian', 'Vegan', 'Pescatarian', 'Paleo', 'Primal', 'FODMAP', 'Whole 30' ]
    try {
        diets.forEach((d) => {
            Diet.findOrCreate({
                where: { name: d },
            });
        });
        const dietDB = await Diet.findAll({order: [['name', 'ASC']]});
       
        res.status(200).json(dietDB);
        
    } catch (error) {
        return res.status(404).json(error);
    }
 
   }
