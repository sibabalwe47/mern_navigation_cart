import React from 'react'
import SectionHeader from '../Utils/SectionHeader'
import register from '../../assets/images/register.png'
import select from '../../assets/images/select.png'
import truck from '../../assets/images/truck.png'


const Services = () => {
    return (
        <section class="ftco-section bg-light ftco-services delivery-service">
            <div className="container">
                <SectionHeader subheading={'Services'} />
                <div class="row delivery-service">
                    <div class="col-md-4 text-center d-flex align-self-stretch ">
                        <div class="media block-6 services">
                            <div class="icon d-flex justify-content-center align-items-center mb-4">
                                <span class="flaticon-002-recommended">
                                    <img src={register} alt="" style={{ width: '50px' }} />
                                </span>
                            </div>
                            <div class="media-body">
                                <h3 class="heading">Register</h3>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 text-center d-flex align-self-stretch ">
                        <div class="media block-6 services">
                            <div class="icon d-flex justify-content-center align-items-center mb-4">
                                <span class="flaticon-001-box">
                                    <img src={select} alt="" style={{ width: '50px' }} />
                                </span>
                            </div>
                            <div class="media-body">
                                <h3 class="heading">Select Meat</h3>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 text-center d-flex align-self-stretch ">
                        <div class="media block-6 services">
                            <div class="icon d-flex justify-content-center align-items-center mb-4">
                                <span class="flaticon-003-medal">
                                    <img src={truck} alt="" style={{ width: '50px' }} />
                                </span>
                            </div>
                            <div class="media-body">
                                <h3 class="heading">We deliver</h3>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Services;