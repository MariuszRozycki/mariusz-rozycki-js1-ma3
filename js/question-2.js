// question 2
const container = document.querySelector(".container");

const apiKey = '15db3b20c70a4fb9b9919516820637e3';

const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;


async function getData() {

  try {

    const response = await fetch(url);
    const results = await response.json();
    const resultsData = results.results;

    console.log(resultsData);

    container.innerHTML = `<h1>List of games:</h1>`;

    for (let i = 0; i < resultsData.length; i++) {

      if (i === 8) {
        break;
      }

      let name = resultsData[i].name;
      let rating = resultsData[i].rating;
      let length = resultsData[i].tags.length;

      let html =
        `<div>Game nr ${i + 1}:</div>
        <span>--------------</span>
        <p>Title: "${name}"</p>
        <p>Rating: ${rating} pts</p>
        <p>Amount of tags: ${length}</p>
        <br>`;

      container.innerHTML += html;

      console.log("name:", i + 1, name);
      console.log("rating:", rating);
      console.log("tags:", length);
      console.log("--------------------------------------");
    }

  } catch (error) {

    let errorHtml =
      `<div class="catch-error">
        <p>Problem:</p>
        <p>${error}</p>
      </div>`
    container.innerHTML = displayError() + errorHtml;
    console.log("Error occurred", error);

  }
}

getData();