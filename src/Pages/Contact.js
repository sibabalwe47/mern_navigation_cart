import React from 'react'
import HeroSmall from '../components/Layouts/HeroSmall'
import ContactForm from '../components/Forms/Contact'
import Map from '../components/Utils/GoogleMap'
import ContactInfo from '../components/Utils/ContactInfo'

const Contact = () => {
    return (
        <div>
            <HeroSmall heading={'Contact'} />
            <section class="ftco-section contact-section bg-light">
                <div class="container">
                    <div class="row block-9">
                        <div class="col-md-6 order-md-last d-flex">
                            <ContactForm />
                        </div>
                        <div class="col-md-6 d-flex">
                            <Map />
                        </div>
                    </div>
                    <div class="row d-flex mt-5 contact-info">
                        <div class="w-100"></div>
                        <div className="col-md-12">
                            <div className="row">
                                <ContactInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Contact