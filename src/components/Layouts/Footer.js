import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer class="ftco-footer bg-light ftco-section">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-md">
                        <div class="ftco-footer-widget mb-4">
                            <h2 class="ftco-heading-2">Connocks Butchery</h2>
                            <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                {/* <li class=""><Link to="#"><span class="icon-twitter"></span></Link></li> */}
                                <li class=""><Link to="#"><span class="icon-facebook"></span></Link></li>
                                {/* <li class=""><Link to="#"><span class="icon-instagram"></span></Link></li> */}
                            </ul>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="ftco-footer-widget mb-4 ml-md-5">
                            <h2 class="ftco-heading-2">Menu</h2>
                            <ul class="list-unstyled">
                                <li><Link to="/shop" class="py-2 d-block">Shop</Link></li>
                                <li><Link to="/about" class="py-2 d-block">About</Link></li>
                                <li><Link to="/blog" class="py-2 d-block">Blog</Link></li>
                                <li><Link to="/contact" class="py-2 d-block">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="ftco-footer-widget mb-4">
                            <h2 class="ftco-heading-2">Help</h2>
                            <div class="d-flex">
                                <ul class="list-unstyled mr-l-5 pr-l-3 mr-4">
                                    <li><Link to="/delivery-information" class="py-2 d-block">Delivery Information</Link></li>
                                    <li><Link to="/returns-policy" class="py-2 d-block">Returns &amp; Exchange</Link></li>
                                    <li><Link to="/terms-and-conditions" class="py-2 d-block">Terms &amp; Conditions</Link></li>
                                    <li><Link to="/privacy-policy" class="py-2 d-block">Privacy Policy</Link></li>
                                    <li><Link to="/faqs" class="py-2 d-block">FAQs</Link></li>
                                </ul>
                                <ul class="list-unstyled">

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="ftco-footer-widget mb-4">
                            <h2 class="ftco-heading-2">Have a Questions?</h2>
                            <div class="block-23 mb-3">
                                <ul>
                                    <li><span class="icon icon-map-marker"></span><span class="text">33 Barthust Street, Makanda</span></li>
                                    <li><Link to="#"><span class="icon icon-phone"></span><span class="text">+27 46 622 4412</span></Link></li>
                                    <li><Link to="#"><span class="icon icon-envelope"></span><span class="text">orders@connocks.co.za</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 text-center">

                        <p>

                            Connocks Butchery, Copyright &copy;<script>
                                document.write(new Date().getFullYear());
                        </script> 2020
                    </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;