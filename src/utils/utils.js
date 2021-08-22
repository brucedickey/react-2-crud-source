export const validatePerson = (firstName, lastName, email) => {
  // A simplistic and incomplete email regex
  const emailRegex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,20}$/i;

  if (firstName.trim() === '' ) {
    alert('Please enter your first name.');
    document.getElementById('add-first-name').focus();  // focus() is deprecated in jQuery
    return false;
    
  } else if (lastName.trim() === '' ) {
    alert('Please enter your last name.');
    document.getElementById('add-last-name').focus();
    return false;

  } else if (email.trim() === '' ) {
      alert('Please enter your email address.');
      document.getElementById('add-email').focus();    
      return false;

  } else if (email.trim() !== '' && !emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      document.getElementById('add-email').focus(); 
      return false;
  }
  return true;
}
