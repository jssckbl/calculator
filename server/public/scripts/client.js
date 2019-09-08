console.log( 'hi from client!' );

$(document).ready(onReady);

let operator = '';


function onReady() {
    $( '#additionButton' ).on( 'click', addNumbers ); addNumbers();
    $( '#subtractionButton').on( 'click', subtractNumbers ); subtractNumbers();
    $( '#multiplicationButton').on( 'click', multiplyNumbers ); multiplyNumbers();
    $( '#divisionButton').on( 'click', divideNumbers ); divideNumbers();

    $( '#submitButton' ).on( 'click', submitTotal ); submitTotal();
    $( '#clearButton' ).on( 'click', clearInputs ); clearInputs();

    getTotal();
} 

/// ---> currently set up to write a function off of each of the buttons above,
/// ---> but we are supposed to have server side logic, not client side.
/// ---> if we did client side logic, it would be like the following:

function addNumbers(){
    // get user input
    // package up into an object
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

/// $('#submitButton').on('click', submitTotal);

function clearInputs(){
    $('#firstNumber').val(''),
    $('#secondNumber').val('')
}


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
        console.log('back from POST:', response);
        // update DOM with new equations
        // empty number inputs
        $('#submitButton').val(''); 
        appendTotal();
/// ---> appendCalc might be another function already written?
    }).catch(function (err) {
        console.log(err);
        alert('error with equation. see console for details');
    }) // end AJAX
} // end submitTotal
    getTotal();


function getTotal() {
    console.log('in getTotal');
    $.ajax({
        type: 'GET',
        url: '/equations',
    }).then(function (response) {
        console.log('back from the GET with:', response);
        // empty ul
        let el = $('#equationsOut');
        el.empty();
        // loop through response
        for (let i = 0; i < response.equationHistory.length; i++) {
            // append each to the ul
            el.append(response.equationHistory[i]);
        } // end for loop
    }).catch(function (err) {
        console.log(err);
        alert('error getting equation. see console for details.');
    })
} // end getTotal

