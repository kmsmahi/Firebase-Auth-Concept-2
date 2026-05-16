import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth } from '../FireBase/FireBase.config';
import React from 'react';
const Register = () => {
    const registerHandler=(e)=>{
        e.preventDefault();
        console.log('Register button clicked',
            e.target.email.value,
            e.target.password.value
        );

        const auth = getAuth();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
       .then((result) => {
        console.log('after creation : ',result.user);
       })
      .catch((err) => {
        console.error('Firebase Error Code:', err.code);
                console.error('Firebase Error Message:', err.message);
      });
    }
    return (
        <div className="hero  min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={registerHandler} action="">
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />
          <label  className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
       </form>
      </div>
    </div>
  </div>
</div>
    );

  };
export default Register;