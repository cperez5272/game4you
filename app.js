'use strict'

const apiKey = `348417-CesarPer-5W20R0FA`;
const searchURL = `https://tastedive.com/api/similar`;


function displayResults(responseJson){
    $('.result_list').empty();
    const displayResult = responseJson.Similar.Results.splice(0, 5)
    const elm = displayResult.map(powa => `<li class="clear_dot"><p>${powa.Name}</p><p>${powa.wTeaser}</p><p><iframe src="${powa.yUrl}" class="youtube"></iframe></p></li>`)
  
    $('.result_list').append(elm);
    $('#results').removeClass('hidden');
  }

function getGames(game){
    const source = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${game}&type=games&info=1`
    fetch(source)
    .then(response => {
        if(response.ok) {
          return response.json();
        }
  })
      .then(responseJson => displayResults(responseJson))
      .catch(error => $('#results').append(`<p>No results found</p>`));
}

function watchForm(){
  $('.user_form').submit(function(event){
    event.preventDefault();
    $('.intro').hide();
    let game = $('#search_bar').val()
    getGames(game)
  })
}

$(watchForm)