// question 1
console.log("Question 1");
// function getRemainder(a,b) {
//   return a % b;
//   }


const getRemainder = (a, b) => a % b;

let result = getRemainder(5, 3);
console.log(`Reminder is ${result}`);
console.log("--------------------------------------");



// question 2
console.log("Question 2");

const container = document.querySelector(".container");

let html = "";

const apiKey = '15db3b20c70a4fb9b9919516820637e3';

const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;


async function getData() {
  const response = await fetch(url);
  const results = await response.json();
  const resultsData = results.results;

  // console.log(resultsData);

  for (let i = 0; i < 8; i++) {

    let name = resultsData[i].name;
    let rating = resultsData[i].rating;
    let length = resultsData[i].tags.length;

    html = `<h1>Name of the game: <br> ${name}</h1>
            <p>Rating: ${rating} pts</p>
            <p>Amount of tags: ${length}</p>`;

    container.innerHTML += html;

    console.log("name:", i + 1, name);
    console.log("rating:", rating);
    console.log("tags:", length);
    console.log("--------------------------------------");
  }


}

getData();