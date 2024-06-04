const logOption = document.querySelectorAll(".option");
const hamBurger = document.querySelector("#hamburger");
const sideNav = document.querySelector("#side-nav");
const leftSide = document.querySelector("#main");
const burger = document.querySelectorAll(".burger");

for (let i = 0; i < logOption.length; i++) {
  const element = logOption[i];
  element.onclick = function () {
    if (element.classList("active")) {
      element.classList.remove("active");
    }
    element.classList.add("active");
    console.log(i + 1);
  };
}

hamBurger.addEventListener("click", function () {
  sideNav.classList.toggle("hide");
  leftSide.classList.toggle("hide");
  console.log("helo");

  if (sideNav.classList != "hide" && leftSide.classList != "hide") {
    console.log("hello");
    for (let b = 0; b < burger.length; b++) {
      const element = burger[b];
      element.classList.add("hide");
    }
  }else{
    for (let b = 0; b < burger.length; b++) {
      const element = burger[b];
      element.classList.remove('hide')
    }
    }
});

console.log(logOption);
