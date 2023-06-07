import { Outlet, Link } from 'react-router-dom';

import bars from './img/bars.svg';
import logo from './img/logo.svg';

const Navbar = () =>{

    const handleMenu = () =>{
        const nav = document.getElementById('nav');
        nav.classList.toggle('active-nav');
    }

    return(
        <>
            <header className='fixed-top p-3 dark-navy'>
                <div className='container-md d-block d-md-flex justify-content-between'>
                    <div className='d-flex justify-content-between'>
                        <div className="w-100">
                            Nite
                            <img src={ logo } alt='logo' className='logo'  />
                            Design
                        </div>
                        <div>
                            <img src={ bars } onClick={ handleMenu } alt="bars" className="bars d-block d-md-none" />
                        </div>
                    </div>
                    <nav className='active-nav' id="nav">
                        <ul>
                            <li className="d-md-inline m-2">
                                <Link to="/" className="text-decoration-none text-light">Home</Link>
                            </li>
                            <li className="d-md-inline m-2">
                                <Link to="/About" className="text-decoration-none text-light">About</Link>
                            </li>
                            <li className="d-md-inline m-2">
                                <Link to="/Services" className="text-decoration-none text-light">Services</Link>
                            </li>
                            <li className="d-md-inline m-2">
                                <Link to="/Pricing" className="text-decoration-none text-light">Pricing</Link>
                            </li>
                            <li className="d-md-inline m-2">
                                <Link to="/Contact" className="text-decoration-none text-light">Contact</Link>
                            </li>
                            <li className="d-md-inline m-2">
                                <Link to="/Login" className="btn btn-outline-warning text-decoration-none">Login</Link>
                            </li>
                            <li className="d-md-inline">
                                <Link to="/Signup" className="btn btn-warning text-decoration-none">Signup</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        <Outlet />
        </>
    )
}

export default Navbar;