import React from 'react'
import backgroundImage from '../../assets/images/blog_1.jpg'
import backgroundImage2 from '../../assets/images/blog_2.jpg'
import backgroundImage3 from '../../assets/images/blog_3.jpg'
import SectionHeader from '../Utils/SectionHeader'




const BlogPanel = () => {

    const blogCount = 3
    return (
        <section class={`ftco-section   ${window.location.pathname.toString() !== '/blog' ? 'blog-panel' : 'blogs'}`} >
            <div className="container">
                {window.location.pathname.toString() !== '/blog' ? (<SectionHeader subheading={'Recent Blogs'} />) : null}
                <div class="row d-flex">
                    <div class="col-md-4 d-flex ">
                        <div class="blog-entry align-self-stretch">
                            <div className="image-section" style={{ position: 'relative' }}>
                                <div className="overlay"></div>
                                <a href="blog-single.html" class="block-20" style={{ backgroundImage: `url(${backgroundImage})` }}>
                                </a>
                            </div>
                            <div class="text mt-3 d-block">
                                <h3 class="heading mt-3"><a href="#">5 benefits of meat in your diet</a></h3>
                                <div class="meta mb-3">
                                    <div><a href="#">Dec 6, 2018</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 d-flex ">
                        <div class="blog-entry align-self-stretch">
                            <a href="blog-single.html" class="block-20" style={{ backgroundImage: `url(${backgroundImage2})` }}>
                            </a>
                            <div class="text mt-3">
                                <h3 class="heading mt-3"><a href="#">5 great recipes for this SUMMER</a></h3>
                                <div class="meta mb-3">
                                    <div><a href="#">Dec 6, 2018</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 d-flex ">
                        <div class="blog-entry align-self-stretch">
                            <a href="blog-single.html" class="block-20" style={{ backgroundImage: `url(${backgroundImage3})` }}>
                            </a>
                            <div class="text mt-3">
                                <h3 class="heading mt-3"><a href="#">5 tips for keeping your meat fresh</a></h3>
                                <div class="meta mb-3">
                                    <div><a href="#">Dec 6, 2018</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {window.location.pathname.toString() === '/blog' ? (
                    <div>
                        <div class="row d-flex">
                            <div class="col-md-4 d-flex ">
                                <div class="blog-entry align-self-stretch">
                                    <div className="image-section" style={{ position: 'relative' }}>
                                        <div className="overlay"></div>
                                        <a href="blog-single.html" class="block-20" style={{ backgroundImage: `url(${backgroundImage})` }}>
                                        </a>
                                    </div>
                                    <div class="text mt-3 d-block">
                                        <h3 class="heading mt-3"><a href="#">5 benefits of meat in your diet</a></h3>
                                        <div class="meta mb-3">
                                            <div><a href="#">Dec 6, 2018</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex ">
                                <div class="blog-entry align-self-stretch">
                                    <a href="blog-single.html" class="block-20" style={{ backgroundImage: `url(${backgroundImage2})` }}>
                                    </a>
                                    <div class="text mt-3">
                                        <h3 class="heading mt-3"><a href="#">5 great recipes for this SUMMER</a></h3>
                                        <div class="meta mb-3">
                                            <div><a href="#">Dec 6, 2018</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex ">
                                <div class="blog-entry align-self-stretch">
                                    <a href="blog-single.html" class="block-20" style={{ backgroundImage: `url(${backgroundImage3})` }}>
                                    </a>
                                    <div class="text mt-3">
                                        <h3 class="heading mt-3"><a href="#">5 tips for keeping your meat fresh</a></h3>
                                        <div class="meta mb-3">
                                            <div><a href="#">Dec 6, 2018</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex">
                            <div class="col-md-4 d-flex ">
                                <div class="blog-entry align-self-stretch">
                                    <div className="image-section" style={{ position: 'relative' }}>
                                        <div className="overlay"></div>
                                        <a href="blog-single.html" class="block-20" style={{ backgroundImage: `url(${backgroundImage})` }}>
                                        </a>
                                    </div>
                                    <div class="text mt-3 d-block">
                                        <h3 class="heading mt-3"><a href="#">5 benefits of meat in your diet</a></h3>
                                        <div class="meta mb-3">
                                            <div><a href="#">Dec 6, 2018</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex ">
                                <div class="blog-entry align-self-stretch">
                                    <a href="blog-single.html" class="block-20" style={{ backgroundImage: `url(${backgroundImage2})` }}>
                                    </a>
                                    <div class="text mt-3">
                                        <h3 class="heading mt-3"><a href="#">5 great recipes for this SUMMER</a></h3>
                                        <div class="meta mb-3">
                                            <div><a href="#">Dec 6, 2018</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex ">
                                <div class="blog-entry align-self-stretch">
                                    <a href="blog-single.html" class="block-20" style={{ backgroundImage: `url(${backgroundImage3})` }}>
                                    </a>
                                    <div class="text mt-3">
                                        <h3 class="heading mt-3"><a href="#">5 tips for keeping your meat fresh</a></h3>
                                        <div class="meta mb-3">
                                            <div><a href="#">Dec 6, 2018</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex">
                            <div class="col-md-4 d-flex ">
                                <div class="blog-entry align-self-stretch">
                                    <div className="image-section" style={{ position: 'relative' }}>
                                        <div className="overlay"></div>
                                        <a href="blog-single.html" class="block-20" style={{ backgroundImage: `url(${backgroundImage})` }}>
                                        </a>
                                    </div>
                                    <div class="text mt-3 d-block">
                                        <h3 class="heading mt-3"><a href="#">5 benefits of meat in your diet</a></h3>
                                        <div class="meta mb-3">
                                            <div><a href="#">Dec 6, 2018</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex ">
                                <div class="blog-entry align-self-stretch">
                                    <a href="blog-single.html" class="block-20" style={{ backgroundImage: `url(${backgroundImage2})` }}>
                                    </a>
                                    <div class="text mt-3">
                                        <h3 class="heading mt-3"><a href="#">5 great recipes for this SUMMER</a></h3>
                                        <div class="meta mb-3">
                                            <div><a href="#">Dec 6, 2018</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex ">
                                <div class="blog-entry align-self-stretch">
                                    <a href="blog-single.html" class="block-20" style={{ backgroundImage: `url(${backgroundImage3})` }}>
                                    </a>
                                    <div class="text mt-3">
                                        <h3 class="heading mt-3"><a href="#">5 tips for keeping your meat fresh</a></h3>
                                        <div class="meta mb-3">
                                            <div><a href="#">Dec 6, 2018</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    )
}



export default BlogPanel;