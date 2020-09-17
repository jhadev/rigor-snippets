// close all bounce x

const alerts = document.querySelectorAll('[id ^= "bx-close-inside-"]');

if (alerts) {
  for (let i = 0; i < alerts.length; i++) {
    alerts[i].click();
  }
}

document.querySelector(
  '#cont > div:nth-child(2) > div > div.product-image > div.plp-exclusive-msg'
);

function getNonMemberItems() {
  let items = document.querySelectorAll('#isMemberExclusive');

  const nonMemberItems = [];

  items.forEach((item) => {
    if (item.getAttribute('value') === 'false') {
      nonMemberItems.push(item);
    }
  });

  let [firstItem] = nonMemberItems;

  const parent = firstItem.parentNode;

  console.log(parent.children);

  parent.children[3].click();
}

getNonMemberItems();
