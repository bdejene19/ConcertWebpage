import React from 'react';
import styled from 'styled-components';
import { HorizontalBreak } from '../pricing/PricePlans';

export default function LandingPerks(props) {
    return (
        <PerksContainer>
            <PerksGrid key='perks'>
                <h1 className='perksTitle' style={{color: 'white'}}>PERKS</h1>

                <div>
                    <HorizontalBreak borderColor={props.titleOneColor} style={{width: 65}}></HorizontalBreak>
                    <SubHeader subHeadColor={props.titleOneColor} className='lgScreen-subH'>Subscription<br></br>Payment <br></br>Model</SubHeader>

                    <SubHeader subHeadColor={props.titleOneColor} className='smallScreen-subH'>Subscription Payment Model</SubHeader>

                    {/* <h3 subHeadColor='brown'>Subscription<br></br>Payment <br></br>Model</h3> */}
                    <h5>No commitment, cancel anytime. Never worry about forgetting a payment again!</h5>
                </div>
                <div>
                    <HorizontalBreak borderColor={props.titleTwoColor} style={{width: 65}}></HorizontalBreak>
                    <SubHeader subHeadColor={props.titleTwoColor} className='lgScreen-subH'>No Fee<br></br>Cancelation<br></br>Policy</SubHeader>
                    <SubHeader subHeadColor={props.titleTwoColor} className='smallScreen-subH'>No Fee Cancelation Policy</SubHeader>

                    <h5 style={{color: props.pColor || 'white'}}>No commitment, cancel anytime. Never worry about forgetting a payment again!</h5>
                </div>
                <div>
                    <HorizontalBreak borderColor={props.titleThreeColor} style={{width: 65}}></HorizontalBreak>
                    <SubHeader subHeadColor={props.titleThreeColor} className='lgScreen-subH'>Subscription<br></br>Payment <br></br>Model</SubHeader>
                    <SubHeader subHeadColor={props.titleThreeColor} className='smallScreen-subH'>Subscription Payment Model</SubHeader>

                    <h5 style={{color: props.pColor || 'white'}}>No commitment, cancel anytime. Never worry about forgetting a payment again!</h5>
                </div>
            </PerksGrid>

        </PerksContainer>
        
    )
}


export const PerksGrid = styled.article`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: white;
    width: 100%;
    row-gap: 3em;
    .smallScreen-subH {
        display: none;
    }
    h3 {
        color: ${props => props.subHeadColor};
        text-align: left;
        transform: scaleX(1.2);
        transform-origin: 0 0;
    }
    div {
        flex: 1 1 20em;
     }

    h5 {
        font-size: 1.75rem;
        width: 95%;
        font-weight: 500;
        color: ${props => props.pColor};
    }


    @media screen and (max-width: 1200px) {
        row-gap: 1em;

        h5 {
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 768px) {
        row-gap: 2.5em;
        h5 {
            font-size: 1.2rem;
            width: 100%;
            padding: 0;
        }

    }

    @media screen and (max-width: 450px) {
        row-gap: 2.5em;
    }

`;

const PerksContainer = styled.div`
    letter-spacing: 3px;
    padding-top: 3em;
    display: flex;
    width: 100%;
    padding-left: 4em;
    padding-right: 4em;
    
    .perksTitle {
        letter-spacing: 5px;
        justify-self: left;
        flex: 1 1 100%;
        padding-bottom: 0.5em;;      
    }

    @media screen and (max-width: 768px) {
        padding-top: 0;
        row-gap: 2em;

        .lgScreen-subH {
            display: none;
        }

        .smallScreen-subH {
            display: block;
            width: max-content;
            font-size: 1.5rem;
        }
        
    }

    @media screen and (max-width: 600px) {
        padding-left: 2em;
        br {
            display: none;
        }
    }
    @media screen and (max-width: 450px) {
        padding-top: 0;
        padding-right: 1.5em;
        padding-left: 1.5em;;
        

        .smallScreen-subH {
            display: none;
        }

        .lgScreen-subH {
            display: block;
            font-size: 1.2rem;
        }

        br {
            display: block;
        }
        .perksTitle {
            font-size: 2rem;
            padding-bottom: 0;
        }
    }
    
`;


export const SubHeader = styled.h3`
    font-size: 2.25rem;
    color: ${props => props.subHeadColor};
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    width: 40%;

    @media screen and (max-width: 1200px) {
        padding-top: 0.25em;;
    }
    @media screen and (max-width: 1024px) {
        font-size: 1.75rem;
    }
    @media screen and (max-width: 450px) {

        font-size: 1.5rem;
     
    }
`;
