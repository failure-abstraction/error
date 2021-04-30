# Examples

> More examples in [the test files](https://github.com/failure-abstraction/error/tree/main/test/src).


## StopIteration

```js
import { iter } from '@iterable-iterator/iter' ;
import { next } from '@nextable-nextator/next' ;
import { StopIteration } from '@failure-abstraction/error' ;

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
