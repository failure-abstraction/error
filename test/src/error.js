import test from 'ava' ;

import {
	Error ,
	TypeError ,
	SyntaxError ,
	IndexError ,
	KeyError ,
	NotImplementedError ,
	ValueError ,
	StopIteration ,
} from '../../src' ;

const errors = [
	Error ,
	TypeError ,
	SyntaxError ,
	IndexError ,
	KeyError ,
	NotImplementedError ,
	ValueError ,
	StopIteration ,
] ;

function willThrow ( SpecificError ) {
	return function () { throw new SpecificError(); } ;
}

test( 'error' , t => {

	const r = Math.random();
	const s = r.toString();

	for ( const SpecificError of errors ) {
		t.truthy( new SpecificError( ) ) ;
		t.is( ( new SpecificError( r ) ).message , s ) ;
		t.throws( willThrow(SpecificError) , { instanceOf: SpecificError } ) ;
	}

}) ;
