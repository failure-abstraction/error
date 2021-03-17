export default function extendError(parent, name) {
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

	if (Object.setPrototypeOf) {
		Object.setPrototypeOf(CustomError, Error);
	} else {
		// eslint-disable-next-line no-proto
		CustomError.__proto__ = Error;
	}

	return CustomError;
}
