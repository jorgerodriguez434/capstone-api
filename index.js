const API_KEY = '152563cd6249fcadcfcebbf3e1da0380';
const SEARCH_ENDPOINT = 'https://api.themoviedb.org/3/search/movie';
const POPULAR_ENDPOINT = 'https://api.themoviedb.org/3/discover/movie';
const GENRE_IDs_ENDPOINT = 'https://api.themoviedb.org/3/genre/movie/list';

function renderSearch(data) {
  
	data.results.map(movie => {
		console.log(`MOVIE TITLE: ${movie.title}`);
		console.log(`MOVIE OVERVIEW: ${movie.overview}`);
		$('.results').append(
		        `
	          <li>
	            <h2>${movie.title}</h2>
              <h5>${movie.overview}</h5>
            </li>
            
            `);
	});
	
}

function renderPopularTitles(data) {
  
	data.results.map(movie => {
		console.log(`MOVIE TITLE: ${movie.title}`);
		console.log(`POPULARITY: ${movie.popularity}`);
		$('.results').append(
		        `
	          <li>
	            <h2>${movie.title}</h2>
              <h5>Popularity: ${movie.popularity}</h5>
            </li>
            
            `);
	});
	
}
function renderGenreIDs(data) {
  
  console.log(data)
  
}

function render(data){
  
  console.log(data);
  
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
		url: POPULAR_ENDPOINT,
		params: {
			api_key: API_KEY,
			sort_by: 'popularity.desc'
		}
	};
	fetch(settings, renderPopularTitles);
}

function searchTitles(searchTerm) {
	const settings = {
		url: SEARCH_ENDPOINT,
		params: {
			api_key: API_KEY,
			query: searchTerm
		}
	};
	fetch(settings, render);
}

function getGenreIds() {
	const settings = {
		url: GENRE_IDs_ENDPOINT,
		params: {
			api_key: API_KEY,
		}
	};
	fetch(settings, renderGenreIDs);
}

$('.search-button').on('click', event => {
	event.preventDefault();
	let searchTerm = $('input').val()
	searchTitles(searchTerm);
	//getPopularTitles();
	//getGenreIds();
});






