document.addEventListener("DOMContentLoaded", (e) => {
  console.log(
    "topnav.js loaded",
    "DOM fully loaded and parsed, timeStamp: ",
    e.timeStamp.toFixed(2),
    "ms"
  );

  try {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const nav = document.querySelector("nav");

    if (!nav) {
      throw new Error(
        "Il manque la classe nav pour calculer la hauteur du menu"
      );
    }
    if (!menu) {
      throw new Error("Il manque la classe .menu");
    }
    if (!hamburger) {
      throw new Error("Il manque la classe .hamburger");
    }

    // Ajouter une position relative au parent (nav)
    nav.style.position = "relative";

    let headerHeight = nav.offsetHeight;

    // event on resize
    window.addEventListener("resize", () => {
      headerHeight = nav.offsetHeight;
      // console.log("headerHeight:", headerHeight);
    });

    document.addEventListener("click", (e) => {
      if (e.target.closest(".hamburger")) {
        menu.classList.toggle("menu--open");
        // console.log("header:", headerHeight);
        menu.style.top = `${headerHeight}px`;
      }

      if (!e.target.closest(".menu") && !e.target.closest(".hamburger")) {
        menu.classList.remove("menu--open");
      }
    });
  } catch (error) {
    console.error(error.message);
  }
});
