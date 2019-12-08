/**
 * share the jwt token will all the children of the context
 * everyone can grab the token
 */

 import React from 'react';

 const JwtContext = React.createContext(null);

 export default JwtContext;