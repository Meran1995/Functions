const addMovieModal = document.getElementById("add-modal");
const startMovieBtn = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieBtn = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");
const movies = [];

const updateUI = () => {
	if (movies.length === 0) {
		entryTextSection.style.display = "block";
	} else {
		entryTextSection.style.display = "none";
	}
};

const deleteMovie = (movieId) => {
	let movieIndex = 0;
	for (const movie of movies) {
		if (movie.id === movieId) {
			break;
		}
		movieIndex++;
	}
	movies.splice(movieIndex, 1);
	const listRoot = document.getElementById("movie-list");
	listRoot.children[movieIndex].remove();
	closeMovieDeletion();
	updateUI();
};

const deleteMovieHandler = (movieId) => {
	deleteMovieModal.classList.add("visible");
	toggleBackdrop();
	const cancelBtn = deleteMovieModal.querySelector(".btn--passive");
	let confirmBtn = deleteMovieModal.querySelector(".btn--danger");

	confirmBtn.replaceWith(confirmBtn.cloneNode(true));
	
	confirmBtn = deleteMovieModal.querySelector(".btn--danger");

	cancelBtn.removeEventListener("click", closeMovieDeletion);
	// confirmBtn.removeEventListener("click", deleteMovie.bind(null, movieId));
	
	cancelBtn.addEventListener("click", closeMovieDeletion);
	confirmBtn.addEventListener("click", deleteMovie.bind(null, movieId));
};

const closeMovieDeletion = () => {
	toggleBackdrop();
	deleteMovieModal.classList.remove("visible");
};

const cancelAddMovieHandler = () => {
	closeMovieModal();
	toggleBackdrop();
	clearInput();
};

const closeMovieModal = () => {
	addMovieModal.classList.remove("visible");
};

const renderNewMovie = (id, title, imageUrl, rating) => {
	const newMovieElement = document.createElement("li");
	newMovieElement.className = "movie-element";
	newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5stars</p>
    </div>
  `;

	newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
	const listRoot = document.getElementById("movie-list");
	listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
	backdrop.classList.toggle("visible");
};

const showMovieModal = () => {
	addMovieModal.classList.add("visible");
	toggleBackdrop();
};

const backdropClickHandler = () => {
	closeMovieModal();
	closeMovieDeletion();
	clearInput();
};

const clearInput = () => {
	for (const usrinput of userInputs) {
		usrinput.value = "";
	}
};

const addMovieHandler = () => {
	const titleValue = userInputs[0].value;
	const imageValue = userInputs[1].value;
	const ratingValue = userInputs[2].value;

	if (
		titleValue.trim() === "" ||
		imageValue.trim() === "" ||
		ratingValue.trim() === "" ||
		+ratingValue < 1 ||
		+ratingValue > 5
	) {
		alert("please enter a value");
		return;
	}

	const newMovies = {
		id: Math.random().toString(),
		title: titleValue,
		image: imageValue,
		rating: ratingValue,
	};

	movies.push(newMovies);
	console.log(movies);
	closeMovieModal();
	toggleBackdrop();
	clearInput();
	renderNewMovie(
		newMovies.id,
		newMovies.title,
		newMovies.image,
		newMovies.rating
	);
	updateUI();
};

startMovieBtn.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieBtn.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener("click", addMovieHandler);
