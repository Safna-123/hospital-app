import React from 'react'
import Navbar from './Navbar'

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">




                        <div id="carouselExampleIndicators" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://img.freepik.com/premium-photo/hospital-building-red-cross-medical-institution-health-treatment-disease-wallpaper-background_782419-651401.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716681600&semt=ais_user" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.aigantic.com/wp-content/uploads/2023/12/ai-healthcare-nurses.webp" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://img.freepik.com/premium-photo/two-hospitalstaffssurgeon-doctor-nurse-standinggenerative-ai_760510-1156.jpg" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>



                    </div>
                </div>
                <br />

                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div class="card">
                            <h5 class="card-header">Welcome to Nexa Clinic official app </h5>
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">Designed with your convenience and well-being in mind, our hospital app is your trusted companion for all your healthcare needs. Whether you're scheduling appointments, accessing medical records, or seeking important information about our services, this app puts everything at your fingertips.
                                
                                
                                <p>Here are some of its key features:</p>

<p>1.Appointment Scheduling: Book appointments with your healthcare provider hassle-free. Choose your preferred date and time, and receive instant confirmation.</p>

<p>2.Medical Records Access: Access your medical history, test results, and prescriptions securely from anywhere. Stay informed about your health journey at your convenience.</p>

<p>3.Virtual Consultations: Connect with healthcare professionals through virtual consultations for non-emergency medical advice and follow-ups, saving you time and effort.</p>

<p>4.Health Reminders: Stay on top of your health with personalized reminders for medication, upcoming appointments, and preventive screenings.</p>

<p>5.Emergency Assistance: In case of emergencies, access important contact information and directions to our hospital for prompt assistance.</p>

<p>6.Health Education Resources: Explore a wealth of health articles, tips, and resources to empower yourself with knowledge about various health conditions and wellness practices.</p>

<p>7.Feedback and Support: Share your feedback about your experience with us directly through the app, and get timely support for any queries or concerns you may have.</p>

Our hospital app is designed to streamline your healthcare journey, offering convenience, accessibility, and peace of mind every step of the way. Download now and experience the future of healthcare in the palm of your hand!</p>
                                
                            </div>
                        </div>



                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default HomePage
