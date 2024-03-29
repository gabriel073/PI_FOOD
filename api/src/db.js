require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
// const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

let sequelize =
  process.env.MYSQL_URL === "production"
    ? new Sequelize({
      // database: DB_NAME,
      database: MYSQLDATABASE,
      dialect: "postgres",
      // host: DB_HOST,
      host: MYSQLHOST,
      // port: DB_PORT,
      port: MYSQLPORT,
      // username: DB_USER,
      username: MYSQLUSER,
      // password: DB_PASSWORD,
      password: MYSQLPASSWORD,
      pool: {
        max: 3,
        Min: 1,
        idle: 10000,
      },
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
        keepAlive: true,
      },
      ssl: true,
    })
    : new Sequelize(`postgres://${MYSQLUSER}:${MYSQLPASSWORD}@${MYSQLHOST}/food`, {
      logging: false,
      native: false,
    });
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
// modelRecipe(sequelize)
const { Recipe, Diet } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
// 'carnicor , vegetarino , omnivora  , pesquero'
//* muchos -> muchos

Recipe.belongsToMany(Diet, { through: "type_recipe" });
Diet.belongsToMany(Recipe, { through: "type_recipe" });

//* uno -> muchos
// type.hasMany(recipe)
// recipe.belongsTo(type)

//* uno -> uno
// type.hasOne(recipe)
// recipe.belongsTo(type)

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importar la conexión { conn } = require('./db.js');
};
