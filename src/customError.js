import Error from "./Error.js" ;
import extendError from "./extendError.js" ;

const customError = name => extendError( Error , name ) ;
export default customError;
