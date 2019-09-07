console.log( 'hi from client!' );

$(document).ready(onReady);


function onReady() {
    $( '#additionButton' ).on( 'click', addNumbers );
    $( '#subtractionButton').on( 'click', subtractNumbers );
    $( '#multiplicationButton').on( 'click', multiplyNumbers );
    $( '#divisionButton').on( 'click', divideNumbers );

    $( '#submitButton' ).on( 'click', submitTotal ) ;
    $( '#clearButton' ).on( 'click', clearFirstInput, clearSecondInput );

    getTotal();
} 

function getTotal(){
    $.ajax({
        type: 'GET',
        url: '/messages',

    })
}

/// ---> currently set up to write a function off of each of the buttons above,
/// ---> but we are supposed to have server side logic, not client side.
/// ---> if we did client side logic, it would be like the following:

function addNumbers(){
    console.log( 'in addNumbers' );
    // get user input
    // package up into an object
    let additionToSend = {
        firstNumber: $( '#firstNumber' ).val(),
        secondNumber: $( '#secondNumber' ).val()
    }
    console.log( ' sending addNumbers:', additionToSend );
/// ---> check after building POST route <--- ///
    // send object to server
    $.ajax({
        type: 'POST',
        url: '/messages',
        data: additionToSend
    }).then( function( response ){
        console.log( 'back from POST:', response );
    // update DOM with new messages
    }).catch( function( err ){
        console.log( err );
        alert( 'error with equation. see console for details' );
    }) // end AJAX
} // end addNumbers

function subtractNumbers() {
    let subtractionToSend = {
        firstNumber: $('#firstNumber').val(),
        secondNumber: $('#secondNumber').val()
    }
    console.log(' sending subtractNumbers:', subtractionToSend);
}

function multiplyNumbers() {
    let multiplicationToSend = {
        firstNumber: $('#firstNumber').val(),
        secondNumber: $('#secondNumber').val()
    }
    console.log(' sending multiplyNumbers:', multiplicationToSend);
}

function divideNumbers() {
    let divisionToSend = {
        firstNumber: $('#firstNumber').val(),
        secondNumber: $('#secondNumber').val()
    }
    console.log(' sending divideNumbers:', divisionToSend);
}

/// $('#submitButton').on('click', submitTotal);

function submitTotal() {
    let totalToSend = {
        firstNumber: $('#firstNumber').val(),
        secondNumber: $('#secondNumber').val()
    }
    console.log(' sending submitTotal:', totalToSend);
}
