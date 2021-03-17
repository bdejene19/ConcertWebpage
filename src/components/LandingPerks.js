import React from 'react';
import styled from 'styled-components';

const PerksGrid = styled.article`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: white;
    width: 100%;
    justify-items: center;
    align-self: center;
    align-items: center;

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
    padding: 5rem;
    .perksTitle {
        font-size: 48px;
        justify-items: left;  
        padding-bottom: 0.5em;;      
    }
`;


const SubHeader = styled.h3`
    font-size: 28px;
    color: ${props => props.subHeadColor};
    border-top: ${props => `solid ${props.subHeadColor} 1px`} ;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    width: 40%;

`;

export default function LandingPerks() {
    return (
        <PerksContainer>
            <h2 className='perksTitle' style={{color: 'white'}}>PERKS</h2>

            <PerksGrid key='perks'>

                <div>
                    <SubHeader subHeadColor='#ff4d4d'>Subscription<br></br>Payment <br></br>Model</SubHeader>
                    {/* <h3 subHeadColor='brown'>Subscription<br></br>Payment <br></br>Model</h3> */}
                    <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                </div>
                <div>
                    <SubHeader subHeadColor='aqua'>No Fee<br></br>Cancelation<br></br>Policy</SubHeader>
                    <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                </div>
                <div>
                    <SubHeader subHeadColor='#ffc233'>Subscription<br></br>Payment <br></br>Model</SubHeader>
                    <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                </div>
            </PerksGrid>

        </PerksContainer>
        
    )
}
