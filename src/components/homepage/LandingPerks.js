import React from 'react';
import styled from 'styled-components';
import { HorizontalBreak } from '../pricing/PricePlans';

export const PerksGrid = styled.article`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: white;
    width: 70%;
    ;

    h3 {
        font-size: 28px;
        color: ${props => props.subHeadColor};
        text-align: left;
    }
    div {
        width: 70%;
     }

    p {
        font-size: 18px;
    }
`;

const PerksContainer = styled.div`
    padding-top: 3em;
    display: grid;
    justify-items: center;
    .perksTitle {
        font-size: 48px;
        justify-self: left;
        grid-column: 1/4;
        padding-bottom: 0.5em;;      
    }
`;


export const SubHeader = styled.h3`
    font-size: 28px;
    color: ${props => props.subHeadColor};
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    width: 40%;

`;

export default function LandingPerks(props) {
    return (
        <PerksContainer>

            <PerksGrid key='perks'>
                <h2 className='perksTitle' style={{color: 'white'}}>PERKS</h2>

                <div>
                    <HorizontalBreak borderColor={props.titleOneColor}></HorizontalBreak>
                    <SubHeader subHeadColor={props.titleOneColor}>Subscription<br></br>Payment <br></br>Model</SubHeader>
                    {/* <h3 subHeadColor='brown'>Subscription<br></br>Payment <br></br>Model</h3> */}
                    <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                </div>
                <div>
                    <HorizontalBreak borderColor={props.titleTwoColor}></HorizontalBreak>
                    <SubHeader subHeadColor={props.titleTwoColor}>No Fee<br></br>Cancelation<br></br>Policy</SubHeader>
                    <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                </div>
                <div>
                    <HorizontalBreak borderColor={props.titleThreeColor}></HorizontalBreak>
                    <SubHeader subHeadColor={props.titleThreeColor}>Subscription<br></br>Payment <br></br>Model</SubHeader>
                    <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                </div>
            </PerksGrid>

        </PerksContainer>
        
    )
}
