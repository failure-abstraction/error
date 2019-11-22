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

function willThrow ( error ) {
	return function () { throw new error(); } ;
}

test( 'error' , t => {

	const r = Math.random();
	const s = r.toString();

	for ( const error of errors ) {
		t.truthy( new error( ) ) ;
		t.is( ( new error( r ) ).message , s ) ;
		t.throws( willThrow(error) , error ) ;
	}

}) ;
