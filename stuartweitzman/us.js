// for search and buy - ignore oos items

function getInStockSizeOrWidth(id) {
  const tags = document.querySelectorAll(`#${id} > option`);
  let itemValue = [];

  for (let i = 0; i < tags.length; i++) {
    if (!tags[i].getAttribute("disabled")) {
      const tagValue = tags[i].getAttribute("value");
      if (tagValue !== "0") {
        itemValue.push(tagValue);
      }
    }
  }

  return itemValue[0];
}

const itemSize = getInStockSizeOrWidth("ddlSize");
const itemWidth = getInStockSizeOrWidth("ddlWidth");

// close chat

const slider = document.getElementById("needle_invSliderT4p");

if (slider) {
  document.querySelector("#needle_invSliderT4p > span:nth-child(3)").click();
}

window.scrollTo(0, document.body.scrollHeight);
