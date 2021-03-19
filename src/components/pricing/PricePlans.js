import React from 'react';
import styled from 'styled-components';
import {SubHeader} from '../homepage/LandingPerks';
import LandingPageHeader from '../homepage/LandingPageHeader';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const PricingContainer = styled.article`
    display: grid;
    color: white;
    background-color: black;
    align-items: center;
    justify-content: center;
    padding: 1em;
    width: 75%;
    padding-bottom: 10em;

    h1 {
        font-size: 48px;
    }  

    .pricing-caption {
        grid-column: 1/4;
        padding-top: 1em;
        font-size: 36px;
    }
    .music-point{
        font-size: 16px;
        align-items: center;
        justify-self: center;
    
    }

   
`;


const Prices = styled.div`
    display: grid;
    grid-column: 1/4;
    color: white;
    grid-template-columns: repeat(3, auto);
  
    column-gap: 0;


    hr {
        width: 40%;
    }

    h1 {
        font-size: 64px;
    }

    p {
        font-size: 32px;
    }

    .plan-name {
        font-size: 28px;
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
`;

const PricingText = styled.div`
    color: white;

   

`;

export default function PricePlans() {
    return (
        <div style={{backgroundColor: 'black', display: 'grid', justifyItems: 'center'}}>
            <LandingPageHeader></LandingPageHeader>
            <PricingContainer>

                <h1>PRICING</h1>
                <p className='pricing-caption'>Test out our app today! Choose from the three subscription based payment models.</p>
                <br></br>
                <Prices>  
                    <div>
                        <div style={{color: '#ff4d4d'}}>
                            <SubHeader className='plan-name'>Basic<hr style={{border: 'solid #ff4d4d 1px'}}></hr>Monthly</SubHeader>
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
                        <button className='tryNow' style={{backgroundColor: '#ff4d4d'}}><b>SELECT</b></button>
                    </div>

                    <div>
                        <div style={{color: '#ffc233'}}>
                            <SubHeader className='plan-name'>Advanced<hr style={{border: 'solid #ffc233 1px'}}></hr>Yearly</SubHeader>
                            <h1><b>$99</b></h1>
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
                        <button className='tryNow' style={{backgroundColor: '#ffc233'}}><b>SELECT</b></button>

                    </div>

                    <div>
                        <div style={{color: 'aqua'}}>
                            <SubHeader className='plan-name'>Pro<hr style={{border: 'solid aqua 1px'}}></hr>Yearly</SubHeader>
                            <h1><b>$120</b></h1>
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

                        <button className='tryNow' style={{backgroundColor: 'aqua'}}><b>SELECT</b></button>

                    </div>
                </Prices>
            </PricingContainer>
        </div>
        
    )
}
