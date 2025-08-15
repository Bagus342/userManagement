import { Router } from "express";
import * as penggunaController from "../controllers/pengguna.controller.js";
import { validate } from "../middlewares/validate.js";
import { penggunaValidation } from "../middlewares/pengguna.validation.js";

const router = Router()

router.get('/', penggunaController.getAllPengguna)
router.post('/', penggunaValidation, validate, penggunaController.createPengguna)
router.put('/:id', penggunaValidation, validate, penggunaController.updatePengguna)
router.delete('/:id', penggunaController.deletePengguna)

export default router