console.log("script header-tool.js loaded");
export const active = (nav) => {
  if (nav) {
    const current = window.location.href;
    // console.log("current => ", current);
    const anchor = nav.querySelectorAll("a");
    anchor.forEach((link) =>
      link.href === current ? link.classList.add("active") : false
    );
    // for (let i = 0; i < anchor.length; i++) {
    //   if (anchor[i].href == current) {
    //     anchor[i].classList.add("active");
    //   }
    // }
  }
};

// const info = document.createElement("div");
// info.classList.add("info");
// document.body.appendChild(info);
// info.innerHTML = "▲";

export const fx = (elmt) => {
  window.addEventListener("scroll", () => {
    //   info.innerHTML = "Scroll position";
    const position = window.pageYOffset;
    if (position > 16) {
      console.log(true);
    } else {
      console.log(false);
    }
    //   info.innerHTML = window.pageYOffset;
    //   const boxInfo = document.querySelector(".info");
    //   boxInfo.innerHTML = "GET STARTED";
    //   boxInfo.style.cursor = "pointer";
  });
};
