import React,{useState} from 'react'
import video from '../../video/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroBtnWrapper, HeroH1, HeroP, HeroContent,ArrowForward,ArrowRight } from './HeroElements';
import { Button } from "../ButtonElements";


const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }




  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={video} type= 'video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>
                Invest in Crypto Made Very Easy
            </HeroH1>
            <HeroP>
               Sign up for a new account now and receive 500% profit in credit towards ypur next payment.
            </HeroP>
            <HeroBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary = 'true' dark='true' smooth= {true} duration= {500} spy= {true} exact='true' offset={-80}>
                    Get Started {hover ? <ArrowForward/> : <ArrowRight/> }
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection