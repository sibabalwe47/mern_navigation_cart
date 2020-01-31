import React, { Fragment } from 'react'

const ContactInfo = () => {
    return (
        <Fragment>
            <div class="col-md-4 d-flex">
                <div class="info bg-white p-4">
                    <p><span>Address:</span> 33 Barthust Street, Makanda
</p>
                </div>
            </div>
            <div class="col-md-4 d-flex">
                <div class="info bg-white p-4">
                    <p><span>Phone:</span> <a href="tel://1234567920">+27 46 622 4412
</a></p>
                </div>
            </div>
            <div class="col-md-4 d-flex">
                <div class="info bg-white p-4">
                    <p><span>Email:</span> <a href="mailto:info@yoursite.com">	orders@connocks.co.za</a></p>
                </div>
            </div>
            {/* <div class="col-md-3 d-flex">
                <div class="info bg-white p-4">
                    <p><span>Website</span> <a href="#">yoursite.com</a></p>
                </div>
            </div> */}
        </Fragment>
    )
}

export default ContactInfo