import React, { useEffect } from 'react';
import styled from 'styled-components';
import LandingPageHeader from './LandingPageHeader';

const SlideShowWrapper = styled.article`
    width: 100%;
    height: 100%;
    background-size: cover;
    color: white;
    /* background-image: url('concertLights.jpg'); */

    .slide-img {
        height: 100vh;
    }

    #slideShow {
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
        align-items: center;

        .slideShowText {
            grid-column: 1/3;
            align-self: center;
            transform: translateY(-50%);

            h1 {
                font-size: 48px;
            }
            p {
                margin-left: 12em;
                margin-right: 12em;
                padding-top: 1em;
                padding-bottom: 1em;
                font-size: 28px;
            }
        } 
    }
    
    .rainbowTryNow {
        width: 15vw;
        height: 7vh;
        background-color: white;
        background: linear-gradient(90deg, aqua 10%, blue 30%, red 55%, yellow );
        color: white;
        justify-self: right;
        border-radius: 25px 25px ;
        border: 1px white;
        cursor: pointer;
    }
`;



export default function SlideShow() {

    let backgroundImages = ['concertLights.jpg', 'secondConcert.jpg', 'thirdConcert.jpg'];
    let count = 0;

    useEffect(() => {
        document.getElementById('slide-wrapper').style.backgroundImage = `url(${backgroundImages[count]})`;

        setInterval(() => {
            document.getElementById('slide-wrapper').style.backgroundImage = `url(${backgroundImages[count]})`;
            document.getElementById('slide-wrapper').style.transition = "0.5s ease";

            count++;

            if (count === backgroundImages.length) {
                count = 0;
            }

        }, 5000)
    })
    return (
        <SlideShowWrapper id='slide-wrapper'>
            <LandingPageHeader></LandingPageHeader>

            <div id='slideShow'>
                <div className='slideShowText'>
                    <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
                    <p>Experience your favourite artists like never before and from the comfort of your own home.</p>
                    <button className='rainbowTryNow'>Try it now</button>
                </div>
            </div>

        </SlideShowWrapper>            
    )
}
