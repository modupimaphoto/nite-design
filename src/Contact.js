
import Footer from './Footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import address_pin from './img/address_pin.svg';
import telephone from './img/telephone.svg';
import mail from './img/mail.svg';

import facebook from './img/social/facebook.svg';
import instagram from './img/social/instagram.svg';
import twitter from './img/social/twitter.svg';
import linkedin from './img/social/linkedin.svg';


const Contact = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccessful, setIsSuccessful] = useState(null);

    const handleSubmit = (event) =>{
        event.preventDefault();

        const sendMessage = {name, email, message};
        const url = 'http://localhost:8000/Messages';

        fetch(url ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendMessage)
        })
        .then( () =>{
            setIsSuccessful(true);
            setName('');
            setEmail('');
            setMessage('');
        })
    }
    return(
        <>
            <div className='bg-beige'>
                <div className="container pt-5 pb-5">
                    <div className="row p-3 g-4">
                        {/* Start of content */}
                        <div className='col-md-6'>
                            <div className='text-center'>
                                <h3>
                                    Get In Touch
                                </h3>
                                <p>
                                    Feel free to get in touch  with us, we are always open to discussing your
                                    creative ideas or opportunities to work with us.
                                </p>
                            </div>
                            <div>
                                <h5>
                                    <img src={ address_pin } alt='Address pin' className='svg' />
                                    Address
                                </h5>
                                <p>
                                    8892 London Street, Sandton, 2090
                                </p>
                            </div>
                            <div>
                                <h5>
                                    <img src={ telephone } alt='Telephone' className='svg' />
                                    Phone number
                                </h5>
                                <p>
                                    (+27) 832 843 8474
                                </p>
                            </div>
                            <div>
                                <h5>
                                    <img src={ mail } alt='Mail' className='svg' />
                                    Email
                                </h5>
                                <p>
                                    nitedesign@gmail.com
                                </p>
                            </div>
                            <div>
                                <h5>Follow us</h5>
                                <ul className='list-inline'>
                                    <li className='list-inline-item'>
                                        <Link to='#' className='text-decoration-none'>
                                            <img src={ instagram } alt='Instagram' className="svg-lg-2"/>
                                        </Link>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Link to='#' className='text-decoration-none'>
                                            <img src={ facebook } alt='facebook' className="svg-lg-1"/>
                                        </Link>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Link to='#' className='text-decoration-none'>
                                            <img src={ twitter } alt='twitter' className="svg"/>
                                        </Link>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Link to='#' className='text-decoration-none'>
                                            <img src={ linkedin } alt='linkedin' className="svg-lg-1"/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* End of content */}

                        {/* Start of content */}
                        <div className="col-md-6">
                            <h3 className='text-center'>
                                Contact Us
                            </h3>

                            { isSuccessful && <div className='alert alert-success'>Successful sent</div> }

                            <form onSubmit={ handleSubmit }>
                                <div className='form-group mb-3'>
                                    <input type="text" value={ name } onChange={ (event) => setName(event.target.value) } 
                                        className="form-control border-left-navy" placeholder="Your Name" required/>
                                </div>
                                <div className='form-group mb-3'>
                                    <input type="email" value={ email } onChange={ (event) => setEmail(event.target.value) } 
                                        className="form-control border-left-navy" placeholder="Your Email" required/>
                                </div>
                                <div className='form-group mb-3'>
                                    <textarea value={ message } rows='8' onChange={ (event) => setMessage(event.target.value) } 
                                        className="form-control resize-none border-left-navy" placeholder="Type your message here...." required></textarea>
                                </div>
                                <div className='form-group text-center'>
                                    <input type="submit" value="Send Message"  className='btn btn-navy width-50 text-uppercase'/>
                                </div>
                            </form>
                        </div>
                        {/* End of content */}
                    </div>
                </div>
            </div>
            <Footer /> 
        </>
    )
}
export default Contact;