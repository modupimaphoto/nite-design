import { Link } from 'react-router-dom';
import { useState } from 'react';

import logo from './img/logo.svg';

const Footer = () =>{
    const [email , setEmail] = useState('');
    const handleSubmit = (event) =>{
        event.preventDefault();
    }

    return(
        <>
            <footer className="bg-dark pt-5 pb-5">
                <div className='container'>
                    <div className="mb-3">
                        <h5 className="text-center text-white">
                            Nite
                            <img src={ logo } alt='logo' className='logo'  />
                            Design
                        </h5>
                        <hr  className="text-primary"/>
                        <div>
                            <p className='text-white'>
                                Subscribe to receive our daily updates and promotions.
                            </p>
                            <form onSubmit={ handleSubmit }>
                                <div className='input-group width-50'>
                                    <input type='email'  value={ email } onChange={ (event) => setEmail(event.target.value) } placeholder='Enter your Email' className='form-control' required/>
                                    <input type='submit' value='Subscribe' className='btn btn-info' />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex">
                         <div>
                            <ul className='list-group'>
                                <li className='list-group-item bg-dark border-0'>
                                    <Link to="/" className='text-decoration-none text-white'>Home</Link>
                                </li>
                                <li className='list-group-item bg-dark border-0'>
                                    <Link to="/About" className='text-decoration-none text-white'>About</Link>
                                </li>
                                <li className='list-group-item bg-dark border-0'>
                                    <Link to="/Services" className='text-decoration-none text-white'>Services</Link>
                                </li>
                                <li className='list-group-item bg-dark border-0'>
                                    <Link to="/Pricing" className='text-decoration-none text-white'>Pricing</Link>
                                </li>
                                <li className='list-group-item bg-dark border-0'>
                                    <Link to="/Contact" className='text-decoration-none text-white'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className='list-group'>
                                <li className='list-group-item bg-dark border-0 '>
                                    <Link to="" className='text-decoration-none text-white'>Terms & Conditions</Link>
                                </li>
                                <li className='list-group-item bg-dark border-0'>
                                    <Link to="" className='text-decoration-none text-white'>Cookie policy</Link>
                                </li>
                                <li className='list-group-item bg-dark border-0'>
                                    <Link to="" className='text-decoration-none text-white'>Privacy policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;