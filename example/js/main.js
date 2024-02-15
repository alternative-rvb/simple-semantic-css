import {includeElmt} from "./include.js";
import {regionFilter} from "./filter.js";
import {active, fx} from "./header-tool.js";
console.log("script main loaded");

const head = document.querySelector("head")
const mainHeader = document.querySelector("#mainHeader");
const mainFooter = document.querySelector("#mainFooter");

includeElmt("./components/head.html").then((data) => {
  head.innerHTML += data;
});

includeElmt("./components/header.html").then((data) => {
  mainHeader.innerHTML = data;
  active(mainHeader);
  fx(mainHeader);
});

includeElmt("./components/footer.html").then((data) => {
  mainFooter.innerHTML = data;
});

regionFilter();

async function fetchKitsuData() {
  const apiUrl = `https://kitsu.io/api/edge/manga?page[limit]=18`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
  displayKitsuData(data.data);
}

function displayKitsuData(results) {
  const resultsContainer = document.getElementById("kitsu-results");
  resultsContainer.innerHTML = ""; // Clear the current content

  results.forEach(result => {
    const manga = result.attributes;
    const coverUrl = manga.posterImage.medium || "https://placehold.co/195x277/CC66FF/FFFFFF/?text=NO+COVER&font=oxygen";

    const article = document.createElement("article");
    article.classList.add("art-book", "d-flex", "g-1", "p-1", "rounded");

    const leftDiv = document.createElement("div");
    leftDiv.classList.add("art-book__left");

    const img = document.createElement("img");
    img.src = coverUrl;
    img.alt = manga.titles.en || manga.titles.en_jp || "Titre du livre";
    img.loading = "lazy";
    leftDiv.appendChild(img);

    const rightDiv = document.createElement("div");
    rightDiv.classList.add("art-book__right", "d-flex", "fd-column");

    const h3 = document.createElement("h3");
    h3.textContent = manga.titles.en || manga.titles.en_jp || "Titre du livre";
    rightDiv.appendChild(h3);

    const pSynopsis = document.createElement("p");
    const synopsis = manga.synopsis || "";
    pSynopsis.textContent = synopsis.length > 150 ? synopsis.substring(0, 150) + "..." : synopsis;
    rightDiv.appendChild(pSynopsis);

    const pMeta = document.createElement("p");
    pMeta.classList.add("meta");
    
    const authorSpan = document.createElement("span");
    authorSpan.classList.add("meta__author");
    const authorIcon = document.createElement("i");
    // date
    authorIcon.classList.add("fa-solid", "fa-calendar");
    const authorText = document.createTextNode(` Date: ${manga.startDate || 'Inconnu'}`);
    authorSpan.appendChild(authorIcon);
    authorSpan.appendChild(authorText);
    
    const categorySpan = document.createElement("span");
    categorySpan.classList.add("meta__category");
    const categoryIcon = document.createElement("i");
    categoryIcon.classList.add("fa-solid", "fa-tag");
    const categoryText = document.createTextNode(` Type: ${manga.mangaType || 'Inconnue'}`);
    categorySpan.appendChild(categoryIcon);
    categorySpan.appendChild(categoryText);
    
    pMeta.appendChild(authorSpan);
    pMeta.appendChild(document.createTextNode(' | '));
    pMeta.appendChild(categorySpan);
    rightDiv.appendChild(pMeta);

    article.appendChild(leftDiv);
    article.appendChild(rightDiv);
    resultsContainer.appendChild(article);
  });
}



fetchKitsuData();




//----------------------------------------------------------------------

// class MyHeader extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `
//         Hello
//         `;
//   }
// }

// customElements.define("my-header", MyHeader);

//----------------------------------------------------------------------

// const mainHeader = document.getElementById("mainHeader");

// fetch("./components/header.html")
//   .then((res) => res.text())
//   .then((data) => {
//     mainHeader.innerHTML = data;
//   });

// const mainFooter = document.getElementById("mainFooter");

// fetch("./components/footer.html")
//   .then((res) => res.text())
//   .then((data) => {
//     mainFooter.innerHTML = data;
//   });
