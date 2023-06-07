
import Footer from './Footer';

import analyzing_data from './img/analyzing_data.jpg';
import e_learning from './img/e_learning.jpg';
import discussion from './img/discussion.jpg';
import dashboard from './img/dashboard.png';

import Chatbot from './Chatbot';
const Services = () => {
    return(
        <>
            <Chatbot />
            <section className='bg-beige pt-5 pb-5 p-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <img src={ e_learning } alt="e_learning website" className="width-90 rounded" />
                        </div>
                        <div className='col-md-6'>
                            <div className='mt-md-5'>
                                <h5>
                                    User research
                                </h5>
                                <p>
                                    Conducting user research to helps our designers to understand the needs, preferences, and behaviors of the target audience. 
                                    This research includes user interviews, surveys, and other methods to gather insights that inform the design process.
                                </p>
                            </div>
                            <div>
                                <h5>
                                   Wireframing and prototyping
                                </h5>
                                <p>
                                    Creating wireframes and prototypes to visualize the layout and functionality of the user interface. 
                                    These mockups allow our designers to test different design concepts and gather feedback from stakeholders and users.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='dark-navy pt-5 pb-5 p-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 mb-3 d-block d-md-none'>
                            <img src={ dashboard } alt="dashboard" className="w-100 rounded" />
                        </div>

                        {/* Start of Content */}
                        <div className='col-md-6'>
                            <div className='mt-md-5'>
                                <h5>
                                    Visual design
                                </h5>
                                <p>
                                    Once the wireframes and prototypes have been approved,Our UI designers create the visual design of the interface. 
                                    This includes designing the colors, typography, icons, and other visual elements that make up the user interface.
                                </p>
                            </div>
                            <div>
                                <h5>
                                    Interaction design
                                </h5>
                                <p>
                                    Our UI designers also design the interactions between the user and the interface. 
                                    This includes designing the navigation, buttons, forms, and other interactive elements that users interact with to achieve their goals.
                                </p>
                            </div>
                        </div>
                        {/* End of Content */}   

                        <div className='col-md-6 d-none d-md-block'>
                            <img src={ dashboard } alt="dashboard" className="width-90 rounded" />
                        </div>         
                    </div>
                </div>
            </section>

            <section className='bg-beige pt-5 pb-5 p-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <img src={ analyzing_data } alt="navigation information" className="width-90 rounded" />
                        </div>
                        <div className='col-md-6'>
                            <div className='mt-md-5'>
                                <h5>
                                    Usability testing
                                </h5>
                                <p>
                                    Our UI designers conduct usability testing to validate the design and ensure that it meets the needs of the target audience. 
                                    This involves testing the interface with users and gathering feedback on its usability, accessibility, and overall user experience.
                                </p>
                            </div>
                            <div>
                                <h5>
                                   Responsive design
                                </h5>
                                <p>
                                    With the increasing use of mobile devices,
                                    Our UI designers must ensure that the interface is responsive and works well on different screen sizes and devices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                
            <section>
                <div className='container pt-4 pb-4 p-3'>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <img src={ discussion } alt="navigation information" className="width-90" />
                        </div>
                        <div className="col-md-6 mt-md-5">
                            <h4 className="pt-md-5">
                                Accessibility
                            </h4>
                            <p>
                                Our UI designers also ensure that the interface is accessible to users with disabilities 
                                by designing for accessibility standards such as WCAG (Web Content Accessibility Guidelines).
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Services;