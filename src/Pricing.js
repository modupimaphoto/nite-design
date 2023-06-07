
import { Link } from 'react-router-dom';
import tickcircle from './img/tickcircle.svg';
import wrongcircle from './img/wrongcircle.svg';

const Pricing = () =>{

    return(
        <>
            <div className="container pt-5 pb-5">
                <header className="text-center">
                    <h2>
                        Convinient Pricing
                    </h2>
                    <p>
                        Choose the right pricing and get started with your project.
                    </p>
                </header>
                <div className="row g-4 p-4">

                    {/* First Card */}
                    <div className=" col-md-4">
                        <div className="card mt-3 shadow border-top-navy border-bottom-navy">
                            <div className="card-body">
                                <h3 className="card-title text-center">
                                    Basic
                                </h3>
                                <div className="text-center h5">
                                    $ <span className="h3">29</span>
                                </div>
                                <div className="mb-3">
                                    <ul>
                                        <li>
                                            <img src={tickcircle} alt="tick" className='svg'/>
                                            User research
                                        </li>
                                        <li>
                                            <img src={tickcircle} alt="tick" className='svg'/>
                                            Wireframing and prototyping
                                        </li>
                                        <li>
                                            <img src={tickcircle} alt="tick" className='svg'/>
                                            Visual design
                                        </li>
                                        <li>
                                            <img src={tickcircle} alt="tick" className='svg'/>
                                            Usability testing
                                        </li>
                                        <li>
                                            <img src={tickcircle} alt="tick" className='svg'/>
                                            Interaction design
                                        </li>
                                        <li>
                                            <img src={ wrongcircle } alt="cross" className='svg' />
                                            Responsive design
                                        </li>
                                        <li>
                                            <img src={ wrongcircle } alt="cross" className='svg' />
                                            Accessibility
                                        </li>
                                    </ul>
                                </div>
                                <Link to="" className="btn btn-dark w-100">Start Basic</Link>
                            </div>
                        </div>
                    </div>

                    {/* second Card */}
                    <div className=" col-md-4">
                        <div className="card shadow border-top-navy border-bottom-navy bg-dark text-white">
                            <div className="card-body">
                                <div className="text-center mb-2">
                                    <span className="dark-navy p-2 text-white rounded-5">Best Value</span>
                                </div>
                                <h3 className="card-title text-center">
                                    Standard
                                </h3>
                                <div className="text-center h5">
                                    $ <span className="h3">49</span>
                                </div>
                                <div className="mb-3">
                                    <ul>
                                       <li>
                                            <img src={tickcircle} alt="tick" className='svg'/>
                                            User research
                                        </li>
                                        <li>
                                            <img src={tickcircle} alt="tick" className='svg'/>
                                            Wireframing and prototyping
                                        </li>
                                        <li>
                                            <img src={tickcircle} alt="tick" className='svg'/>
                                            Visual design
                                        </li>
                                        <li>
                                            <img src={tickcircle} alt="tick" className='svg'/>
                                            Usability testing
                                        </li>
                                        <li>
                                            <img src={tickcircle} alt="tick" className='svg'/>
                                            Interaction design
                                        </li>
                                        <li>
                                            <img src={ tickcircle } alt="tick" className='svg' />
                                            Responsive design
                                        </li>
                                        <li>
                                            <img src={ wrongcircle } alt="cross" className='svg' />
                                            Accessibility
                                        </li>
                                    </ul>
                                </div>
                                 <Link to="" className="btn btn-primary w-100">Start Standard</Link>
                            </div>
                        </div>
                    </div>

                    {/* third Card */}
                    <div className=" col-md-4">
                        <div className="card mt-3 shadow border-top-navy border-bottom-navy">
                            <div className="card-body">
                                <h3 className="card-title text-center">
                                    Platinum
                                </h3>
                                <div className="text-center h5">
                                    $ <span className="h3">79</span>
                                </div>
                                <div className="mb-3">
                                    <ul>
                                        <li>
                                            <img src={tickcircle} alt="tick" className='svg'/>
                                            User research
                                        </li>
                                        <li>
                                            <img src={tickcircle} alt="tick" className='svg'/>
                                            Wireframing and prototyping
                                        </li>
                                        <li>
                                            <img src={tickcircle} alt="tick" className='svg'/>
                                            Visual design
                                        </li>
                                        <li>
                                            <img src={tickcircle} alt="tick" className='svg'/>
                                            Usability testing
                                        </li>
                                        <li>
                                            <img src={tickcircle} alt="tick" className='svg'/>
                                            Interaction design
                                        </li>
                                        <li>
                                            <img src={ tickcircle } alt="tick" className='svg' />
                                            Responsive design
                                        </li>
                                        <li>
                                            <img src={ tickcircle } alt="tick" className='svg' />
                                            Accessibility
                                        </li>
                                    </ul>
                                </div>
                                 <Link to="" className="btn btn-dark w-100">Start Platinum</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Pricing;