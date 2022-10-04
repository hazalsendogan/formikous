import { object, string, number, date, InferType,ref } from 'yup';

const validations = object({
    firstName: string().required(),
    lastName: string().required(),
    age: number().required().positive().integer(),
    email: string().email().required(),
    password: string().min(5).required(),
    passwordConfirm: string().oneOf(["password"]).required()
  });

export default validations;