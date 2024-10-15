import * as yup from 'yup';

export const subscriptionFormSchema = yup.object().shape({
  email: yup.string()
    .trim()
    .lowercase()
    .email('Invalid email address') // Custom error message for invalid email
    .required('Email is required'),
});