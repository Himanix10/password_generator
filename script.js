function generatePassword() {
  const length = parseInt(document.getElementById('length').value);
  const includeUppercase = document.getElementById('uppercase').checked;
  const includeLowercase = document.getElementById('lowercase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSymbols = document.getElementById('symbols').checked;

  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+{}[]<>?';

  let allChars = '';
  if (includeUppercase) allChars += uppercase;
  if (includeLowercase) allChars += lowercase;
  if (includeNumbers) allChars += numbers;
  if (includeSymbols) allChars += symbols;

  if (allChars === '') {
    alert('Please select at least one character type!');
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.getElementById('password').value = password;
}

function copyPassword() {
  const passwordField = document.getElementById('password');
  if (passwordField.value === '') {
    alert('No password to copy!');
    return;
  }
  passwordField.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
}
