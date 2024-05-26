import React from 'react'
import Navbar from './Navbar'
const AboutPage = () => {
    return (
        
        <div>
         <Navbar/>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://thumbs.dreamstime.com/b/healthcare-technology-doctor-using-digital-tablet-icon-medical-network-hospital-background-162019727.jpg" class="d-block w-100" alt="..." />
                                </div>

                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <br />
                        <div class="card">
                            <div class="card-body">
                                <p>ABOUT US</p>
                                At Nexa Clinic, we are committed to providing exceptional healthcare services with compassion, integrity, and innovation. With a legacy of [15] years of serving our community, we have established ourselves as a trusted healthcare provider known for excellence in patient care and clinical outcomes.
                                <p>Mission:
Our mission is to enhance the health and well-being of our community by delivering comprehensive, patient-centered care with excellence and compassion.</p>

Vision:
To be the leading healthcare institution, recognized for our commitment to excellence, innovation, and the highest standards of patient care.

<p>Core Values:</p>

<p>1.Compassion: We treat every patient with empathy, respect, and kindness, understanding the unique needs and concerns of each individual.</p>
<p>2.Excellence: We strive for excellence in all aspects of our operations, from clinical care and patient experience to innovation and continuous improvement.</p>
<p>3.Integrity: We uphold the highest ethical standards in our interactions with patients, families, colleagues, and the community, fostering trust and transparency.</p>
<p>4.Teamwork: We value collaboration and teamwork, recognizing that our collective efforts are essential to achieving our mission and delivering the best possible outcomes for our patients.</p>
<p>5.Innovation: We embrace innovation and strive to continuously advance healthcare through research, technology, and creative solutions to meet the evolving needs of our community.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
