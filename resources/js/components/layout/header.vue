<template>
 <div>
       <!-- Preloader Start -->
    <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
            <div class="preloader-inner position-relative">
                <div class="preloader-circle"></div>
                <div class="preloader-img pere-text">
                    <img src="assets/img/logo/logo.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- Preloader Start -->
    <header>
        <!-- Header Start -->
       <div class="header-area header-transparrent">
           <div class="headder-top header-sticky">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-md-2">
                            <!-- Logo -->
                            <div class="logo">
                                <router-link to="/"><img src="assets/img/logo/logo.png" alt=""></router-link>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-9">
                            <div class="menu-wrapper">
                                <!-- Main-menu -->
                                <div class="main-menu">
                                    <nav class="d-none d-lg-block">
                                        <ul id="navigation">
                                            <li><router-link to="/">Home</router-link></li>
                                            <li><router-link to="/Joblisting">Find a Jobs </router-link></li>
                                            <li><router-link to="/about">About</router-link></li>
<!--                                            <li><a href="#">Page</a>-->
<!--                                                <ul class="submenu">-->
<!--                                                    <li><a href="blog.html">Blog</a></li>-->
<!--                                                    <li><a href="single-blog.html">Blog Details</a></li>-->
<!--                                                    <li><a href="elements.html">Elements</a></li>-->
<!--                                                    <li><a href="job_details.html">job Details</a></li>-->
<!--                                                </ul>-->
<!--                                            </li>-->
                                            <li><router-link to="/blog">Blog</router-link></li>
                                            <li><router-link to="contact">Contact</router-link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <!-- Header-btn -->
                                <div class="header-btn d-none f-right d-lg-block">
                                    <a href="#" class="btn head-btn1">Register</a>
                                    <a href="#" class="btn head-btn2">Login</a>
                                </div>
                            </div>
                        </div>
                        <!-- Mobile Menu -->
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
           </div>
       </div>
        <!-- Header End -->
    </header>
 </div>
</template>

<script>
export default {


}
</script>

<style>

</style>
