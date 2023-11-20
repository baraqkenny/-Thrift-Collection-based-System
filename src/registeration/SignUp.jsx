import { useState } from 'react';
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
      <h1>Sign Up</h1>
      <label htmlFor="name">Name</label>
      <input type="text" name="name"  />

      <label htmlFor="email">Email</label>
      <input type="email" name="email"/>

      <label htmlFor="password">Password</label>
      <input type="password" name="password"  />
    </form>
    </section>

    <section className="wallpaper">
hello
    </section>

    </section>
   )
}

export default SignUp