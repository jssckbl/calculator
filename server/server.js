// requires

const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

// globals
const port = 5000;

let globalTotal = 0;
const equationHistory = [];

// uses
app.use( express.static( 'server/public' ) ); 
app.use( bodyParser.urlencoded( { extended: true } ) );

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up:', port );
}) // end server up

// routes

app.get( '/equations', ( req, res )=>{
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
    doMath( calculationIn );
    res.sendStatus( 201 );
}) // end /messages POST

function doMath( calculationIn ) {
    console.log('in addNumbers');
    // get user input
    // package up into an object

    if ( calculationIn.operator === '+' ){
        let answer = Number( calculationIn.firstNumber ) + Number( calculationIn.secondNumber );
        globalTotal = answer;
        let equation = ( `<li>${calculationIn.firstNumber} ${calculationIn.operator} ${calculationIn.secondNumber} = ${answer}</li>` );
        equationHistory.push( equation );
    }

    else if ( calculationIn.operator === '-' ) {
        let answer = Number( calculationIn.firstNumber ) - Number( calculationIn.secondNumber );
        globalTotal = answer;
        let equation = ( `<li>${calculationIn.firstNumber} ${calculationIn.operator} ${calculationIn.secondNumber} = ${answer}</li>` );
        equationHistory.push( equation );
    }

    else if ( calculationIn.operator === '*' ) {
        let answer = Number( calculationIn.firstNumber ) * Number( calculationIn.secondNumber );
        globalTotal = answer;
        let equation = ( `<li>${calculationIn.firstNumber} ${calculationIn.operator} ${calculationIn.secondNumber} = ${answer}</li>` );
        equationHistory.push( equation );
    }

    else if ( calculationIn.operator === '/' ) {
        let answer = Number( calculationIn.firstNumber ) / Number( calculationIn.secondNumber );
        globalTotal = answer;
        let equation = ( `<li>${calculationIn.firstNumber} ${calculationIn.operator} ${calculationIn.secondNumber} = ${answer}</li>` );
        equationHistory.push( equation );
    }
}