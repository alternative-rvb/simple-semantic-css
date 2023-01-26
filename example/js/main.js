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
