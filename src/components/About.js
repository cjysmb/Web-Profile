import React from 'react';
import { Container } from 'reactstrap';

export default class About extends React.Component{
    render() {
        return(
            <Container>
                
                <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div class="w-100">
                    <h1 class="mb-0">Christian Jaede
                      <span class="text-primary"> Samboa</span>
                    </h1>

                    <div class="subheading mb-0">  Brgy Bagong Nayon I · Antipolo City, Rizal 1870 · (02) 820-34-35 · 
                      <a href="https://www.gmail.com"> cjay@ubx.ph</a>
                    </div>
                    <br />
                    <p class="lead mb-5">
                        Former Bench Engineer from
                        my previous job which is all
                        about hardware diagnostics
                        and computer
                        troubleshooting. Change my
                        career as Junior Software
                        Engineer to pursue my
                        dream and learn more about
                        software development and
                        latest technologies.
                    </p>

                    <div class="social-icons">
                      <a href="https://www.linkedin.com/in/christian-jaede-samboa-3a8a67181/">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                      <a href="https://www.github.com/cjysmb">
                        <i class="fab fa-github"></i>
                      </a>
                      <a href="https://www.instagram.com/_cjyboaaaa/">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="https://www.facebook.com/badoongs">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </div>
                </div>
                </section>

            </Container>
        );
    }
}