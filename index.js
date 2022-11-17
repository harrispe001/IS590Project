
function showDonutItems() {
    APIUrl = "https://ck8vh2jy5l.execute-api.us-east-1.amazonaws.com";
    fetch(APIUrl + "/items")
    .then((response) => response.json())
    .then((data) => parseDonutAPIData(data));
}
function parseDonutAPIData(data) {
  // An array of Items is returned, loop through them and print their values
  if (data.Items.length > 0) {
    for (let iCount = 0; iCount < data.Items.length; iCount++) {
      var src = JSON.stringify(data.Items[iCount].URL);
      var name = JSON.stringify(data.Items[iCount].Name);
      var pk = JSON.stringify(data.Items[iCount].pk);
      var sk = JSON.stringify(data.Items[iCount].sk);
      link = JSON.stringify(data.Items[iCount].pk + "!" + data.Items[iCount].sk);
      document.getElementById("donut_list").innerHTML +=
        `<div class="col-4 card">
            <h1>${name}</h1>
            <img src=${src} />
            <a href=/donut.html?donut=${link}>
              <button type="button" class="btn btn-secondary" type="submit">See more</button>
            </a>
        </div> `;
    }
  }
}
