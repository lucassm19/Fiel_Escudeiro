// Importando as dependências do projeto
const express = require('express');
const sheets = require("./src/controllers/SheetController");
const routes = express.Router();
// associa as rotas ao seu método do ClientController
routes.get("/sheets", sheets.findAll);
routes.get("/sheets/:id", sheets.show);
routes.post("/sheets", sheets.store);
routes.put("/sheets/:id", sheets.update);
routes.delete("/sheets/:id", sheets.destroy);
module.exports = routes;