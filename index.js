
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
      document.getElementById("donut_list").innerHTML +=
        `<h1>${name}</h1>` + "<br>";
      document.getElementById("donut_list").innerHTML +=
        `<img src=${src} />` + "<br>";
    }
  }
}
