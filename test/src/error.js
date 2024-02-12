import test from 'ava';

import {
	Error,
	TypeError,
	SyntaxError,
	IndexError,
	KeyError,
	NotImplementedError,
	ValueError,
	StopIteration,
} from '#module';

const errors = [
	Error,
	TypeError,
	SyntaxError,
	IndexError,
	KeyError,
	NotImplementedError,
	ValueError,
	StopIteration,
];

const macro = (t, SpecificError) => {
	const r = Math.random();
	const s = r.toString();

	t.truthy(new SpecificError());
	t.is(new SpecificError(r).message, s);
	t.throws(
		() => {
			throw new SpecificError();
		},
		{instanceOf: SpecificError},
	);
	t.is(SpecificError.captureStackTrace, Error.captureStackTrace);
};

macro.title = (title, SpecificError) => title || new SpecificError().name;

for (const error of errors) {
	test(macro, error);
}
