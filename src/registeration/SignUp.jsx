import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
    const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })
   
   return (
   <section className="sign__up__container">

    <section className="form__container">
   
    <form className='form'>
    <h1 className='sign__up__heading'>Sign Up to Thrift</h1>
      <label htmlFor="name" className="sign__up__label">Name</label>
      <input type="text" name="name"  className="sign__up__input"/>

      <label htmlFor="email" className="sign__up__label">Email</label>
      <input type="email" name="email" className="sign__up__input"/>

      <label htmlFor="password" className="sign__up__label">Password</label>
      <input type="password" name="password" className="sign__up__input"/>

      <input type="submit" className="sign__up__btn" value="Sign Up"/>
    
      <p className='have__an__account__text'>Already have an account? <Link className='login__link' to="/">Login</Link> </p>
    </form>
    </section>

    <section className="wallpaper">
hello
    </section>

    </section>
   )
}

export default SignUp