import React from 'react'
import CheckoutTotal from '../Cart/CheckoutTotal'


const CheckoutForm = () => {
    return (
        <section class="ftco-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8 ">
                        <form action="#" class="billing-form bg-light p-3 p-md-5">
                            <h3 class="mb-4 billing-heading">Billing Details</h3>
                            <div class="row align-items-end">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="firstname">Firt Name</label>
                                        <input type="text" class="form-control" placeholder="" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="lastname">Last Name</label>
                                        <input type="text" class="form-control" placeholder="" />
                                    </div>
                                </div>
                                <div class="w-100"></div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="streetaddress">Street Address</label>
                                        <input type="text" class="form-control" placeholder="House number and street name" />
                                    </div>
                                </div>

                                <div class="w-100"></div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="phone">Phone</label>
                                        <input type="text" class="form-control" placeholder="" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="emailaddress">Email Address</label>
                                        <input type="text" class="form-control" placeholder="" />
                                    </div>
                                </div>
                                <div class="w-100"></div>
                                <div class="col-md-12">
                                    <div class="form-group mt-4">
                                        <div class="radio">
                                            <label class="mr-3"><input type="radio" name="optradio" /> Create an Account? </label>
                                            <label><input type="radio" name="optradio" /> Ship to different address</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>


                        <CheckoutTotal />
                        <div class="row mt-5 pt-3 d-flex">
                            <div class="col-md-12">
                                <div class="cart-detail bg-light p-3 p-md-4">
                                    <h3 class="billing-heading mb-4">Payment Method</h3>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <div class="radio">
                                                <label><input type="radio" name="optradio" class="mr-2" /> Cash </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <div class="radio">
                                                <label><input type="radio" name="optradio" class="mr-2" /> Card</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <div class="checkbox">
                                                <label><input type="checkbox" value="" class="mr-2" /> I have read and accept the terms and conditions</label>
                                            </div>
                                        </div>
                                    </div>
                                    <p><a href="#" class="btn btn-primary py-3 px-4">Place an order</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default CheckoutForm;