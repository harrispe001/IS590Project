function get_donut() {
    let paramString = window.location.search;
    let queryString = new URLSearchParams(paramString);

    for (let pair of queryString.entries()) {
    console.log("Key is: " + pair[0]);
    console.log("Value is: " + pair[1]);
    }

}