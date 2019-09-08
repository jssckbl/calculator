// requires

const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

// globals
const port = 5000;

///- let things = [];   <---- could this be the array that the calculator pushes into?

let globalTotal = 0;
const equationHistory = [];

// test data
///- things.push( { name: 'bottle' } );  <---- this would need to be changed to go into the <ul>#equationsOut in index?

// uses
app.use( express.static( 'server/public' ) ); 
app.use( bodyParser.urlencoded( { extended: true } ) );
///- should I have more app.use lines? 

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up:', port );
}) // end server up

// routes

app.get( '/equations', (req, res )=>{
    console.log( 'in /equations GET', req.body );
    let finalCalculation = {
        equationHistory: equationHistory,
        globalTotal: globalTotal
    }
    res.send( finalCalculation );
} ) // end /equations GET

app.post( '/equations', ( req, res )=>{
    console.log( 'in /equations POST:', req.body );
    let calculationIn = req.body;
    doMath(calculationIn);
    res.sendStatus( 201 );
}) // end /messages POST

function doMath(calculationIn) {
    console.log('in addNumbers');
    // get user input
    // package up into an object

    if (calculationIn.operator === '+' ){
        let answer = Number(calculationIn.firstNumber) + Number(calculationIn.secondNumber);
        globalTotal = answer;
        let equation = (`<li>${calculationIn.firstNumber} ${calculationIn.operator} ${calculationIn.secondNumber} = ${answer}</li>`);
        equationHistory.push(equation);
    }

    else if (calculationIn.operator === '-') {
        let answer = Number(calculationIn.firstNumber) - Number(calculationIn.secondNumber);
        globalTotal = answer;
        let equation = (`<li>${calculationIn.firstNumber} ${calculationIn.operator} ${calculationIn.secondNumber} = ${answer}</li>`);
        equationHistory.push(equation);
    }

    else if (calculationIn.operator === '*') {
        let answer = Number(calculationIn.firstNumber) * Number(calculationIn.secondNumber);
        globalTotal = answer;
        let equation = (`<li>${calculationIn.firstNumber} ${calculationIn.operator} ${calculationIn.secondNumber} = ${answer}</li>`);
        equationHistory.push(equation);
    }

    else if (calculationIn.operator === '/') {
        let answer = Number(calculationIn.firstNumber) / Number(calculationIn.secondNumber);
        globalTotal = answer;
        let equation = (`<li>${calculationIn.firstNumber} ${calculationIn.operator} ${calculationIn.secondNumber} = ${answer}</li>`);
        equationHistory.push(equation);
    }
}

//     let additionToSend = {
//         firstNumber: $('#firstNumber').val(),
//         secondNumber: $('#secondNumber').val()
//     }
//     console.log(' sending addNumbers:', additionToSend);
//     /// ---> check after building POST route <--- ///
//     // send object to server
//     $.ajax({
//         type: 'POST',
//         url: '/messages',
//         data: additionToSend
//     }).then(function (response) {
//         console.log('back from POST:', response);
//         // update DOM with new messages
//     }).catch(function (err) {
//         console.log(err);
//         alert('error with equation. see console for details');
//     }) // end AJAX
//  // end addNumbers