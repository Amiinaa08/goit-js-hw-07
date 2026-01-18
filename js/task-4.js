const form = document.getElementsByClassName('login-form')[0];
form.addEventListener('submit', event => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  const actualEmail = email.value.trim();
  const actualPassword = password.value.trim();
  if (actualEmail === '' || actualPassword === '') {
    alert('All form fields must be filled in');
    return;
  }
  const formData = {
    email: actualEmail,
    password: actualPassword,
  };
  console.log(formData);
  event.currentTarget.reset();
});
