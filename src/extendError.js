export default function extendError(Error, name) {
	// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

	const CustomError = function (...parameters) {
		const instance = new Error(...parameters);
		instance.name = name;
		Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
		if (Error.captureStackTrace) {
			Error.captureStackTrace(instance, CustomError);
		}

		return instance;
	};

	CustomError.prototype = Object.create(Error.prototype, {
		constructor: {
			value: Error,
			enumerable: false,
			writable: true,
			configurable: true,
		},
	});

	Object.setPrototypeOf(CustomError, Error);

	return CustomError;
}
