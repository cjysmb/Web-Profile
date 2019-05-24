import React from 'react';
import {Container} from 'reactstrap';
import Earist from '../education/earist';
import TIP from '../education/tip';

export default class Education extends React.Component{
    render(){
        return(
            <Container>
                <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                    <div class="w-100">
                        <h3 class="mb-5">Education</h3>
                        <Earist/>
                        <TIP/>
                    </div>
                </section>
            </Container>

        );
    }
}