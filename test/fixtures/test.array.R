options( digits = 16 )
library( jsonlite )

k = 1
x = seq( -1000, 1000, 0.5 )
y = pchisq( x, k )

cat( y, sep = ",\n" )

data = list(
	k = k,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/array.json" )
