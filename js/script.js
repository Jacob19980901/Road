const selectMap = (mapName) => {
  const mapEl = document.getElementsByClassName(mapName)[0];
  const allActive = document
    .querySelectorAll(".regions")[0]
    .querySelectorAll(".active");
  allActive.forEach((el) => {
    el.classList.remove("active");
  });
  mapEl.classList.add("active");
};
