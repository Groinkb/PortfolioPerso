const projectsContainer = document.getElementById("projects");
const addProjectButton = document.getElementById("addProjectButton");
const projectModal = document.getElementById("projectModal");
const closeButton = document.querySelector(".close-button");
const projectForm = document.getElementById("projectForm");

addProjectButton.addEventListener("click", () => {
	projectModal.style.display = "block";
});

closeButton.addEventListener("click", () => {
	projectModal.style.display = "none";
});

projectForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const projectName = event.target.projectName.value;
	const projectDescription = event.target.projectDescription.value;
	const projectImage = event.target.projectImage.value;

	const projectElement = document.createElement("div");
	projectElement.classList.add("project");

	const imageElement = document.createElement("img");
	imageElement.src = projectImage;
	projectElement.appendChild(imageElement);

	const nameElement = document.createElement("h3");
	nameElement.textContent = projectName;
	projectElement.appendChild(nameElement);

	const descriptionElement = document.createElement("p");
	descriptionElement.textContent = projectDescription;
	projectElement.appendChild(descriptionElement);

	projectsContainer.appendChild(projectElement);
	projectModal.style.display = "none";
	projectForm.reset();
});
