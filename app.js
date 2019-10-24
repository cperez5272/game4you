'use strict'

const apiKey = `348417-CesarPer-5W20R0FA`;
const searchURL = `https://tastedive.com/api/similar`;


function displayResults(responseJson){
  console.log('displayResults working fine')
  console.log(responseJson)
  $('.result_list').empty();
  $('.result_list').append(
    `<li>
    <p>${responseJson.Similar.Results[0].Name}</p>
    <p>${responseJson.Similar.Results[0].wTeaser}</p>
    <p><iframe src="${responseJson.Similar.Results[0].yUrl}" height="300" width="500"</iframe></p>
    </li>`
  );
  $('#results').removeClass('hidden');
}


function getGames(game){
    console.log('getGames working fine');
    fetch(`https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=batman&type=games&info=1`)
    .then(response => {
        console.log(response.Info);
        if(response.ok) {
          return response.json();
        }
  })
      .then(responseJson => displayResults(responseJson))
    //   .catch(err => {
    //     $('#js-error-message').text(err.message);
    // });
}


function watchForm(){
  $('.user_form').submit(function(event){
    event.preventDefault();
    console.log('button working')
    getGames()
  })
}

$(watchForm)