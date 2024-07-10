document.getElementById('luckButton').addEventListener('click', () => {
  const logo = document.getElementById('logo');
  if (logo.src.includes('google-logo-2x.png')) {
    logo.src = '../images/oddity-logo.png';
    logo.alt = 'Oddity';
  } else {
    logo.src = '../images/google-logo-2x.png';
    logo.alt = 'Google';
  }
});
