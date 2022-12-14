console.log("script filter loaded");
export const regionFilter = () => {
  // FILTRER LES DEPARTEMENTS
  const cat = document.querySelector("#cat");
  const age = document.querySelector("#age");
  const result = document.createElement("div");
  if (cat) {
    cat.addEventListener("change", (e) => {
      // console.log(age.options);
      for (let i = 0; i < age.options.length; i++) {
        if (e.target.value === age.options[i].value) {
          console.log("OK");
          console.log(e.target.value);
          console.log(age.options[i].value);
          result.style.fontSize = "10px";
          result.style.color = "white";
          result.innerHTML = "Wait...🗘";
          break;
          location.href = age.options[i].dataset.url;
          // e.target.value = "";
        } else {
          result.style.fontSize = "10px";
          result.style.color = "red";
          result.innerHTML = "Choisissez une autre catégorie dans la liste";
          cat.parentNode.insertBefore(result, cat.nextSibling);
        }
      }
    });
  }
};
