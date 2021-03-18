import { Slide } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import LandingPageHeader from '../components/LandingPageHeader';
import LandingPerks from '../components/LandingPerks';
import Reviews from '../components/Reviews';
import SlideShow from '../components/SlideShow';
import SoundSectionHome from '../components/SoundSectionHome';

const SectionWrapper = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.bgColor};
`;

const SectionContent = styled.article`

`;

export default function HomeLandingPage() {
    return (
        <div>
            <SectionWrapper style={{backgroundImage: 'url("thirdConcert.jpg")', backgroundSize: 'cover'}} >
                <LandingPageHeader></LandingPageHeader>
                <SlideShow></SlideShow>
            </SectionWrapper>

            <SectionWrapper bgColor='#ff4d4d'>
                <LandingPageHeader btnTextColor='#ff4d4d'></LandingPageHeader>
                <SoundSectionHome></SoundSectionHome>

            </SectionWrapper>
            
            <SectionWrapper bgColor='#ffc233'>
                <LandingPageHeader btnTextColor='#ffc233'></LandingPageHeader>

            </SectionWrapper>

            <SectionWrapper bgColor='black'>
                <LandingPageHeader></LandingPageHeader>
                <LandingPerks></LandingPerks>
            </SectionWrapper>

            <SectionWrapper bgColor='aqua'>
                <LandingPageHeader></LandingPageHeader>
                <Reviews></Reviews>
            </SectionWrapper>
        </div>
    )
}
