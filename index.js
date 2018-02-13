const API_KEY = '152563cd6249fcadcfcebbf3e1da0380';
const SEARCH_ENDPOINT = 'https://api.themoviedb.org/3/search/movie';
const DISCOVER_ENDPOINT = 'https://api.themoviedb.org/3/discover/movie';
const GENRE_TITLES_ENDPOINT = 'https://api.themoviedb.org/3/genre/movies';
const IMG_ENDPOINT = 'https://image.tmdb.org/t/p/w500';

const ACTION = 28;
const ADVENTURE = 12;
const COMEDY = 35;
const CRIME = 80;
const DRAMA = 18;
const FAMILY = 10751;

function render(data) {
	console.log(data);
	$('.results').empty();
	data.results.map(movie => {
		$('.results').append(`
	          <li>
	            <h2>${movie.title}</h2>
	            <ul>
              <li>${movie.overview}</li>
              <li> Popularity: ${movie.popularity}</li>
              <li> Date Released: ${movie.release_date}</li>
              <li> <img src = ${IMG_ENDPOINT}${movie.poster_path} class="poster-img" alt= ${movie.title}></li>
              </ul>
              
            </li>
            
            `);
	});
}

function fetch(settings, callback) {
	// object destructoring
	const {
		url,
		params
	} = settings;
	// identical to this
	// const url = settings.url;
	// const params = settings.params;
	//
	$.getJSON(url, params, callback);
}

function getPopularTitles() {
	const settings = {
		url: DISCOVER_ENDPOINT,
		params: {
			api_key: API_KEY,
			sort_by: 'popularity.desc',
			include_video: true
		}
	};
	fetch(settings, render);
}

function getUpcomingTitles() {
	const settings = {
		url: DISCOVER_ENDPOINT,
		params: {
			api_key: API_KEY,
			sort_by: 'release_date.desc',
			include_video: true
		}
	};
	fetch(settings, render);
}

function searchTitles(searchTerm) {
	const settings = {
		url: SEARCH_ENDPOINT,
		params: {
			api_key: API_KEY,
			query: searchTerm,
			include_video: true
		}
	};
	fetch(settings, render);
}

function getGenreTitles(genre_id) {
	const settings = {
		url: `https://api.themoviedb.org/3/genre/${genre_id}/movies`,
		params: {
			api_key: API_KEY,
			include_video: true
		}
	};
	fetch(settings, render);
}

function handleSearchButton() {
	$('.search-button').on('click', event => {
		event.preventDefault();
		let searchTerm = $('input').val()
		searchTitles(searchTerm);
	});
}

function handlePopularButton() {
	$('.popular-button').on('click', event => {
		event.preventDefault();
		getPopularTitles();
	});
}

function handleActionButton() {
	$('.action-button').on('click', event => {
		event.preventDefault();
		getGenreTitles(ACTION);
	});
}

function handleComedyButton() {
	$('.comedy-button').on('click', event => {
		event.preventDefault();
		getGenreTitles(COMEDY);
	});
}

function handleCrimeButton() {
	$('.crime-button').on('click', event => {
		event.preventDefault();
		getGenreTitles(CRIME);
	});
}

function handleDramaButton() {
	$('.drama-button').on('click', event => {
		event.preventDefault();
		getGenreTitles(DRAMA);
	});
}

function handleFamilyButton() {
	$('.family-button').on('click', event => {
		event.preventDefault();
		getGenreTitles(FAMILY);
	});
}

function handleUpcomingTitlesButton() {
	$('.in-theatres-button').on('click', event => {
		event.preventDefault();
		getUpcomingTitles();
	});
}
handleSearchButton();
handlePopularButton();
handleActionButton();
handleComedyButton();
handleCrimeButton();
handleDramaButton();
handleFamilyButton();
handleUpcomingTitlesButton();



