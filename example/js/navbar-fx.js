console.log("cstom.js is loading ...");

const info = document.createElement("div");
info.classList.add("info");
document.body.appendChild(info);
info.innerHTML= "▲";

window.addEventListener("scroll", () => {
  //   info.innerHTML = "Scroll position";
  const position = window.pageYOffset;
  const navBar = document.querySelector(".topBar");
  if (position > 16) {
    navBar.style.background = "#6A4B1C";
  } else {
    navBar.style.background = "none";
  }
  //   info.innerHTML = window.pageYOffset;
  //   const boxInfo = document.querySelector(".info");
  //   boxInfo.innerHTML = "GET STARTED";
  //   boxInfo.style.cursor = "pointer";
});

window.addEventListener("click", (e) => {
  console.log("e => ", e);

  const punch = document.createElement("div");
  punch.className = "punch";
  /* FIXME VOIR SI C'est NECESSAIRE AVEC TRANSFORM ORIGIN*/
  for (let index = 0; index < 6; index++) {
    
    console.log(1 + index);
    setTimeout(() => {
      punch.style.top = `calc(${e.pageY}px - 15vh`;
      punch.style.left = `calc(${e.pageX}px - 15vh`;
      document.body.appendChild(punch);
      // setTimeout(() => {
      //   punch.remove();
      // }, 1500);
    }, 1500);
  }
  e.preventDefault();
});
