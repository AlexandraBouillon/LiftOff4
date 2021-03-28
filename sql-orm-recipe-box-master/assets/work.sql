-- Phase 1 - Getting Started
-- npm install
-- npm run dev
-- npx sequelize-cli init  (intializes Sequelize project structure)

-- Phase 2a = Create Database user for project
-- userName: sequelizerecipe_box_app
-- pw: "HfKfK79k"
CREATE USER sequelizerecipe_box_app with PASSWORD "HfKfK79k";

CREATE DATABASE sequelizerecipe_box WITH OWNER sequelizerecipe_box_app;

-- Phase 2b Change Connection configuration
