function get_donut() {
  //   let paramString = window.location.search;
  // let queryString = new URLSearchParams(paramString);

  // for (let pair of queryString.entries()) {
  // console.log("Key is: " + pair[0]);
  // console.log("Value is: " + pair[1]);
  // }
  //   var donut = paramSting;

  const urlParams = new URLSearchParams(window.location.search);
  const donutValue = urlParams.get("donut");
  console.log(donut);

  APIUrl = "https://ck8vh2jy5l.execute-api.us-east-1.amazonaws.com";
  fetch(APIUrl + "/items" + donut)
    .then((response) => response.json())
    .then((data) => parseDonutAPIData(data));
}
