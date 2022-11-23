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
      var src = data.Items[iCount].URL;
      var name = data.Items[iCount].Name;
      var pk = data.Items[iCount].pk;
      var sk = data.Items[iCount].sk;
      var link = data.Items[iCount].pk + "!" + data.Items[iCount].sk;
      document.getElementById(
        "donut_list"
      ).innerHTML += `<div class="col-3 card">
        <a href=donut.html?donut=${link}>
            <img src=${src} />
              <h2>${name}</h1>
            </a>
        </div> `;
    }
  }
}
