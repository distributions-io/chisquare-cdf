'use strict';

// MODULES //

var partial = require( './partial.js' );


// CDF //

/**
* FUNCTION: cdf( out, matrix, k )
*	Evaluates the cumulative distribution function (CDF) for a Chi-squared distribution with degrees of freedom `k` for each matrix element.
*
* @param {Matrix} out - output matrix
* @param {Matrix} arr - input matrix
* @param {Number} k - degrees of freedom
* @returns {Matrix} output matrix
*/
function cdf( y, x, k ) {
	var len = x.length,
		fcn,
		i;
	if ( y.length !== len ) {
		throw new Error( 'cdf()::invalid input arguments. Input and output matrices must be the same length.' );
	}
	fcn = partial( k );
	for ( i = 0; i < len; i++ ) {
		y.data[ i ] = fcn( x.data[ i ] );
	}
	return y;
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
