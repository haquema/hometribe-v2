import * as yup from 'yup';

export const emailSchema = yup.object().shape({
  email: yup.string()
    .trim()
    .lowercase()
    .email('Invalid email address') // Custom error message for invalid email
    .required('Email is required'),
});