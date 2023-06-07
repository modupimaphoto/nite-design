
import { Link } from 'react-router-dom';
import { useState } from 'react';

import eye_closed from './img/eye_closed.svg';
import eye_open from './img/eye_open.svg';

const Login = () => {
    const [ email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');
    const [ showPassword, setShowPassword] = useState(eye_closed);

    const handleSubmit = (event) =>{
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
                        <div className='text-center h3'>
                        Login
                        </div>
                        Don't have account yet? <Link to='/Signup' className='text-warning'>Signup</Link>
                    </div>
                    <form onSubmit={ handleSubmit }>
                        <div className="form-group mb-2">
                            <label for='email'>Email</label>
                            <input type='email' value={ email } onChange={ (event) => setEmail(event.target.value) }
                                id='email' className="form-control" required/>
                        </div>
                        <div className="form-group mb-2">
                            <label for='password'>Password</label>
                            <span className='float-right' onClick={ handlePassword }>
                                <img src={ showPassword } alt="eye closed" className='eye-svg' />
                            </span>
                            <input type='password' value={ password } onChange={ (event) => setPassword(event.target.value) }
                                id='password' className="form-control" required/>
                        </div>
                        <div className='mb-2'>
                            <Link to="#" className='text-white'>Forgot your password</Link>
                        </div>
                        <div className='form-group'>
                            <input type='submit'value='Login' className="btn btn-dark w-100" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;