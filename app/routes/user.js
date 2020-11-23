import { Router } from 'express';
const router = Router();

import { create, findOne, findAll, update, remove } from '../controllers/user.controller.js';

router.post("/", create);
router.get("/", findAll);
router.get("/:id", findOne);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;