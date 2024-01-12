import React from "react";
import "./Footer.css";
import logo from "../../asset/logo.png";

import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagramSquare,
    FaYoutube,
  } from "react-icons/fa";
  import { IoIosArrowUp } from "react-icons/io";

export default function Footer() {
  return (
    <div>

      <div className="footer">
        <div className="footer-info">
          <h3>Subscribe on our newsletter</h3>
          <p>
            Get daily news on upcoming offers from many suppliers all over the
            word
          </p>
        </div>
        <div className="footer-button">
          <input
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button type="button" class="btn btn-primary">Subscribe</button>
        </div>
      </div>
      <footer class="bg-white ">
    <div class="footer-top py-8">
        <div class="container">
            <div class="row gy-5">
                <div class="col-lg-8 pe-xxl-10">
                    <div class="row gy-5">
                    <div class="col-6 text-start col-lg-4">
                            <img src={logo} alt="" />
                            <ul class="list-unstyled footer-link-01 m-0">
                                <li><a class="text-black text-decoration-none text-opacity-75" href="#">Best information about the company<br/>gies here but now lorem ipsum is</a></li>
                                <div class="d-flex justify-content-between">
                                <FaFacebook/>
                                <FaInstagramSquare/>
                                <FaLinkedin/>
                                <FaTwitter/>
                                <FaYoutube/>
                                </div>
                            </ul>
                        </div>
                        <div class="col-6 text-start  col-lg-4">
                            <h5 class="text-black  footer-title-01">About</h5>
                            <ul class="list-unstyled footer-link-01 m-0">
                                <li><a class="text-black text-decoration-none text-opacity-75" href="#">About Us</a></li>
                                <li><a class="text-black text-decoration-none text-opacity-75" href="#">Blog</a></li>
                                <li><a class="text-black text-decoration-none text-opacity-75" href="#">Our ingredients</a></li>
                                <li><a class="text-black text-decoration-none text-opacity-75" href="#">Our resellers</a></li>
                            </ul>
                        </div>
                        <div class="col-6 text-start col-lg-4">
                            <h5 class="text-black  footer-title-01">Information</h5>
                            <ul class="list-unstyled footer-link-01 m-0">
                                <li><a class="text-black text-decoration-none text-opacity-75" href="#">Customer Service</a></li>
                                <li><a class="text-black text-decoration-none text-opacity-75" href="#">Privacy Policy</a></li>
                                <li><a class="text-black text-decoration-none text-opacity-75" href="#">Cookie Policy</a></li>
                                <li><a class="text-black text-decoration-none text-opacity-75" href="#">Terms &amp; Conditions</a></li>
                                <li><a class="text-black text-decoration-none text-opacity-75" href="#">Terms of Use</a></li>
                            </ul>
                        </div>
                        {/* <div class="col-6 col-lg-4">
                            <h5 class="text-black footer-title-01">Partnership</h5>
                            <ul class="list-unstyled footer-link-01 m-0">
                                <li><a class="text-black text-opacity-75" href="#">Contact Us</a></li>
                                <li><a class="text-black text-opacity-75" href="#">FAQs</a></li>
                                <li><a class="text-black text-opacity-75" href="#">Offers &amp; Kits</a></li>
                                <li><a class="text-black text-opacity-75" href="#">Get the app</a></li>
                                <li><a class="text-black text-opacity-75" href="#">Store locator</a></li>
                            </ul>
                        </div> */}

                        
                    </div>
                </div>            
            </div>
        </div>
    </div>
    <div class="footer-bottom small py-3 border-top border-black border-opacity-10">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-md-start py-1">
                    <p class="m-0 text-black text-opacity-75">© 2022 copyright by <a class="text-reset text-decoration-none" href="#">bootdey.com</a></p>
                </div>
                <div class="col-md-6 text-center text-md-end py-1">
                    <ul class="nav justify-content-center justify-content-md-end list-unstyled footer-link-01 m-0">
                        <li class="p-0 mx-3 ms-md-0 me-md-3"><a href="#" class="text-black text-decoration-none text-opacity-75">English</a></li>
                       
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
    </div>
  );
}
