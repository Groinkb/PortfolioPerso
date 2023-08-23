// For the menu commun at every pages
document.addEventListener("DOMContentLoaded", function () {
	const dropdownBtn = document.querySelector(".dropdown-btn");
	const dropdownContent = document.querySelector(".dropdown-content");

	dropdownBtn.addEventListener("click", function () {
		dropdownContent.classList.toggle("show");
	});

	window.addEventListener("click", function (event) {
		if (!event.target.matches(".dropdown-btn")) {
			if (dropdownContent.classList.contains("show")) {
				dropdownContent.classList.remove("show");
			}
		}
	});
});



// Preload rocket
const stars = document.querySelectorAll("#star");

stars.forEach((star) => {
	let duration = Math.random() * (1.2 - 0.6) + 0.6;
	star.style.animation = `stars ${duration}s infinite linear`;
});

window.addEventListener("load", () => {
	const preloader = document.querySelector(".preloader");
	preloader.classList.add("preload-finish");
});
