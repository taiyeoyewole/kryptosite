import React from 'react'
import { animateScroll as scroll } from 'react-scroll/modules';
 import {FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram} from 'react-icons/fa';
import { FooterContainer, FooterLink, FooterLinkContainer, FooterLinkItems, FooterLinkTitle, FooterLinkWrapper,FooterWrap, SocialMedia, SocialIcon, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLink  } from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
      }
  return (
    <>
    <FooterContainer>
        <FooterWrap>
            <FooterLinkContainer>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us</FooterLinkTitle>
                            <FooterLink to='/signin'> How it Works</FooterLink>
                            <FooterLink to='/signin'> Testimonials</FooterLink>
                            <FooterLink to='/signin'> Careers</FooterLink>
                            <FooterLink to='/signin'> Investors</FooterLink>
                            <FooterLink to='/signin'> Terms of Service</FooterLink>
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Videos</FooterLinkTitle>
                            <FooterLink to='/signin'> Submit Video</FooterLink>
                            <FooterLink to='/signin'> Ambassadors </FooterLink>
                            <FooterLink to='/signin'> Agency</FooterLink>
                            <FooterLink to='/signin'> Influencer</FooterLink>
                            
                        
                    </FooterLinkItems>
                </FooterLinkWrapper>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> Social Media</FooterLinkTitle>
                            <FooterLink to='/signin'> Instagram</FooterLink>
                            <FooterLink to='/signin'> Facebook</FooterLink>
                            <FooterLink to='/signin'> Twitter</FooterLink>
                            <FooterLink to='/signin'> Youtube</FooterLink>
                            <FooterLink to='/signin'> LinkedIn</FooterLink>
                            
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/signin'> Contact</FooterLink>
                            <FooterLink to='/signin'> Support</FooterLink>
                            <FooterLink to='/signin'> Destinations</FooterLink>
                            <FooterLink to='/signin'> Sponsorship</FooterLink>
                            
                        
                    </FooterLinkItems>
                </FooterLinkWrapper>
            </FooterLinkContainer>
           <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>dolla</SocialLogo> 
                     <WebsiteRights>  &copy; {new Date().getFullYear()} All Rights Reserved</WebsiteRights>  
                     <SocialIcon>
                    <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                    <FaFacebook/>
                    </SocialIconLink>
                    </SocialIcon>
                    <SocialIcon>
                    <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                    <FaInstagram/>
                    </SocialIconLink>
                    </SocialIcon>
                    <SocialIcon>
                    <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                    <FaTwitter/>
                    </SocialIconLink>
                    </SocialIcon>
                    <SocialIcon>
                    <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                    <FaYoutube/>
                    </SocialIconLink>
                    </SocialIcon>
                    <SocialIcon>
                    <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                    <FaLinkedin/>
                    </SocialIconLink>
                    </SocialIcon> 
                 </SocialMediaWrap>
            </SocialMedia> 
        </FooterWrap>
    </FooterContainer>
    </>
  )
}

export default Footer