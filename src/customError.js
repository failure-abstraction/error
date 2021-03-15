import Error from './Error' ;
import extendError from './extendError' ;

const customError = name => extendError( Error , name ) ;
export default customError;
