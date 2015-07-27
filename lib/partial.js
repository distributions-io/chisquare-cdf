'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( k )
*	Partially applies degrees of freedom `k` and returns a function for evaluating the cumulative distribution function (CDF) for a Chi-squared distribution.
*
* @param {Number} k - degrees of freedom
* @returns {Function} CDF
*/
function partial( k ) {

	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function (CDF) for a Chi-squared distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
