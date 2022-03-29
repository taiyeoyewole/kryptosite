import React from 'react';
import icon1 from '../../images/4.svg';
import icon2 from '../../images/5.svg';
import icon3 from '../../images/6.svg';
import {ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper} from './ServicesElements'

const Services = () => {
  return (
    <>
    <ServicesContainer id= 'services'>
        <ServicesH1> Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src = {icon1}/>
                <ServicesH2> Reduce Expenses</ServicesH2>
                <ServicesP> We help reduce your fees and increase your revenue.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src = {icon2}/>
                <ServicesH2> Virtual</ServicesH2>
                <ServicesP> You can access our platform Online from anywhere in the world.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src = {icon3}/>
                <ServicesH2> Benefits</ServicesH2>
                <ServicesP> We help reduce your fees and increase your revenue.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}

export default Services