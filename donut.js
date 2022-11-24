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
    console.log(donutValue);

    APIUrl = "https://ck8vh2jy5l.execute-api.us-east-1.amazonaws.com";
    fetch(APIUrl + "/items" + donutValue)
        .then((response) => response.json())
        .then((data) => parseOneDonut(data));
}

function parseOneDonut(data) {
    // An array of Items is returned, loop through them and print their values
    var src = data.Item.URL;
    var name = data.Item.Name;
    var pk = data.Item.pk;
    var sk = data.Item.sk;
    var link = data.Item.pk + "!" + data.Item.sk;
    var price = data.Item.price;
    var allergens = data.Item.allergens;
    var quote = data.Item.quote;

    document.getElementById(
        "donut_list"
    ).innerHTML += `<div class="col-6 text-center">
      <img src=${src} />
      <h2>${price}</h2>
    </div> 
    <div class="col-6 text-center">
      <h2 class="title">${name}</h1>
      <p>${quote}</p>
      <a href="https://s3.amazonaws.com/kkd-e1-images.kktestkitchen.com/ecomm/nutrition/11010-nutrition.pdf" id="ctl00_plcMain_linkNutritionCta" class="btn btn-primary shadow cta-primary nutrition" data-track="item-detail-nutrition" target="_blank"><span>Nutritional &amp; Allergen Info</span></a>
    </div>`;
}
