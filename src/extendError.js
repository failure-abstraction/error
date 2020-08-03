export default function extendError ( parent, name ) {

	// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

	const CustomError = function (...params) {
	  const instance = new Error(...params);
	  instance.name = name;
	  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
	  if (Error.captureStackTrace) {
		Error.captureStackTrace(instance, CustomError);
	  }
	  return instance;
	}

	CustomError.prototype = Object.create(Error.prototype, {
	  constructor: {
		value: Error,
		enumerable: false,
		writable: true,
		configurable: true
	  }
	});

	if (Object.setPrototypeOf){
	  Object.setPrototypeOf(CustomError, Error);
	} else {
	  CustomError.__proto__ = Error;
	}

	return CustomError ;

}
