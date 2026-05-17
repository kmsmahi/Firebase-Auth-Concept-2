import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import { auth } from '../FireBase/FireBase.config';
import React, { useState } from 'react';
import { NavLink } from 'react-router';
const Register = () => {
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    const [showPassword,setShowPassword]=useState(false);
     const seeBtnHandler=(e)=>{
          e.preventDefault();
          setShowPassword(!showPassword);
        };

    
    const registerHandler=(e)=>{
        e.preventDefault();
        console.log('Register button clicked',
            e.target.email.value,
            e.target.password.value
        );
        const auth = getAuth();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms=e.target.terms.checked;
        setError('');
        setSuccess(false);
        if(!terms){
          setError('You must accept the terms and conditions to register.');
          return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if(!passwordRegex.test(password)){
          setError("Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
          return;
        }
        
        createUserWithEmailAndPassword(auth, email, password)
       .then((result) => {
        console.log('after creation : ',result.user);
         sendEmailVerification(result.user)
        .then(() => {
             alert('Verification email sent. Please check your inbox and verify your email before logging in.');
    
        });
        setSuccess(true);
        e.target.reset();
       
       })
      .catch((err) => {
        console.error('Firebase Error Code:', err.code);
                console.error('Firebase Error Message:', err.message);
                setError(err.message);
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
          <div className='relative'>
            <input 
            name="password" 
            type={showPassword ? 'text' : 'password'} 
            className="input" placeholder="Password" />
            <button onClick={seeBtnHandler} className="btn btn-xs absolute right-4 top-2">See</button>
          </div>
          
          <div>
           <label class="label">
           <input type="checkbox" 
           name="terms"
           class="checkbox" />
           Accepts our terms and conditiopns
           </label>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        {
          success && <p className='text-green-500'>User created successfully!</p>
        }
        {
          error && <p className='text-red-500'>{error}</p>
        }
       </form>

       <p>Already have an account?? <NavLink className="text-blue-500 underline" to='/login'>Login</NavLink></p>
      </div>
    </div>
  </div>
</div>
    );

  };
export default Register;