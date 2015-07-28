'use strict';

// MODULES //

var gammainc = require( 'compute-gammainc' );


// CDF //

/**
* FUNCTION: cdf( x, k )
*	Evaluates the cumulative distribution function (CDF) for a Chi-squared distribution with degrees of freedom `k` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} k - degrees of freedom
* @returns {Number} evaluated CDF
*/
function cdf( x, k ) {
	if ( x <= 0 ) {
		return 0;
	}
	return gammainc( x/2, k/2 );
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
