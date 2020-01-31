import React from 'react'
import PropTypes from 'prop-types'



const SectionHeader = ({ subheading }) => {
    return (
        <section class="ftco-section ftco-product">
            <div class="row justify-content-center mb-3 pb-3">
                <div class="col-md-12 heading-section text-center">
                    <h1 class="big">{subheading}</h1>
                    <h2 class="mb-4">{subheading}</h2>
                </div>
            </div>
        </section>
    )
}


SectionHeader.propTypes = {
    subheading: PropTypes.string.isRequired
}


export default SectionHeader