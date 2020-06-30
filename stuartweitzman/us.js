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

// close chat

const slider = document.getElementById("needle_invSliderT4p");

if (slider) {
  document.querySelector("#needle_invSliderT4p > span:nth-child(3)").click();
}

window.scrollTo(0, document.body.scrollHeight);
