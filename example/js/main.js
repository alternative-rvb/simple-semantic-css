import {includeElmt} from "./include.js";
import {regionFilter} from "./filter.js";
console.log("script main loaded");

includeElmt("./components/header.html", document.getElementById("mainHeader"));
includeElmt("./components/footer.html", document.getElementById("mainFooter"));

regionFilter();

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
