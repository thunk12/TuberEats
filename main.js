function getRandom() {
  let maplink;
  let total = Math.random();

  // Food Name, Image, Map
  if (total < 0.1) {
    output = "a Pizza";
    var imgresult = "img/pizza.jpg";
    maplink = "https://www.google.com/maps/search/Pizza+Near+Me/";
  } else if (total < 0.2) {
    output = "some Indian Food";
    var imgresult = "img/paneer.jpg";
    maplink = "https://www.google.com/maps/search/Indian+Near+Me/";
  } else if (total < 0.3) {
    output = "some Chinese food";
    var imgresult = "img/chinese.jpg";
    maplink = "https://www.google.com/maps/search/Chinese+Near+Me/";
  } else if (total < 0.4) {
    output = "a Sushi Platter";
    var imgresult = "img/sushi.jpg";
    maplink = "https://www.google.com/maps/search/Sushi+Near+Me/";
  } else if (total < 0.5) {
    output = "a Steak";
    var imgresult = "img/steak.jpg";
    maplink = "https://www.google.com/maps/search/Steak+Near+Me/";
  } else if (total < 0.6) {
    output = "a Seafood Platter";
    var imgresult = "img/seafood.jpg";
    maplink = "https://www.google.com/maps/search/Seafood+Near+Me/";
  } else if (total < 0.7) {
    output = "some Pasta";
    var imgresult = "img/pasta.jpg";
    maplink = "https://www.google.com/maps/search/Pasta+Near+Me/";
  } else if (total < 0.8) {
    output = "some Poutine";
    var imgresult = "img/poutine.jpg";
    maplink = "https://www.google.com/maps/search/Poutine+Near+Me/";
  } else if (total < 0.9) {
    output = "some Fried Chicken";
    var imgresult = "img/chicken.jpg";
    maplink = "https://www.google.com/maps/search/Fried+Chicken+Near+Me/";
  } else {
    output = "a Burger";
    var imgresult = "img/burger.jpg";
    maplink = "https://www.google.com/maps/search/Burgers+Near+Me/";
  }

  // Outputs
  const a1 = imgresult;
  const image = document.getElementById("showfood");
  image.src = a1;
  document.getElementById("result").innerHTML = output;
  const link = document.getElementById("maplink");
  link.setAttribute("href", maplink);
}

// Buttons
document.getElementById("foodbtn").addEventListener("click", getRandom);
