import React from 'react';
import styled from 'styled-components';
import LandingPageHeader from './LandingPageHeader';

const SlideShowWrapper = styled.article`
    width: 100%;
    height: 100%;
    background-size: cover;
     color: white;
    


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
    let myIndex = 0;
    // const changeBackground = () => {
    //       var x = document.getElementsByClassName("slide-img");
    //       for (var count = 0; count < x.length; count++) {
    //         x[count].style.display = "none";  
    //       }
    //       myIndex++;
    //       if (myIndex > x.length) {myIndex = 1}    
    //       x[myIndex-1].style.display = "block";  
    //       setTimeout(changeBackground, 2000);    
    // }

    // changeBackground();
    return (
        <SlideShowWrapper>
            <div id='slideShow'>
                {/* <LandingPageHeader></LandingPageHeader> */}


            {/* <img src="https://musicianonamission.com/wp-content/uploads/2018/06/samuel-zeller-103111-unsplash-800x533.jpg" alt="crowd" className='slide-img'></img> */}
            {/* <img src="concertLights.jpg" alt="interactive concert" className='slide-img'></img>
            <img src="leftStereo.png" alt="" className='slide-img'></img> */}

                <div className='slideShowText'>
                    <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
                    <p>Experience your favourite artists like never before and from the comfort of your own home.</p>
                    <button className='rainbowTryNow'>Try it now</button>
                </div>
            </div>

        </SlideShowWrapper>            
    )
}
