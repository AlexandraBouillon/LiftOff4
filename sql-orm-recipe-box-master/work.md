npx sequelize shows all sequelize commands


-- Phase 1 - Getting Started
-- [x] npm install
-- [x] npm run dev
-- [x] npx sequelize-cli init  (intializes Sequelize project structure)

-- [x] Phase 2a = Create Database user for project
-- [x] userName: sequelizerecipe_box_app
-- [x] pw: "HfKfK79k"
CREATE USER sequelizerecipe_box_app
with PASSWORD 'HfKfK79k';
-- CREATE ROLE


-- Phase 2b Change Connection configuration
-- [x] Change all the "user" and "password" values to the information for the user that you created in Phase 2.
-- [x] Change the "database" values to be "recipe_box_development", "recipe_box_test", and "recipe_box_production".
-- [x] Change all of the "dialect" values from "mysql" to "postgres".
-- [x] Delete all of the "operatorAliases" entries. It's to support earlier versions of the Sequelize library. Make sure to remove the comma from the preceding line so that it's valid JSON.
-- [x] add "seederStorage": "sequelize" to each of the different blocks so that Sequelize CLI won't run a seeder more than once causing duplicate entries in the database.


-- Phase 3 Create Database
npx sequelize db :create -- ^ creates database from config file
-- Sequelize CLI [Node: 14.5.0, CLI: 5.5.1, ORM: 5.21.5]
-- Loaded configuration file "config/config.json".
-- Using environment "development".



-- Phase 4: The units of measurement data
-- create table Measurement Units


-- create two files
npx sequelize model:generate
 --name 'MeasurementUnit'
 --attributes 'name:string'
-- create Model
-- create migration
Sequelize CLI [Node: 14.5.0, CLI: 5.5.1, ORM: 5.21.5]

New model was created at /Users/alexandrabouillon/Dropbox/My Mac (Alexandras-MacBook-Pro.local)/Desktop/sql-orm-recipe-box-master/models/measurementunit.js .
New migration was created at /Users/alexandrabouillon/Dropbox/My Mac (Alexandras-MacBook-Pro.local)/Desktop/sql-orm-recipe-box-master/migrations/20210329131604-MeasurementUnit.js .

-- "name" property, make non-nullable
--  add the "unique" property set to true
-- run migration


npx sequelize db:migrate
