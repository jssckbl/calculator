// requires

const express = require( 'express' );
const app = express();

// globals
const port = 5000;

// spin up server
app.use( express.static( 'server/public' ) );

app.listen( port, ()=>{
    console.log( 'server is up:', port );
}) // end server up

// routes
