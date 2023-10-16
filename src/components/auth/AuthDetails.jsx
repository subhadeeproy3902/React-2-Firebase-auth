import React, { useEffect, useState } from 'react';
import { auth } from "../../firebase"
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    }
  }, []);
  const usersignOut = () => {
    signOut(auth).then(() => {
      console.log("Sign Out Successful");
    }).catch(error => console.log(error))
  }
  return (
    <div className='detail-container' id="details">
      {authUser ? <><p className='last'>{`Signed In as ${authUser.email}`}</p><div className='link'><button onClick={usersignOut} className='signout'>Sign Out</button><br/></div></> : <p className='last'>Signed Out</p>}
    </div>
  )
}

export default AuthDetails