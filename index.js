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
            var link =
                "/" + data.Items[iCount].pk + "!" + data.Items[iCount].sk;
            document.getElementById(
                "donut_list"
            ).innerHTML += `<div class="col-xl-3 col-lg-4 col-sm-8 col-xs-10  col-md-6 card">
        <a href="donut.html?donut=${link}">
            <img class="img-responsive" src=${src} />
              <h2>${name}</h1>
            </a>
        </div> `;
        }
    }
}

function activeNavElement(activeId) {
    var Ids = ["Home", "About", "Arch"];
    for (var i in Ids) {
        var element = document.getElementById(Ids[i]);
        var child = element.children[0];
        if (Ids[i] == activeId) {
            element.classList.add("active");
            child.classList.add("active");
        } else {
            if (element.classList.contains("active")) {
                element.classList.remove("active");
                child.classList.remove("active");
            }
        }
    }
}
