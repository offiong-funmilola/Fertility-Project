import React from 'react';
import { useAuthValue } from './Context/AuthContext';
import { Navigate, Outlet} from 'react-router-dom'

const PrivateWrapper = () => {
  const {currentUser} = useAuthValue();
  return currentUser?.emailVerified ? 
    <Outlet /> :
    <Navigate to='/login'/>
  // isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateWrapper

// function PrivateWrapper({element: Component, ...rest}) {
//   const PrivateWrapper = ({ auth: { isAuthenticated } }) => {
//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// };
  
//   const {currentUser} = useAuthValue();
   
//   return (
//     <Route 
//         {...rest} 
//         render={props => {
//             return currentUser?.emailVerified? <Component {...props} /> : <Navigate to='/login' replace={true}/>
//         }}>  
//     </Route>
//   )
// }

// export default PrivateWrapper
