import React from 'react';
import styled from 'styled-components';
import LandingPageHeader from '../components/homepage/LandingPageHeader';
import LandingPerks from '../components/homepage/LandingPerks';
import Reviews from '../components/homepage/Reviews';
import SlideShow from '../components/homepage/SlideShow';
import SoundSectionHome from '../components/homepage/SoundSectionHome';
import Seats from '../components/homepage/Seats';
import EmailFooter from '../components/homepage/EmailFooter';
import DownloadApp from '../components/homepage/DownloadApp';

export const SectionWrapper = styled.section`
    width: 100vw;
    height: 99vh;
    background-color: ${props => props.bgColor};
`;

const HomeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
    /* scroll-snap-type: y mandatory; */

    /* position: absolute; */

    .scrollTo {
        scroll-snap-align: start;
    }
`;


export default function HomeLandingPage() {
    return (
        <div>
        <HomeContainer>
            <SectionWrapper>
                <SlideShow></SlideShow>
            </SectionWrapper>

            <SectionWrapper bgColor='#ff4d4d' className='scrollTo'>
                <LandingPageHeader btnTextColor='#ff4d4d'></LandingPageHeader>
                <SoundSectionHome></SoundSectionHome>

            </SectionWrapper>
            
            <SectionWrapper bgColor='#ffc233' className='scrollTo'>
                <LandingPageHeader btnTextColor='#ffc233'></LandingPageHeader>
                <Seats></Seats>
            </SectionWrapper>

            <SectionWrapper bgColor='black'>
                <LandingPageHeader></LandingPageHeader>
                <LandingPerks titleOneColor='#ff4d4d' titleTwoColor='aqua' titleThreeColor='#ffc233'></LandingPerks>
            </SectionWrapper>

            <SectionWrapper bgColor='aqua'>
                <LandingPageHeader></LandingPageHeader>
                <Reviews></Reviews>
            </SectionWrapper>
            <DownloadApp></DownloadApp>
            <EmailFooter></EmailFooter>
        </HomeContainer>
       

            
            
        </div>
    )
}
