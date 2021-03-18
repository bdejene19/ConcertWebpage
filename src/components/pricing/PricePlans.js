import React from 'react';
import styled from 'styled-components';
import {PerksGrid, SubHeader} from '../homepage/LandingPerks';
import LandingPageHeader from '../homepage/LandingPageHeader';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
const PriceContainer = styled.article`
    display: grid;
    color: white;
    background-color: black;

    h1 {
        grid-column: 1/4;
    }  

    .pricing-caption {
        grid-column: 1/4;
    }
    .music-point{
        font-size: 12px;
        align-items: center;
        justify-self: center;
    
    }

    .price-text {
        width: max-content;
        display: flex;
        flex-direction: row;
        column-gap: 0.25em;
    }

    

`;

export default function PricePlans() {
    return (
        <div style={{backgroundColor: 'black'}}>
            <LandingPageHeader></LandingPageHeader>

            <h1>Pricing</h1>
            <p className='pricing-caption'>Test out our app today! Choose from the three subscription based payment models.</p>
            {/* <PerksGrid>
                <div>
                    <SubHeader>Basic<hr>Monthly</hr></SubHeader>
                    <h1>$9</h1>
                    <div className='pricingNotes'>
                        <MusicNoteIcon className='music-point'></MusicNoteIcon> <p>Very good</p>
                    </div>
                </div>
            </PerksGrid> */}

            <PerksGrid style={{gridColumn: '1/4'}}>
                <div>
                    <SubHeader>Basic<hr></hr>Monthly</SubHeader>
                    <h1><b>$9</b></h1>
                    <div className='price-text'>
                        <MusicNoteIcon className='music-point'></MusicNoteIcon>
                        <p>Very good.</p>
                    </div>
                    <div className='price-text'>
                        <MusicNoteIcon className='music-point'></MusicNoteIcon>
                        <p>Amazing.</p>
                    </div><div className='price-text'>
                        <MusicNoteIcon className='music-point'></MusicNoteIcon>
                        <p>Perfect Job.</p>
                    </div><div className='price-text'>
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
                </div>

                <div>
                    <SubHeader>Basic<hr></hr>Monthly</SubHeader>
                    <h1><b>$9</b></h1>
                    <div className='price-text'>
                        <MusicNoteIcon className='music-point'></MusicNoteIcon>
                        <p>Very good.</p>
                    </div>
                    <div className='price-text'>
                        <MusicNoteIcon className='music-point'></MusicNoteIcon>
                        <p>Amazing.</p>
                    </div><div className='price-text'>
                        <MusicNoteIcon className='music-point'></MusicNoteIcon>
                        <p>Perfect Job.</p>
                    </div><div className='price-text'>
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
                </div>

                <div>
                    <SubHeader>Basic<hr></hr>Monthly</SubHeader>
                    <h1><b>$9</b></h1>
                    <div className='price-text'>
                        <MusicNoteIcon className='music-point'></MusicNoteIcon>
                        <p>Very good.</p>
                    </div>
                    <div className='price-text'>
                        <MusicNoteIcon className='music-point'></MusicNoteIcon>
                        <p>Amazing.</p>
                    </div><div className='price-text'>
                        <MusicNoteIcon className='music-point'></MusicNoteIcon>
                        <p>Perfect Job.</p>
                    </div><div className='price-text'>
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
                </div>
            </PerksGrid>

            

        </div>
        
    )
}
