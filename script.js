import { cocktails } from './data.js'

const main = document.querySelector(".main-content");
const input = document.querySelector("#search");
const searchBtn = document.querySelector("#search-btn");

let cocktailsData = cocktails;

function renderData(cocktails) {
  for (let item of cocktails) {
    createCocktails(item);
    console.log(item, "el");
  }
}
renderData(cocktailsData);

function createCocktails(item) {
    const el = `
    <div id='${item.idDrink}' class="cocktails-item">
        <div class="img-wrapper">
            <img src="${item.strDrinkThumb}" alt="">
            <p class="'category-type">${item.strCategory}</p>
        </div>
        <p class='cocktail-name'>${item.strDrink}</p>
        <span>${item.strAlcoholic}</span>
    </div> `;
    main.innerHTML += el
}
