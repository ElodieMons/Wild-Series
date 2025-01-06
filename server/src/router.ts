import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

// Declaration of Welcome route
import sayActions from "./modules/item/say/sayActions";
// Register route
router.get("/", sayActions.sayWelcome);

//Declaration of Pprogram route
import programActions from "./modules/item/programActions";
// Register route
router.get("/api/programs", programActions.browse);

export default router;
