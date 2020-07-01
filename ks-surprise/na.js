// first first in stock item

const tags = document.querySelectorAll(".product-tile");
let firstInStockItem;
for (let i = 0; i < tags.length; i += 1) {
  if (tags[i].getAttribute("data-availability") === "IN_STOCK") {
    firstInStockItem = tags[i];
    break;
  }
}

const itemId = firstInStockItem.getAttribute("id");

const childNodes = firstInStockItem.children;

console.log(childNodes[0].lastElementChild.href);
