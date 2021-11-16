import React, {Suspense} from 'react';
import styled from 'styled-components';
import LandingPageHeader from '../components/homepage/LandingPageHeader';
import LandingPerks from '../components/homepage/LandingPerks';
import Reviews from '../components/homepage/Reviews';
import SlideShow from '../components/homepage/SlideShow';
import SoundSectionHome from '../components/homepage/SoundSectionHome';
import Seats from '../components/homepage/Seats';
import EmailFooter from '../components/homepage/EmailFooter';
import DownloadApp from '../components/homepage/DownloadApp';


export default function HomeLandingPage() {
    
    return (
        <PageLayout>
            <Suspense fallback={<h1>hello</h1>}>
                <HomeContainer>
                    <SectionWrapper>
                        <SlideShow bgPhotos={['concertLights.jpg', 'secondConcert.jpg', 'thirdConcert.jpg']}></SlideShow>
                    </SectionWrapper>

                    <SectionWrapper bgColor='#ff4d4d' className='scrollTo'>
                        <LandingPageHeader btnTextColor='#ff4d4d' subMenuHeader='landing2' contentColor='#ff4d4d'></LandingPageHeader>
                        <SoundSectionHome></SoundSectionHome>

                    </SectionWrapper>
                    
                    <SectionWrapper bgColor='#ffc233' className='scrollTo'>
                        <LandingPageHeader btnTextColor='#ffc233' subMenuHeader='landing3' contentColor='#ffc233'></LandingPageHeader>
                        <Seats></Seats>
                    </SectionWrapper>

                    <SectionWrapper bgColor='black' id='perks'>
                        <LandingPageHeader subMenuHeader='landing4' bgMenuColor='aqua' contentColor='black'></LandingPageHeader>
                        <LandingPerks titleOneColor='#ff4d4d' titleTwoColor='aqua' titleThreeColor='#ffc233'></LandingPerks>
                    </SectionWrapper>

                    <SectionWrapper bgColor='aqua'>
                        <LandingPageHeader subMenuHeader='landing5' contentColor='aqua'></LandingPageHeader>
                        <Reviews></Reviews>
                    </SectionWrapper>
                    <DownloadApp></DownloadApp>
                    <EmailFooter></EmailFooter>
                </HomeContainer>
            </Suspense>  
        </PageLayout>          
    )
}

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

const PageLayout = styled.div`
    h1 {
        font-size: 4rem;
    }

    p {
        font-size: 2.75rem;;
    }

    @media screen and  (max-width: 1024px) {
        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 2rem;
        }
    };

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 2.5rem;
        }

        p {
            font-size: 1.35rem;
        }
        
    }

    @media screen and (max-width: 430px) {
        h1 {
            font-size: 1.75rem;
        }

        p {
            font-size: 1.25rem;
        }
    }
`;

