// dismiss popup

if (
  document.querySelector(
    'body > div.page-layout.page-index > main > div.popup-screen'
  )
) {
  document
    .querySelector(
      'body > div.page-layout.page-index > main > div.popup-screen > div.content > div > div'
    )
    .click();
}