import { NavLink } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../FireBase/FireBase.config';
import { useState } from "react";
const Login = () => {
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    const loginFormHandler=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log('after login', email,password);
        const auth = getAuth();
        setError('');
        setSuccess(false);
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            console.log('after creation : ',result.user);
            setSuccess(true);
            e.target.reset();
        })
        .catch(err=>{
            setError(err.message);
        })
    }
    return (
        <div className="hero  min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={loginFormHandler} action="">
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />
          <label  className="label">Password</label>
          <div className='relative'>
            <input 
            name="password" 
            type="password"
            className="input" placeholder="Password" />
            <button className="btn btn-xs absolute right-4 top-2">See</button>
          </div>
          <div><a className="link link-hover">Forgot password?</a></div>
          <div>
           <label className="label">
           <input type="checkbox" 
           name="terms"
           class="checkbox" />
           Accepts our terms and conditiopns
           </label>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        {
            error && <p className="text-red-500">{error}</p>
        }
        {
            success && <p className="text-green-500">Login successful!</p>
        }
        
       </form>
       <p>New in our website?? Then please <NavLink className="text-blue-500 underline" to='/register'>Register</NavLink></p>

      </div>
    </div>
  </div>
</div>
    );
};

export default Login;