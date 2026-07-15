import express from "express";

import {
    createTalent,
    getTalents,
    getTalentById,
    updateTalent,
    deleteTalent,
} from "../controllers/talentController.js";

const router = express.Router();

router.post("/", createTalent);

router.get("/", getTalents);

router.get("/:id", getTalentById);

router.put("/:id", updateTalent);

router.delete("/:id", deleteTalent);

export default router;