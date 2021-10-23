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
                    <SubHeader subHeadColor={props.titleOneColor}>Subscription<br></br>Payment <br></br>Model</SubHeader>
                    {/* <h3 subHeadColor='brown'>Subscription<br></br>Payment <br></br>Model</h3> */}
                    <p style={{color: props.pColor || 'white'}}>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                </div>
                <div>
                    <HorizontalBreak borderColor={props.titleTwoColor} style={{width: 65}}></HorizontalBreak>
                    <SubHeader subHeadColor={props.titleTwoColor}>No Fee<br></br>Cancelation<br></br>Policy</SubHeader>
                    <p style={{color: props.pColor || 'white'}}>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                </div>
                <div>
                    <HorizontalBreak borderColor={props.titleThreeColor} style={{width: 65}}></HorizontalBreak>
                    <SubHeader subHeadColor={props.titleThreeColor}>Subscription<br></br>Payment <br></br>Model</SubHeader>
                    <p style={{color: props.pColor || 'white'}}>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
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
    width: 88%;
    row-gap: 3em;

    h3 {
        color: ${props => props.subHeadColor};
        text-align: left;
        transform: scaleX(1.2);
        transform-origin: 0 0;
    }
    div {
        flex: 1 1 20em;
     }

    p {
        font-size: 24px;
        width: 95%;
        color: ${props => props.pColor};
    }

    @media screen and (max-width: 1024px) {
        row-gap: 10em;
    }

    @media screen and (max-width: 768px) {
        row-gap: 3em;
    }

    @media screen and (max-width: 450px) {
        row-gap: 1em;
    }

`;

const PerksContainer = styled.div`
    letter-spacing: 3px;
    padding-top: 3em;
    display: grid;
    justify-items: center;
    .perksTitle {
        font-size: 60px;
        letter-spacing: 5px;
        justify-self: left;
        flex: 1 1 100%;
        padding-bottom: 0.5em;;      
    }
    @media screen and (max-width: 450px) {
        padding-top: 0;

        .perksTitle {
            font-size: 2.75rem;
        }
    }
    
`;


export const SubHeader = styled.h3`
    font-size: 2.5rem;
    color: ${props => props.subHeadColor};
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    width: 40%;


    @media screen and (max-width: 450px) {

        font-size: 1.5rem;
        br {
            display: none;
        }
    }
`;
