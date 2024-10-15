import * as yup from 'yup';

const authSchema = yup.object().shape({
  email: yup.string()
    .email('Invalid email address') // Custom error message for invalid email
    .required('Email is required')
    .trim()
    .lowercase(),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password must be at most 20 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[\W_]/, 'Password must contain at least one special character'),
});

// formData is a plain JS object containing the key value pairs of the input
export const customValidate = async (formData) => {
  let errors = {};

  // Validate email first
  try {
    await authSchema.validateAt('email', formData);
  } catch (err) {
    errors.email = err.message;
  }

  // Only run password validation if there are no email errors
  if (!errors.email) {
    try {
      await authSchema.validateAt('password', formData);
    } catch (err) {
      errors.password = err.message;
    }
  }

  return errors;
};
