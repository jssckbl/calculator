console.log( 'hi from client!' );

$(document).ready(onReady);


function onReady() {
    $( '#additionButton').on( 'click', addNumbers );
    $( '#subtractionButton').on( 'click', subtractNumbers );
    $( '#multiplicationButton').on( 'click', multiplyNumbers );
    $( '#divisionButton').on( 'click', divideNumbers);

    getThings();
} 