import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {

    return(
        <section className="login__container">

        <section className="login__form__container">
       
        <form className='login__form'>
        <h1 className='login__heading'>Login to Thrift</h1>
          <label htmlFor="name" className="login__label">Name</label>
          <input type="text" name="name"  className="login__input"/>
    
          <label htmlFor="password" className="login__label">Password</label>
          <input type="password" name="password" className="login__input"/>
    
          <input type="submit" className="login__btn" value="Login"/>
        
          <p className='Dont__have__an__account__text'>Don't have an acoount? <Link className='login__link' to="/sign-up">Sign Up</Link> </p>
        </form>
        </section>
    
        <section className="wallpaper">
            hello
        </section>
    
        </section>
    )
    
}

export default Login