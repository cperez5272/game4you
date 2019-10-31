'use strict'

const apiKey = `348417-CesarPer-5W20R0FA`;
const searchURL = `https://tastedive.com/api/similar`;


function displayResults(responseJson){
    $('.result_list').empty();
    console.log(responseJson)

    if (responseJson.Similar.Info[0].Type == 'unknown') {
      $('#results').append(`<p>Your search does not return any result. Please enter the correct term to search.</p>`)
      // alert('Sorry please come back another time. We are down at the moment.');
      return;
   }
    const displayResult = responseJson.Similar.Results.splice(0, 5)
    console.log(displayResult);
    const elm = displayResult.map(powa => `<li><p>${powa.Name}</p><p>${powa.wTeaser}</p><p><iframe src="${powa.yUrl}" class="youtube"></iframe></p></li>`)
  
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
      .catch(error => alert('Sorry but you must have typed something wrong!'));
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