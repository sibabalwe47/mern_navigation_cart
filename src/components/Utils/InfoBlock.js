import React from 'react'
import BackgroungImage from '../../assets/images/bg_5.jpg'


const InfoBlock = () => {
    return (
        <section class="ftco-section ftco-section-more img" style={{ backgroundImage: `url(${BackgroungImage})` }}>
            <div class="container">
                <div class="row justify-content-center mb-3 pb-3">
                    <div class="col-md-12 heading-section ">
                        <h2>Month End Sale</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoBlock