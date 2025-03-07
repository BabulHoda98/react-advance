//Create State value
// -user - default null
//Create two functions
// - login:set user equal to an object with name property
// - logout:set user equal to null again
// in jsx use?:to display two different setups
//h4 with "hello there,user name" and logout button
//h4  with "please login" and login button  
import React, { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({name:'Babul Hoda'}); 
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div>
          {/* <h4>Hello there, {user.name}!</h4> */}
          {/* <button onClick={logout} className='btn'>Logout</button> */}
        </div>
      ) : (
        <div>
          {/* <h4>Please login</h4> */}
          {/* <button onClick={login} className='btn'>Login</button> */}
        </div>
      )}
    </div>
  );
};
export default UserChallenge;




