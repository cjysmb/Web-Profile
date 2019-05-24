import React from 'react';

import {Container} from 'reactstrap';

export default class Skills extends React.Component{
    render(){
        return(
            <Container>
                <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                    <div class="w-100">
                    <h3 class="mb-5">Skills</h3>
                    <div class="subheading mb-3">Programming Languages &amp; Tools</div>
                        <ul class="list-inline dev-icons">
                        <li class="list-inline-item">
                            <i class="fab fa-html5"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-css3-alt"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-js-square"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-react"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-node-js"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-npm"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-git"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-linux"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-python"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fas fa-terminal"></i>
                        </li>
                        </ul>

                        <div class="subheading mb-3">Workflow</div>
                        <ul class="fa-ul mb-0">
                        <li>
                            <i class="fa-li fa fa-check"></i>
                            Mobile-First, Responsive Design</li>
                        <li>
                            <i class="fa-li fa fa-check"></i>
                            Cross Browser Testing &amp; Debugging</li>
                        <li>
                            <i class="fa-li fa fa-check"></i>
                            Cross Functional Teams</li>
                        <li>
                            <i class="fa-li fa fa-check"></i>
                            Agile Development &amp; Scrum</li>
                        </ul>
                    </div>
                </section>
            </Container>
        )
    }
}