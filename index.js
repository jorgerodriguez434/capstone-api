const apikey = 'eea50bd6';
const ENDPOINT = `https://www.omdbapi.com/?apikey=${apikey}&`;

function render(data) {
	console.log(data);
	//console.log(data.Search);
	$('.results').empty();
	data.Search.map(movie => {
		$('.results').append(`
                <li> 
                    <h2>${movie.Title}</h2>
                    <h5>${movie.Year}</h5>
                    <img src = ${movie.Poster}>
                    
              
              
              
              `);
	});
	/*
  $('.results').empty();
	console.log(data.Title);
	console.log(data.Year);
	console.log(data.Plot);
	console.log(data.Poster);
	$('.results').append(`
	
	            <li> <h2>${data.Title}</h2>
	                 <h4>${data.Year}</h4>
	                 <p> ${data.Plot}</p>
	                 <img src = ${data.Poster}>
	
	           `); */
}

function fetch(searchTerm, callback) {
	const params = {
		s: searchTerm,
	};
	$.getJSON(ENDPOINT, params, callback);
}
$('.search-button').on('click', event => {
	event.preventDefault();
	let searchTerm = $('input').val();
	fetch(searchTerm, render);
});