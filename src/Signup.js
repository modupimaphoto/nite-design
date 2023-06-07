
import { Link } from 'react-router-dom';
import { useState } from 'react';

import eye_closed from './img/eye_closed.svg';
import eye_open from './img/eye_open.svg';

const Signup = () => {
    const [ email, setEmail ] = useState('');
    const [ username, setUsername ] = useState('');
    const [password, setPassword ] = useState('');
    const [ showPassword, setShowPassword] = useState(eye_closed);

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handlePassword = () => {
        const password = document.getElementById('password');
        
        if(password.type === 'password'){
            password.type = "text";
            setShowPassword(eye_open);
        }else{
            password.type = "password";
            setShowPassword(eye_closed);
        }
    }
    return(
        <>
            <div className="bg-beige wrapper">
                <div className="center">
                    <div className='mb-2'>
                        <h4>
                            Create an account
                        </h4>
                        Already have an account? <Link to='/Login' className='text-warning'>Log in</Link>
                    </div>
                    <form onSubmit={ handleSubmit }>
                        <div className="form-group mb-2">
                            <label for='email'>Email</label>
                            <input type='email' value={ email } onChange={ (event) => setEmail(event.target.value) }
                                id='email' className="form-control" required/>
                        </div>
                        <div className="form-group mb-2">
                            <label for='username'>Username</label>
                            <input type='text' value={ username } onChange={ (event) => setUsername(event.target.value) }
                                id='username' className="form-control" required/>
                        </div>
                        <div className="form-group mb-2">
                            <label for='password'>
                                Password
                            </label>
                            <span className='float-right' onClick={ handlePassword }>
                                <img src={ showPassword } alt="eye closed" className='eye-svg' />
                            </span>
                            <input type='password' value={ password } onChange={ (event) => setPassword(event.target.value) }
                                id='password' className="form-control" required/>
                        </div>
                        <div className='form-group mb-2'>
                            <input type='checkbox' className='custom-checkbox' />
                            I want to receive emails about products, feature updates, events 
                            and marketing promotions.
                        </div>
                        <div className='form-group'>
                            <input type='submit'value='Create Account' className="btn btn-dark w-100" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Signup;