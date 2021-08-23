export function passwordValidator(password) {
  const rp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (!password) {
    return "Password can't be empty.";
  }
  if (!rp.test(password)) {
    return 'Pelase Input Valid Password.';
  }
  if (/\s/.test(password)) {
    return 'Password Cannot Contain white Space';
  }
  return '';
}
