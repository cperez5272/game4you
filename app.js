'use strict'

const apiKey = `348417-CesarPer-5W20R0FA`;
const searchURL = `https://tastedive.com/api/similar`;


function displayResults(responseJson){
    console.log('displayResults working fine')
    console.log(responseJson)
    $('.result_list').empty();
  
    const displayResult = responseJson.Similar.Results.splice(0, 5)
    console.log(displayResult);
    const elm = displayResult.map(li => `<li><p>${li.Name}</p><p>${li.wTeaser}</p><p><iframe src="${li.yUrl}" height="300" width="500"</iframe></p></li>`)
  
    $('.result_list').append(elm);
    $('#results').removeClass('hidden');
  }


function getGames(game){
    console.log('getGames working fine');
    fetch(`https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${game}&type=games&info=1`)
    .then(response => {
        console.log(response.Info);
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
    let game = $('.search_bar').val()
    console.log('button working')
    getGames(game)
  })
}

$(watchForm)