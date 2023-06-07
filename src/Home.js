
import Footer from './Footer';
import Pricing from './Pricing';
import { Link } from 'react-router-dom';
import Chatbot from './Chatbot';

import userresearch from './img/userresearch.png';
import smartphonedesign from './img/smartphonedesign.png';
import prototypetools from './img/prototypetools.png';
import rightarrow from './img/rightarrow.svg';
import Artboard from './img/Artboard.jpg';
import ourmission from './img/ourmission.png';
import ticksquare from './img/ticksquare.svg';

const Home = () =>{

    return(
        <>
            <Chatbot />
            <section className="showcase-wrapper">
                <div className="container text-right">
                    <div className="width-60 p-4">
                        <h1 className='mb-3 text-uppercase'>
                            User Design and User Experience
                        </h1>
                        <p className='h5 mb-5'>
                            Understanding user needs, designing the visual and interactive elements of the interface, testing and 
                            validating the design, and ensuring that it is accessible to all users.
                        </p>
                        <div>
                            <a href="#services" className="btn btn-outline-navy mb-2 width-50">
                                Explore our Services
                                <img src={ rightarrow } alt='right arrow' className='svg' />    
                            </a>
                        </div>
                        <div>
                            <a href="#services" className="btn btn-navy width-50">
                                Get Started
                                <img src={ rightarrow } alt='right arrow' className='svg' />    
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-5 pb-5 dark-navy">
                <div className="text-center text-white h5">
                    <p className="container">
                        Our services cover a wide range of activities that involve understanding user needs, designing the visual and interactive elements of the interface, testing and validating the design,
                        and ensuring that it is accessible to all users.
                    </p>
                </div>
            </section>
            <section className='pt-5 pb-5' id='services'>
                <div className="container">
                    <div className="text-center">
                        <h2>Our Services</h2>
                        <p>
                            We provide the best in class services for our customers.
                        </p>
                    </div>

                    {/* First Card Section */}
                    <div className="row g-4 mb-3 p-5 p-md-3">
                        {/* First Card */}
                        <div className="col-md-4">
                            <div className="card h-100 w-100 shadow">
                                <div className="card-body">
                                    <div className="text-center">
                                        <img src={ userresearch } alt="use experience" className="w-50" />
                                    </div>
                                     <p className="card-text">
                                        Conducting user research to understand the needs, preferences, and 
                                        behaviors of the target audience
                                    </p>
                                </div>
                                <div className="dark-navy text-white p-3 text-center rounded-bottom ">
                                    User research
                                </div>
                            </div>
                        </div>
                        {/* Second Card */}
                        <div className="col-md-4">
                            <div className="card h-100 w-100 shadow">
                                <div className="card-body">
                                    <div className="text-center">
                                        <img src={ prototypetools } alt="Prototyping" className="w-50" />
                                    </div>
                                    <p className="card-text">
                                        Creating wireframes and prototypes to visualize the layout and functionality of the user interface
                                    </p>
                                </div>
                                <div className="dark-navy text-white p-3 text-center rounded-bottom">
                                    Wireframing and prototyping
                                </div>
                            </div>
                        </div>
                        {/* Third Card */}
                        <div className="col-md-4">
                            <div className="card h-100 w-100 shadow">
                                <div className="card-body">
                                    <div className="text-center">
                                        <img src={ smartphonedesign } alt="phone design" className="w-50" />
                                    </div>
                                    <p className="card-text">
                                        Designing the interactions between the user and the interface.
                                    </p>
                                </div>
                                <div className="dark-navy text-white p-3 text-center rounded-bottom">
                                    Interaction design
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='text-center'>
                        <Link to="/Services" className='btn btn-outline-navy p-2 width-50'>
                            Learn more about our services
                            <img src={ rightarrow } alt='right arrow' className='svg' />      
                        </Link>
                    </div>

                </div>
            </section>

            <section className='dark-navy text-white pt-5 pb-5'>			
				<div className="container">
					<h2 className="text-center">
						Who are we?
					</h2>
					<div className="row p-3">
						<div className="col-md-6 mb-3">
							<img src={ Artboard } alt="Artboard" className='width-90 rounded' />
						</div>
						<div className="col-md-6 pt-sm-5">
							<p>
								We are a team of dedicated professionals who are passionate 
								about <span className="text-warning">[insert your mission or purpose here]</span>. 
								Our mission is to <span className="text-warning">[insert your mission statement or key objectives here]</span>.
							</p>
							<p className="mb-3">
								We believe that <span className="text-warning">[insert your values or principles here]</span>, 
								and we work tirelessly to uphold these values in everything we do. 
								Our team is made up of experts in <span className="text-warning">[insert your areas of expertise or services here]</span>, 
								and we are committed to providing the highest quality <span className="text-warning">[insert your products or services here]</span> to our clients.
							</p>
							<Link to="/About" className="btn btn-outline-warning width-50">
								Learn More Abut Us
								<img src={ rightarrow } alt='right arrow' className='svg' />  
							</Link>
						</div>
					</div>
				</div>
            </section>

            <section>
                <Pricing />
            </section>

            <section className='dark-navy pt-5 pb-5'>
                <div className='container'>
                    <div className="text-center">
                        <h2>
                            Our Achievements
                        </h2>
                        <p>
                            At Nite Design.ico, we take pride in providing exceptional user interfaces that our clients love. 
                            But don't take our word for it - here's what one of our happy clients had to say
                        </p>
                    </div>
                    <div className='row g-4 p-3'>
                            <div className='col-md-4 text-center'>
                                <p>
                                    "I was blown away by the quality of the UI design that Nite Design.ico provided for my website. 
                                    From the moment I saw the initial concept, 
                                    I knew that they had captured the essence of my brand and translated it into a beautiful, intuitive interface."
                                </p>
                                <cite className='text-warning'>-Mike Lighthouse</cite>
                            </div>
                            <div className='col-md-4 text-center'>
                                <p>
                                    "The team at Nite Design.ico was a pleasure to work with - they were responsive, professional, 
                                    and always willing to go the extra mile to ensure that I was completely satisfied with the end result."
                                </p>
                                <cite className='text-warning'>-Modupi Maphoto</cite>
                            </div>
                            <div className='col-md-4 text-center'>
                                <p>
                                    "Since launching my new website with the Nite Design.ico UI design, I've received countless compliments from my customers. 
                                    They love the clean, modern look and feel of the site, and they find it easy to navigate and use."
                                </p>
                                <cite className='text-warning'>-Jay Cruise</cite>
                            </div>
                        </div>
                    </div>
            </section>

            <section className='pt-5 pb-5 p-sm-3'>			
				<div className="container">
					<h2 className="text-center">
						Our Mission
					</h2>
					<div className="row p-3">
						<div className="col-md-6 mb-3">
							<img src={ ourmission } alt="Artboard" className='width-90 rounded' />
						</div>
						<div className="col-md-6">
							<p>
								At our company, we are driven by our mission to create exceptional digital experiences through innovative UX and UI design. 
                                We believe that user-centered design is at the heart of creating products that delight and empower users, and we are committed to delivering outstanding user experiences across all digital touchpoints.
							</p>
                            <h4>Our mission is to:</h4>
                            <ul>
                                <li>
                                    <img src={ ticksquare } alt="tick" className='svg' />
                                    Empathize with Users
                                </li>
                                <li>
                                    <img src={ ticksquare } alt="tick" className='svg' />
                                    Innovate through Design
                                </li>
                                <li>
                                    <img src={ ticksquare } alt="tick" className='svg' />
                                    Collaborate as a Team
                                </li>
                                <li>
                                    <img src={ ticksquare } alt="tick" className='svg' />
                                    Strive for Continuous Improvement
                                </li>
                                <li>
                                    <img src={ ticksquare } alt="tick" className='svg' />
                                    Create Impactful Experiences
                                </li>
                                <li>
                                    <img src={ ticksquare } alt="tick" className='svg' />
                                    Champion User Advocacy
                                </li>
                            </ul>
						</div>
					</div>
				</div>
            </section>

            <Footer />
        </>
    )
}

export default Home;