import React from 'react';
import styled from 'styled-components';
import {SubHeader} from '../homepage/LandingPerks';
import LandingPageHeader from '../homepage/LandingPageHeader';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import {Link} from 'react-router-dom';

export default function PricePlans() {
    return (
        <div style={{backgroundColor: 'black', display: 'grid', justifyItems: 'center'}}>
            <LandingPageHeader showBtn={false} subMenuHeader='pricingPage1'  bgMenuColor='aqua' contentColor='black'></LandingPageHeader>
            <PricingContainer>

                <h1>PRICING</h1>
                <p className='pricing-caption'>Test out our app today! Choose from the three subscription based payment models.</p>
                <br></br>
                <Prices>  
                    <div>
                        <div style={{color: '#ff4d4d'}}>
                            <SubHeader className='plan-name'>Basic<HorizontalBreak borderColor='#ff4d4d' largeWidth='70%'></HorizontalBreak>Monthly</SubHeader>
                            <h1><b>$9</b></h1>
                        </div>
                        <br></br>
                        <div className='price-text'>
                            <MusicNoteIcon className='music-point'></MusicNoteIcon>
                            <p>Very good.</p>
                        </div>
                        <div className='price-text'>
                            <MusicNoteIcon className='music-point'></MusicNoteIcon>
                            <p>Amazing.</p>
                        </div>
                        
                        <div className='price-text'>
                            <MusicNoteIcon className='music-point'></MusicNoteIcon>
                            <p>Perfect Job.</p>
                        </div>
                        
                        <div className='price-text'>
                            <MusicNoteIcon className='music-point'></MusicNoteIcon>
                            <p>Love This.</p>
                        </div>

                        <div className='price-text'>
                            <MusicNoteIcon className='music-point'></MusicNoteIcon>
                            <p>It's so good.</p>
                        </div>

                        <div className='price-text'>
                            <MusicNoteIcon className='music-point'></MusicNoteIcon>
                            <p>Features.</p>
                        </div>

                        <br></br>
                        <Link to='/payNow'>
                            <button className='tryNow' style={{backgroundColor: '#ff4d4d'}}><b>SELECT</b></button>
                        </Link>
                    </div>

                    <div>
                        <div style={{color: '#ffc233'}}>
                            <SubHeader className='plan-name'>Advanced<HorizontalBreak borderColor='#ffc223' largeWidth='70%'></HorizontalBreak>Yearly</SubHeader>
                            <h1><b>$99</b></h1>
                        </div>
                        <br></br>
                    
                        <div className='price-text'>
                            <MusicNoteIcon className='music-point'></MusicNoteIcon>
                            <p>Very very good.</p>
                        </div>
                        <div className='price-text'>
                            <MusicNoteIcon className='music-point'></MusicNoteIcon>
                            <p>Even Amazing.</p>
                        </div>
                        
                        <div className='price-text'>
                            <MusicNoteIcon className='music-point'></MusicNoteIcon>
                            <p>Perfect Job.</p>
                        </div>
                        
                        <div className='price-text'>
                            <MusicNoteIcon className='music-point'></MusicNoteIcon>
                            <p>Love this More.</p>
                        </div>

                        <div className='price-text'>
                            <MusicNoteIcon className='music-point'></MusicNoteIcon>
                            <p>It's so so good.</p>
                        </div>

                        <div className='price-text'>
                            <MusicNoteIcon className='music-point'></MusicNoteIcon>
                            <p>More Features.</p>
                        </div>

                        <br></br>
                        <Link to='/payNow'>
                            <button className='tryNow' style={{backgroundColor: '#ffc233'}}><b>SELECT</b></button>
                        </Link>

                    </div>

                    <div>
                        <div style={{color: 'aqua'}}>
                            <SubHeader className='plan-name'>Pro<HorizontalBreak borderColor='aqua' largeWidth='70%'></HorizontalBreak>Yearly</SubHeader>
                            <h1><b>$120</b></h1>
                        </div>

                        <br></br>
                        
                        <div className='price-text'>
                            <MusicNoteIcon className='music-point'></MusicNoteIcon>
                            <p>Very very good.</p>
                        </div>
                        <div className='price-text'>
                            <MusicNoteIcon className='music-point'></MusicNoteIcon>
                            <p>Even Amazing.</p>
                        </div>
                        
                        <div className='price-text'>
                            <MusicNoteIcon className='music-point'></MusicNoteIcon>
                            <p>Perfect Job.</p>
                        </div>
                        
                        <div className='price-text'>
                            <MusicNoteIcon className='music-point'></MusicNoteIcon>
                            <p>Love this More.</p>
                        </div>

                        <div className='price-text'>
                            <MusicNoteIcon className='music-point'></MusicNoteIcon>
                            <p>It's so so good.</p>
                        </div>

                        <div className='price-text'>
                            <MusicNoteIcon className='music-point'></MusicNoteIcon>
                            <p>More Features.</p>
                        </div>
                        <br></br>
                        
                        <Link to='/payNow'>
                            <button className='tryNow' style={{backgroundColor: 'aqua'}}><b>SELECT</b></button>
                        </Link>

                    </div>
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

