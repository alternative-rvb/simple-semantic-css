import {active} from "./active-link.js";

export const includeElmt = (path, elmt) => {
  console.log("script include loaded");
  fetch(path)
    .then((res) => res.text())
    .then((data) => {
      // elmt.innerHTML = data;
      //REVIEW Non visible dans le DOM
      elmt.innerHTML = data;
      active(elmt);
    });
};
