// close all bounce x

const alerts = document.querySelectorAll('[id ^= "bx-close-inside-"]');

if (alerts) {
  for (let i = 0; i < popups.length; i++) {
    alerts[i].click();
  }
}
