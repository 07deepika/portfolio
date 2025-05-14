const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = 'Switch to Light Mode';
} else {
  body.classList.add('light-mode');
  toggleBtn.textContent = 'Switch to Dark Mode';
}
toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    toggleBtn.textContent = 'Switch to Light Mode';
    localStorage.setItem('theme', 'dark'); 
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    toggleBtn.textContent = 'Switch to Dark Mode';
    localStorage.setItem('theme', 'light'); 
 }
});
