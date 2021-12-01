const changeEffect = document.getElementById("container");
const preEffect = document.getElementById("container2");

const toggleNewEffect = () => {
  changeEffect.classList.add("invisible");
  preEffect.classList.add("visible");
};

const renderNewEffect = () => {
  removeClass();
  changeEffect.classList.add("main-container");
  preEffect.classList.add("sec-container");
};

const removeClass = () => {
  changeEffect.classList.remove("invisible");
  preEffect.classList.remove("visible");
};

changeEffect.addEventListener("click", toggleNewEffect);
preEffect.addEventListener("click", renderNewEffect);
