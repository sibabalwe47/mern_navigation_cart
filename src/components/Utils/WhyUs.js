import React from 'react'
import Background from '../../assets/images/bg_2.jpeg'



const WhyUs = () => {
    return (
        <section class="ftco-section ftco-no-pb ftco-no-pt bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${Background})` }}>
                        <div className="overlay"></div>
                    </div>
                    <div class="col-md-7 py-5 wrap-about pb-md-5" style={{ paddingLeft: "6rem" }}>
                        <div class="heading-section-bold mb-5 mt-md-5">
                            <div class="ml-md-0">
                                <h2 class="mb-4">Why <br /><span>Connocks Butchery ?</span></h2>
                            </div>
                        </div>
                        <div class="pb-md-5">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default WhyUs;