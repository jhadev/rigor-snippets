// for search and buy - ignore oos items

function getInStockSize() {
  const tags = document.querySelectorAll("#ddlSize > option");
  let itemSize = [];

  for (let i = 0; i < tags.length; i++) {
    if (!tags[i].getAttribute("disabled")) {
      const tagValue = tags[i].getAttribute("value");
      if (tagValue !== "0") {
        itemSize.push(tagValue);
      }
    }
  }

  return itemSize[0];
}
