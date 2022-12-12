export const active = async (nav) => {
  console.log("script active-link loaded");
  if (nav) {
    const current = window.location.href;
    console.log("current => ", current);
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
