$(document).ready(onReady);

let operator = '';

function onReady() {
    $( '#additionButton' ).on( 'click', addNumbers ); 
    $( '#subtractionButton').on( 'click', subtractNumbers ); 
    $( '#multiplicationButton').on( 'click', multiplyNumbers ); 
    $( '#divisionButton').on( 'click', divideNumbers ); 

    $( '#submitButton' ).on( 'click', submitTotal ); 
    $( '#clearButton' ).on( 'click', clearInputs ); 
    
    appendTotal();
} 

function addNumbers(){
    operator = '+';
}

function subtractNumbers() {
    operator = '-';
}

function multiplyNumbers() {
    operator = '*';
}

function divideNumbers() {
    operator = '/';
}

// $('#submitButton').on('click', submitTotal);

function clearInputs(){
    $('#firstNumber').val(''),
    $('#secondNumber').val('')
} // end clearInputs

// submitTotal to the server
function submitTotal() {
    let totalToSend = {
        firstNumber: $('#firstNumber').val(),
        secondNumber: $('#secondNumber').val(),
        operator: operator 
    }
    console.log(' sending submitTotal:', totalToSend);
    $.ajax({
        type: 'POST',
        url: '/equations',
        data: totalToSend
    }).then(function (response) {
        // console.log('back from POST:', response);
        // update DOM with new equations
        // empty number inputs
        $('#submitButton').val(''); 
        appendTotal();
    })
    
}

function appendTotal() {
    // console.log('in getTotal');
    $.ajax({
        type: 'GET',
        url: '/equations',
    }).then(function (response) {
        // console.log('back from the GET with:', response);
        // empty ul
        $('ul').empty();
        // loop through response
        for (let i = 0; i < response.equationHistory.length; i++) {
  
            // append each to the ul
            $('ul').append(response.equationHistory[i]);
    } // end for loop
    })
    .catch(function (err) {
        alert('error getting equation. see console for details.');
    })
} // end getTotal

