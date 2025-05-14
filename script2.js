const password = document.getElementById('password');
const strengthText = document.getElementById('strength-text');
const strengthBar = document.getElementById('strength-bar');

password.addEventListener('input', () => {
  const val = password.value;
  let strength = 0;

  if (val.length > 6) strength++;
  if (/[A-Z]/.test(val)) strength++;
  if (/[0-9]/.test(val)) strength++;
  if (/[^A-Za-z0-9]/.test(val)) strength++;

  if (val.length === 0) {
    strengthText.textContent = '';
    strengthBar.style.background = '#334155';
  } else if (strength <= 1) {
    strengthText.textContent = 'Weak 😬';
    strengthBar.style.background = 'red';
  } else if (strength === 2 || strength === 3) {
    strengthText.textContent = 'Medium 😐';
    strengthBar.style.background = 'orange';
  } else if (strength === 4) {
    strengthText.textContent = 'Strong 💪';
    strengthBar.style.background = 'limegreen';
  }
});
