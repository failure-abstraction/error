export default function extendError(Error, name) {
	// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

	const CustomError = function (...parameters) {
		const instance = new Error(...parameters);
		instance.name = name;
		if (Error.captureStackTrace) {
			Error.captureStackTrace(instance, CustomError);
		}

		return Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
	};

	CustomError.prototype = Object.create(Error.prototype, {
		constructor: {
			value: Error,
			enumerable: false,
			writable: true,
			configurable: true,
		},
	});

	return Object.setPrototypeOf(CustomError, Error);
}
