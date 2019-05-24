import React from 'react';
import { Container } from 'reactstrap';
import UBX from '../exp/ubx';
import Cadet from '../exp/cadet';
import HP from '../exp/hp';

export default class Experience extends React.Component{
    render(){
        return(
            <Container>
                <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                    <div class="w-100">
                    <h3 class="mb-5">Experience</h3>
                    <UBX />
                    <Cadet />
                    <HP />

                    </div>
                </section>
            </Container>
        )
    }
}