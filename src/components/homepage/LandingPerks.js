import React from 'react';
import styled from 'styled-components';
import { HorizontalBreak } from '../pricing/PricePlans';

export const PerksGrid = styled.article`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: white;
    width: 88%;

    h3 {
        color: ${props => props.subHeadColor};
        text-align: left;
        transform: scaleX(1.2);
        transform-origin: 0 0;
    }
    div {
        width: 70%;
     }

    p {
        font-size: 24px;
        width: 95%;
        color: ${props => props.pColor};
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
        grid-column: 1/4;
        padding-bottom: 0.5em;;      
    }
`;


export const SubHeader = styled.h3`
    font-size: 32px;
    color: ${props => props.subHeadColor};
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    width: 40%;
`;

export default function LandingPerks(props) {
    return (
        <PerksContainer id='perks'>

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
