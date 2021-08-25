export const validatePerson = (firstName, lastName, email) => {

  const errors = {};

  // A simplistic and incomplete email regex
  const emailRegex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,20}$/i;

  if (firstName === '' ) {
    errors.firstName = "First name is required."
  } 
  if (lastName === '' ) {
    errors.lastName = 'Last name is required'; 
  } 
  if (email === '' ) {
      errors.email = 'Email address is required';
  } 
  if (email !== '' && !emailRegex.test(email)) {
    errors.email = 'Enter a valid email address';
  }
  return errors;
}
