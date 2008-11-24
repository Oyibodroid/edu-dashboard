const logOption = document.querySelectorAll(".option");
const hamBurger = document.querySelector('#hamburger');
const sideNav = document.querySelector('#side-nav');

for (let i = 0; i < logOption.length; i++) {
  const element = logOption[i];
  element.onclick = function () {
    if(element.classList('active')){
      element.classList.remove('active')
    }
    element.classList.add("active");
    console.log(i + 1);
  };
}


hamBurger.addEventListener('click', function(){
  sideNav.classList.toggle('hide')
  console.log('helo');
})

console.log(logOption);
