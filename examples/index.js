'use strict';

var createDist = require( './../lib' );

// Define the distribution parameters...
var lambda = 10,
	k = 20;

// Create a vector...
var vec = new Array( 1000 ),
	len = vec.length;

for ( var i = 0; i < len; i++ ) {
	vec[ i ] = lambda * Math.pow( -Math.log( 1 - Math.random() ) , 1/k );
}

// Create a Weibull distribution and configure...
var dist = createDist( lambda, k );

// Evaluate the probability density function over the vector...
var pdf = dist.pdf( vec );

var arr = new Array( 100 );
for ( var j = 0; j < arr.length; j++ ) {
	arr[ j ] = [ vec[j], pdf[j] ];
}
console.log( arr );

// Evaluate the quantile function for canonical cumulative probability values...
var quantiles = dist.quantile( [ 0.025, 0.5, 0.975 ] );

console.log( quantiles );
