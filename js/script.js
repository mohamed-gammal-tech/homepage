function toggleSideNav() {
  var x = document.getElementById("side-nav-wrapper");
  var car = document.getElementById("car-icon");
  if (x.style.display === "none") {
    x.style.display = "block";
    car.style.display = "none";
  } else {
    x.style.display = "none";
    car.style.display = "block";
  }
}
function openNav() {
  document.getElementById("side-nav-wrapper").style.display = "block";
  document.addEventListener("click", closeNavOutside);
}

function closeNav() {
  document.getElementById("side-nav-wrapper").style.display = "none";
  document.removeEventListener("click", closeNavOutside);
}

function closeNavOutside(event) {
  let sideNav = document.getElementById("side-nav-wrapper");
  if (event.target !== sideNav && !sideNav.contains(event.target)) {
    closeNav();
  }
}
