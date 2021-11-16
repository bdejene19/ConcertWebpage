import React from 'react';
import styled from 'styled-components';
import LandingPageHeader from '../homepage/LandingPageHeader';
import PlanOption from './PlanOption';

export default function PricePlans() {
    return (
        <div style={{backgroundColor: 'black', display: 'grid', justifyItems: 'center'}}>
            <LandingPageHeader showBtn={false} subMenuHeader='pricingPage1'  bgMenuColor='aqua' contentColor='black'></LandingPageHeader>
            <PricingContainer>

                <h1>PRICING</h1>
                <p className='pricing-caption'>Test out our app today! Choose from the three subscription based payment models.</p>
                <br></br>
                <Prices>  
                    <PlanOption plan='Basic' price='9' headerColor='#ff4d4d'/>
                    <PlanOption plan='Advanced' price='99' veryGood='very' headerColor='#ffc233' extraFeatures='More '/>
                    <PlanOption plan='Pro' price='120' veryGood='very' headerColor='aqua' extraFeatures='Even More ' />
                </Prices>
            </PricingContainer>
        </div>
        
    )
}

const PricingContainer = styled.article`
    color: white;
    background-color: black;
    align-items: center;
    justify-content: center;
    padding: 1em;
    width: 75%;
    padding-bottom: 10em;

    h1 {
        font-size: 3rem;
        font-weight: bold;
    }  

    .pricing-caption {
        padding-top: 1em;
        font-size: 2.5rem;
    }
    .music-point{
        font-size: 16px;
        align-items: center;
        justify-self: center;
    }

    @media screen and (max-width: 768px) {
        row-gap: 3em;

        .pricing-caption {
            font-size: 1.75rem;
        }
    }

    @media screen and (max-width: 450px) {
        h1 {
            font-size: 2.5rem;
        }
        .pricing-caption {
            font-size: 1.35rem;
        }
    }
`;


const Prices = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: white;
    row-gap: 3em;;
  

    h1 {
        font-size: 3.5rem;
    }

    p {
        font-size: 1.75rem;
    }

    div {
        flex: 1 1 15em;
    }
    .plan-name {
        font-size: 2.75rem;
    }
    .price-text {
        width: max-content;
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 0.25em;
    }

    .tryNow {
        width: 60%;
        color: white;
        height: 6vh;
        justify-self: right;
        border-radius: 20px 20px ;
        border: 1px white;
        cursor: pointer;
        outline: none;

    }

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 2.5rem;
        }
        p {
            font-size: 1.35rem;
        }

        .plan-name {
            font-size: 2rem;
        }
    }

   
`;

export const HorizontalBreak = styled.hr`
    border: ${props => `${props.borderColor} 1px solid` || 'white'};
    width: ${props => props.largeWidth || '30%'};

`;

