// requires

const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

// globals
const port = 5000;

///- let things = [];   <---- could this be the array that the calculator pushes into?

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

/// ---> below, in review, it was mentioned we might not really be using the request part. but maybe now that we are doing stuff server side?
app.get( '/equations', (req, res )=>{
    console.log( 'in /equations GET' );
    res.send( equations );
} ) // end /equations GET

app.post( '/equations', ( req, res )=>{
    console.log( 'in /equations POST:', req.body );
    equations.push( req.body );
    res.sendStatus( 201 );
}) // end /messages POST