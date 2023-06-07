import illustration from './img/illustration.png';
import navigationdesign from './img/navigationdesign.png';
import preview from './img/preview.png';
import Chatbot from './Chatbot';
import Footer from './Footer';

const About = () => {

    return(
        <>  
            <Chatbot />
			<section className='pt-5 pb-5 bg-beige'>
				<div className='container'>
					<div className="row p-3">
						<div className="col-md-6 mb-3">
							<img src={ illustration } alt="illustration" className='width-70 rounded' />
						</div>
						<div className="col-md-6">
							<p>
								Our approach is <span className="text-primary">[insert your approach or methodology here]</span>. 
								We believe in <span className="text-primary">[insert your philosophy or guiding principles here]</span>, 
								and we use this approach to help our clients achieve their goals and objectives. 
								We take the time to understand our clients' unique needs and challenges, and we work 
								collaboratively with them to develop customized solutions that are tailored to their specific requirements.
							</p>
							<p className="mb-3">
							We are committed to <span className="text-primary">[insert your commitments or promises to your clients here]</span>. 
							Our goal is to exceed our clients' expectations and to provide them with exceptional service and support. 
							We are always looking for ways to improve our services and to stay ahead of the curve in our industry.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className='pt-5 pb-5 dark-navy text-white'>
				<div className='container'>
					<h3 className='text-center'>
						Our Vision and Values
					</h3>
					<div className="row p-3">
						<div className="col-md-6 mb-3 d-block d-md-none">
							<img src={ navigationdesign } alt="navigation design" className='width-70 rounded' />
						</div>

						<div className="col-md-6">
							<p>
								We strive to understand our users' needs, goals, and behaviors to create meaningful and intuitive experiences. 
								We put ourselves in the shoes of our users to ensure that our designs are usable, accessible, and inclusive to a diverse range of users.
							</p>
							<p>
								We believe that good design is not just about aesthetics, but it's about solving problems and enhancing functionality. 
								We push the boundaries of design thinking, constantly exploring new ideas and technologies to create cutting-edge UX and UI solutions that set industry standards.
							</p>
							<p>
								We foster a culture of collaboration, bringing together diverse talents from UX and UI disciplines to work seamlessly as a team. 
								We believe that collective intelligence drives innovation, and we collaborate closely with stakeholders, developers, and other cross-functional teams to create cohesive and consistent digital experiences.
							</p>
							
						</div>
						<div className="col-md-6 mb-3 d-none d-md-block text-center">
							<img src={ navigationdesign } alt="navigation design" className='w-100 rounded' />
						</div>
					</div>
				</div>
			</section>

			<section className='pt-5 pb-5 bg-beige'>
				<div className='container'>
					<div className="row p-3">
						<div className="col-md-6 mb-3">
							<img src={ preview } alt="preview" className='w-100 rounded' />
						</div>
						<div className="col-md-6">
							<p>
								We are committed to constant learning and improvement, staying up-to-date with the latest design trends, tools, and techniques. 
								We believe in data-driven decision making, conducting user research, usability testing, and feedback analysis to iterate and refine our designs, making them better with each iteration.
							</p>
							<p>
								We aim to create memorable experiences that resonate with our users and drive meaningful outcomes for our clients and partners. 
								We understand that UX and UI are not just about making things look good, but also about creating value, solving problems, and enhancing user satisfaction, loyalty, and retention.
							</p>
							<p>
								We are advocates for users, advocating for their needs and preferences throughout the design process. We ensure that our designs are inclusive, accessible, and ethical, considering factors such as 
								diversity, equity, and inclusion. We strive to create digital experiences that are user-centric, user-friendly, and aligned with best practices and industry standards.
							</p>
						</div>
					</div>
				</div>
			</section>

			<Footer />
        </>
    )
}

export default About;