// disable all videos

const videos = document.getElementsByTagName('video');

if (videos) {
  for (let i = 0; i < videos.length; i++) {
    videos[i].removeAttribute('autoplay');
    videos[i].removeAttribute('loop');
  }
}
for (let i = 0; i < videos.length; i++) {
  videos[i].removeAttribute('autoplay');
  videos[i].removeAttribute('loop');
}

videos.forEach((video) => {
  video.removeAttribute('autoplay');
  video.removeAttribute('loop');
});

// dismiss bounce x

if (document.querySelector('[id^="bx-creative-"]')) {
  document.querySelector('[id^="bx-close-inside-"]').click();
}

// dismiss ALL bounce x
const alerts = document.querySelectorAll('[id ^= "bx-close-inside-"]');

if (alerts) {
  for (let i = 0; i < alerts.length; i++) {
    alerts[i].click();
  }
}

<<<<<<< HEAD
// choose random search

function getRandomTerm(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
=======
// for akamamai page integrity
// page-integrity=force-injection

// https://uk.coach.com/on/demandware.store/Sites-Coach_EU-Site/en_GB/OptIn-EmailModal

// https://de.coach.com/on/demandware.store/Sites-Coach_EU-Site/de_DE/OptIn-EmailModal
>>>>>>> 7e1e61a9c25f243075936fc0739122f7b62e2b24
