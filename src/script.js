const darkModeBtn = document.getElementById('toggleDarkMode');

darkModeBtn.addEventListener('click', () => {
  const htmlObj = document.getElementsByTagName('html');
  darkModeBtn.innerText = darkModeBtn.innerText.includes('☀️') ? '🌙' : '☀️';
  darkModeBtn.innerHTML.includes('☀️')
    ? (htmlObj[0].className = 'light')
    : (htmlObj[0].className = 'dark');
});
