// requires

const express = require( 'express' );
const app = express();
const bodyParser = require('body-parser');

// globals
const port = 5000;

///- let things = [];   <---- could this be the array that the calculator pushes into?

// test data
///- things.push( { name: 'bottle' } );  <---- this would need to be changed to go into the <ul>#equationsOut in index?


// uses
app.use( express.static( 'server/public' ) ); 
app.use( bodyparser.urlencoded( { extended: true } ) ); /// <--- this should be totally fine
///- should I have more app.use lines? 

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up:', port );
}) // end server up

// routes
