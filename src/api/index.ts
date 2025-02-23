import {Router} from "express";
import {createCollection, getCollection, getMonument, updateCollection} from "./collection-api";

const router = Router();

router.post("/collection", createCollection);
router.get("/collection/:userId", getCollection);
router.put("/collection", updateCollection);
router.get("/monument/:monumentKey", getMonument)

export default router;
