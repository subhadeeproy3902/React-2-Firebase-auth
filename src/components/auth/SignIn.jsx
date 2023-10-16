import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { auth } from "../../firebase";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      }).catch((error) => {
        console.log(error);
      })
  }
  return (
    <div className='sign-in-container'>
      <form onSubmit={signIn}>
        <h1 className="heading">Sign In</h1>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}></input>{ " " }
        <br/>
        <input type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>{ " " }<br/>
        <br/>
        <div className="link">
          <button type="submit" className="login">Log In</button>
        </div>
        <br/>
        <br/>
      </form>
    </div>
  )
};

export default SignIn;