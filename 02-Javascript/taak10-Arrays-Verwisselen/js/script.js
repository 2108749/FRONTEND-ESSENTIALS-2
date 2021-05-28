topFilms = [
  "The Godfather",
  "The Shawshank Redemption",
  "Schindler's List",
  "Raging Bull",
  "Casablanca",
];

document.querySelector(".film1-ranking").innerHTML = 1;
document.querySelector(".film1-naam").innerHTML = topFilms[0];
document.querySelector(".film2-ranking").innerHTML = 2;
document.querySelector(".film2-naam").innerHTML = topFilms[1];
document.querySelector(".film3-ranking").innerHTML = 3;
document.querySelector(".film3-naam").innerHTML = topFilms[2];
document.querySelector(".film4-ranking").innerHTML = 4;
document.querySelector(".film4-naam").innerHTML = topFilms[3];
document.querySelector(".film5-ranking").innerHTML = 5;
document.querySelector(".film5-naam").innerHTML = topFilms[4];

window.onload = function () {
	var upLink = document.querySelectorAll(".up");

	for (var i = 0; i < upLink.length; i++) {
		upLink[i].addEventListener('click', function () {
			var wrapper = this.parentElement;

			if (wrapper.previousElementSibling)
			    wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
		});
	}

	var downLink = document.querySelectorAll(".down");

	for (var i = 0; i < downLink.length; i++) {
		downLink[i].addEventListener('click', function () {
			var wrapper = this.parentElement;

			if (wrapper.nextElementSibling)
			    wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
		});
	}
}