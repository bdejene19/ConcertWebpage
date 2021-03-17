import React from 'react';
import styled from 'styled-components';
import LandingPageHeader from '../components/LandingPageHeader';
import LandingPerks from '../components/LandingPerks';
import Reviews from '../components/Reviews';

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
            <SectionWrapper >
                <LandingPageHeader></LandingPageHeader>
            </SectionWrapper>

            <SectionWrapper bgColor='#ff4d4d'>
                <LandingPageHeader></LandingPageHeader>


            </SectionWrapper>
            
            <SectionWrapper bgColor='#ffc233'>
                <LandingPageHeader></LandingPageHeader>

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
