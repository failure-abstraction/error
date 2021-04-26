# Examples

> More examples in [the test files](https://github.com/make-github-pseudonymous-again/js-error/tree/main/test/src).


## StopIteration

```js
import { iter , next } from '@aureooms/js-itertools' ;
import { StopIteration } from '@aureooms/js-error' ;

const data = [] ;
const it = iter(data) ;

try {
	next(it);
}
catch ( e ) {
  if (e instanceof StopIteration) {
    ...
  }
}
```
