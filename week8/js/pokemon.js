const queryUrl = "https://pokeapi.co/api/v2/pokemon?limit=90";
let start = 0;
let end = 9;

function displayPokemon(prevNext) {
  if (prevNext == "prev") {
    if (start == 0) {
      start = 80;
      end = 89;
    } else {
      start -= 10;
      end -= 10;
    }
  }
  if (prevNext == "next") {
    if (start == 80) {
      start = 0;
      end = 9;
    } else {
      start += 10;
      end += 10;
    }
  }

  console.log("start: " + start);
  console.log("end: " + end);

  fetch(queryUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.log(jsonObject);
      const outputDiv = document.getElementById("output");

      outputDiv.innerHTML = "";

      for (let i = start; i < end; i++) {
        let e = document.createElement("div");
        e.setAttribute("class", "pokemon");
        e.appendChild(document.createTextNode(jsonObject.results[i].name));
        outputDiv.appendChild(e);
      }
    });
}

displayPokemon();
