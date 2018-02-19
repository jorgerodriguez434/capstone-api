const API_KEY = '152563cd6249fcadcfcebbf3e1da0380';
const BASE_URL = 'https://api.themoviedb.org/3';
const SEARCH_ENDPOINT = `${BASE_URL}/search/movie`;
const DISCOVER_ENDPOINT = `${BASE_URL}/discover/movie`;
const GENRE_TITLES_ENDPOINT = `${BASE_URL}/genre/movies`;
const UPCOMING_TITLES_ENDPOINT = `${BASE_URL}/movie/upcoming`;
const NOW_PLAYING_ENDPOINT = `${BASE_URL}/movie/now_playing`;
const IMG_ENDPOINT = 'https://image.tmdb.org/t/p/w500';

const ACTION = 28;
const ADVENTURE = 12;
const COMEDY = 35;
const CRIME = 80;
const DRAMA = 18;
const FAMILY = 10751;

function render(data) {
  $('.results').empty();
  if (data.results.length === 0) {
      $('.results').text(`Oops! There is no title!`);
}
  
else{
    data.results.map(movie => {
    $('.results').append(`
            <li>
              <h2>${movie.title}</h2>
              <p>${movie.overview}</p>
              <p> Popularity: ${movie.popularity}<p>
              <p> Date Released: ${movie.release_date}<p>
              <img src = ${IMG_ENDPOINT}${movie.poster_path} class="poster-img" alt= ${movie.title}>
            </li>

            `);
  });
}//else
}

function fetch(settings) {
  let { url, params, callback } = settings;
  params.api_key = API_KEY;
  if (!callback) {
    callback = render;
  }
  $.getJSON(url, params, callback);
}

function addListener(selector, options) {
  $(selector).on('click', event => {
    event.preventDefault();
    if (selector === '#search-button') {
      const input = $('#search-value').val();
      options.params.query = input;
    }
    input = $('#search-value').val("");
    fetch(options);
  });
}

addListener('#search-button', {
  url: SEARCH_ENDPOINT,
  params: {
    sort_by: 'popularity.desc',
  },
});

addListener('.popular-button', {
  url: DISCOVER_ENDPOINT,
  params: {
    sort_by: 'popularity.desc',
  },
});

addListener('.now-playing-button', {
  url: NOW_PLAYING_ENDPOINT,
  params: {},
});

addListener('.action-button', {
  url: `${BASE_URL}/genre/${ACTION}/movies`,
  params: {},
});

addListener('.comedy-button', {
  url: `${BASE_URL}/genre/${COMEDY}/movies`,
  params: {},
});

addListener('.crime-button', {
  url: `${BASE_URL}/genre/${CRIME}/movies`,
  params: {},
});

addListener('.drama-button', {
  url: `${BASE_URL}/genre/${DRAMA}/movies`,
  params: {},
});

addListener('.family-button', {
  url: `${BASE_URL}/genre/${FAMILY}/movies`,
  params: {},
});






