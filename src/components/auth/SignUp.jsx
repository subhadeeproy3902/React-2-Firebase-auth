import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { auth } from "../../firebase";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      }).catch((error) => {
        console.log(error);
      })
  }
  return (
    <div className='sign-in-container'>
      <form onSubmit={signUp}>
        <h1 className="heading">Create New Account</h1>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        {" "}
        <br />
        <input type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        {" "}
        <br />
        <br />
        <div className="link">
          <button type="submit" className="signup">Sign Up</button>
        </div>
        <br />
        <br />
      </form>
    </div>
  )
}

export default SignUp;