import { validationResult } from "express-validator";

export const validate = (req, res, next) => {
    const error = validationResult(req)
    if ( !error.isEmpty() ) {
        return res.status(400).json({
            success: false,
            errors: error.array().map((err) => ({
                field: err.path,
                message: err.msg
            }))
        })
    }
    next()
}