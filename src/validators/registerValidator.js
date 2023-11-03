import Joi from "joi";

const registerValidator = Joi.object({
    username:Joi.string().pattern(/^[a-zA-Z]\w{1,19}$/).required().messages({
        "string.pattern.base":"First letter, then letters, digits or '_', min 2, max 20 characters"
    }),
    password: Joi.string().pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])\S{8,20}$/).required().messages({
        "string.pattern.base":"Min 1 digit, min 1 uppercase, min 1 special character, min 1 lowercase, 8-20 characters"
    }),
    re_password: Joi.any().equal(Joi.ref("password")).required().messages({
        "any.only":"password doesn't match"
    })
})

export {
    registerValidator
}