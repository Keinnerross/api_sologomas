import { Router } from "express";
import { getBelts, getOneHeros, pushHeros, patchHeros, deleteHeros, deleteAll
} from "../controllers/belts.controllers.js";

const router = Router();

router.get("/pkbelts", getBelts);
router.get("/pkbelts/:id", getOneHeros);
router.post("/pkbelts",pushHeros );
router.patch("/pkbelts/:id", patchHeros);
router.delete("/pkbelts/:id", deleteHeros);
router.delete("/pkbelts/", deleteAll);
    
export default router;
