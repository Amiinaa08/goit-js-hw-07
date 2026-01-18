const form = document.getElementsByClassName('login-form')[0];
form.addEventListener('submit', event => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === '' || password.value === '') {
    alert('All form fields must be filled in');
    return;
  }
  const formData = {
    email: form.elements.email.value.trim(),
    password: form.elements.password.value.trim(),
  };
  console.log(formData);
  event.currentTarget.reset();
});
