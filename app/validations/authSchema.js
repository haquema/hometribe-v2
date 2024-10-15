import * as yup from 'yup';

export const authSchema = yup.object().shape({
  email: yup.string()
    .trim()
    .lowercase()
    .email('Invalid email address') // Custom error message for invalid email
    .required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password must be at most 20 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Passowrd must contain at least one number')
    .matches(/[\W_]/, 'Password must contain at least one special character'),
});