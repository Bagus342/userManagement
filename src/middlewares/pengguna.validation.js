import { body } from "express-validator";

export const penggunaValidation = [
    body('email').isEmail().withMessage('Invalid email format'),

    body('phone').isNumeric().withMessage('Phone must be numeric')
    .isLength({ min: 10 }).withMessage('Phone length min 10')
]