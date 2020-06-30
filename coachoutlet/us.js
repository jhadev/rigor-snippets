// close all bounce x

const alerts = document.querySelectorAll('[id ^= "bx-close-inside-"]');

if (alerts) {
  for (let i = 0; i < alerts.length; i++) {
    alerts[i].click();
  }
}
