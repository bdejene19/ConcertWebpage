import React, { useEffect } from 'react';
import styled from 'styled-components';
import LandingPageHeader from './LandingPageHeader';

const SlideShowWrapper = styled.article`
    width: 100%;
    height: 100%;
    background-size: cover;
    color: white;
    /* background-image: url(); */

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

            h1 {
                font-size: 64px;
                letter-spacing: 5px;
            }
            p {
                
                padding-top: 1em;
                padding-bottom: 1em;
                letter-spacing: 3px;
                width: 50%;
                transform: translateX(50%);
                font-size: 30px;
                align-self: center;
            }
        } 
    }
    
    .rainbowTryNow {
        width: 15vw;
        height: 7vh;
        background-color: white;
        background: linear-gradient(90deg, aqua 0%, blue 49%, red 80%, yellow 100%);
        color: white;
        justify-self: right;
        border-radius: 25px 25px ;
        font-size: 18px;
        border: 1px white;
        cursor: pointer;
    }

    .client-chooseBg {
        grid-column: 1/3;
        grid-row: 2;
        .dot {
            cursor: pointer;
            height: 2vh;
            width: 1vw;
            margin: 0 0.5em;
            border: solid 2px #bbb;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.6s ease;
        }
    }
   
`;

export const TryNowBtn = styled.button`
        width: 15vw;
        height: 7vh;
        background-color: white;
        background: linear-gradient(90deg, aqua 0%, blue 49%, red 80%, yellow 100%);
        color: white;
        justify-self: right;
        border-radius: 25px 25px ;
        font-size: 18px;
        border: 1px white;
        cursor: pointer;`;



export default function SlideShow() {

    let backgroundImages = ['concertLights.jpg', 'secondConcert.jpg', 'thirdConcert.jpg'];
    let count = 0;
    
    useEffect(() => {
        document.getElementById('slide-wrapper').style.backgroundImage = `url(${backgroundImages[0]})`;
        document.getElementById(count.toString()).style.backgroundColor = '#bbb';

        // setInterval(() => {
        //     count++;
        //     if (count === backgroundImages.length) {
        //         // document.getElementById(`${count - 1}`).style.backgroundColor = 'transparent';
        //         count = 0;      
        //     } 
        //     document.getElementById('slide-wrapper').style.backgroundImage = `url(${backgroundImages[count]})`;
        //     document.getElementById(`${count}`).style.backgroundColor = '#bbb';
        //     document.getElementById('slide-wrapper').style.transition = "0.5s linear";
        // }, 5000);
        
    })

    setInterval(() => {
        count++;
        if (count === backgroundImages.length) {
            // document.getElementById(`${count - 1}`).style.backgroundColor = 'transparent';
            count = 0;      
        } 
        document.getElementById('slide-wrapper').style.backgroundImage = `url(${backgroundImages[count]})`;
        document.getElementById(`${count}`).style.backgroundColor = '#bbb';
        document.getElementById('slide-wrapper').style.transition = "0.5s linear";

        if (count - 1 > 0) {
            document.getElementById(`${count - 1}`).style.backgroundColor = 'transparent';

        } 
        
        if (count - 1 === 0) {
            document.getElementById(`0`).style.backgroundColor = 'transparent';

        } 

        if (count - 1 < 0) {
            document.getElementById(`${backgroundImages.length - 1}`).style.backgroundColor = 'transparent';

        }
    }, 5000);

    const chooseBgPhoto = (photoIndex) => {
        document.getElementById('slide-wrapper').style.backgroundImage = `url(${backgroundImages[photoIndex]})`;
        document.getElementById('slide-wrapper').style.transition = "0.5s linear";  
        
        document.getElementById(`${photoIndex}`).style.backgroundColor = '#bbb'
    }
    return (
        <SlideShowWrapper id='slide-wrapper'>
            <LandingPageHeader></LandingPageHeader>

            <div id='slideShow'>
                <div className='slideShowText'>
                    <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
                    <p>Experience your favourite artists like never before and from the comfort of your own home.</p>

                    <TryNowBtn>TRY IT NOW</TryNowBtn>
                </div>

                <div className='client-chooseBg'>
                    {backgroundImages.map((image, index) => <span className='dot' id={index} onClick={() => chooseBgPhoto(index)}></span>)}
                </div>
            </div>

        </SlideShowWrapper>            
    )
}
