
// const { upload } = require("../../../middleware/files.middleware");

const { create, getById, getByName, getAll, update, deleteCircuit, sortCircuitsbyDescending, sortCircuitsbyAscending, filterGeneralNum, filterAndSort, averageStats} = require("../../controllers/MotoGP/Circuit.controller");


const CircuitRoutes = require("express").Router();

CircuitRoutes.post("/", upload.single("image"), create);
CircuitRoutes.get("/:id", getById);
CircuitRoutes.get("/", getAll);
CircuitRoutes.get("/byName/:name", getByName);
CircuitRoutes.patch("/:id", upload.single("image"), update);
CircuitRoutes.delete("/:id", deleteCircuit);
CircuitRoutes.get("/sortdescending/circuits/:stat", sortCircuitsbyDescending);
CircuitRoutes.get("/sortascending/circuits/:stat", sortCircuitsbyAscending);
CircuitRoutes.get("/filter/circuits/:filter/:gt/:lt", filterGeneralNum);
CircuitRoutes.get("/filtersort/circuits/:filter/:gt/:lt", filterAndSort);
CircuitRoutes.get("/average/:stat/:circuitId", averageStats);

module.exports = CircuitRoutes;
