import {Router} from "express";
import {createCollection, getCollection, getMonument, updateCollection} from "./collection-api";

const router = Router();

router.post("/collection", createCollection);
router.put("/collection", updateCollection);
router.get("/collection", getCollection);
router.get("/monument", getMonument)

export default router;
