import React, { Suspense, useEffect, useRef } from 'react';
import styled from 'styled-components';
import LandingPageHeader from './LandingPageHeader';
import {Link} from 'react-router-dom';
let loadedImgs = ['concertLights.jpg', 'secondConcert.jpg', 'thirdConcert.jpg'];
let count = 0;

export default function SlideShow(props) {
    let intervalRef = useRef();
  
    useEffect(() => {
        let preLoadedImgs = []
        for (var item in props.bgPhotos) {
            const img = new Image();
            img.src = props.bgPhotos[item];
            preLoadedImgs.push(img.src);
        }
        document.getElementById('slide-wrapper').style.backgroundImage = `url(${loadedImgs[count]})`;
        document.getElementById(count.toString()).style.backgroundColor = '#bbb';   
        
        let  startSlides = setInterval(() => {
            runShow(preLoadedImgs);
        }, 7000);
        
        return () => clearInterval(startSlides);

    },[])
    return (
        <Suspense fallback={<h1>hello</h1>}>
            <SlideShowWrapper id='slide-wrapper'>
                <LandingPageHeader showBtn={false} subMenuHeader='landing1' contentColor='#ff4d4d'></LandingPageHeader>

                <div id='slideShow'>
                    
                    <div className='slideShowText'>
                    <h1>INTERACTIVE CONCERT EXPERIENCE</h1>

                        <p>Experience your favourite artists like never before and from the comfort of your own home.</p>
                        <Link to='/pricing'>
                            <TryNowBtn>TRY IT NOW</TryNowBtn>
                        </Link>
                    </div>

                    <div className='client-chooseBg'>
                        {loadedImgs.map((image, index) => <span className='dot' key={index} id={index} onClick={() => chooseBgPhoto(index)}></span>)}
                    </div>
                </div>

            </SlideShowWrapper>    
        </Suspense>        
    )
}

const runShow = (preLoadedImgs) => {
    count++;
    if (count === preLoadedImgs.length) {
        // document.getElementById(`${count - 1}`).style.backgroundColor = 'transparent';
        count = 0;      
    } 
    document.getElementById('slide-wrapper').style.backgroundImage = `url(${preLoadedImgs[count]})`;
    document.getElementById(`${count}`).style.backgroundColor = '#bbb';
    document.getElementById('slide-wrapper').style.transition = "0.5s linear";

    if (count - 1 > 0) {
        document.getElementById(`${count - 1}`).style.backgroundColor = 'transparent';

    } 
    
    if (count - 1 === 0) {
        document.getElementById(`0`).style.backgroundColor = 'transparent';

    } 

    if (count - 1 < 0) {
        document.getElementById(`${preLoadedImgs.length - 1}`).style.backgroundColor = 'transparent';
    }

}

    
  



const chooseBgPhoto = (photoIndex) => {
    document.getElementById(`${count}`).style.backgroundColor = 'transparent';

    count = photoIndex;
    document.getElementById('slide-wrapper').style.backgroundImage = `url(${loadedImgs[count]})`;
    document.getElementById('slide-wrapper').style.transition = "0.5s linear";  
    document.getElementById(`${photoIndex}`).style.backgroundColor = '#bbb'
}

export const TryNowBtn = styled.button`
        width: 15vw;
        height: 7vh;
        background-color: white;
        background: linear-gradient(90deg, aqua 0%, blue 30%, red 70%, yellow 100%);
        color: white;
        justify-self: right;
        border-radius: 25px 25px ;
        font-size: 18px;
        cursor: pointer;

        @media screen and (max-width: 1024px) {
            width: 20vw;
        }

        @media screen and (max-width: 768px) {
            width: 60vw;
        }
        
        
`;



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
        height: 80vh;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        text-align: center;
        align-items: center;
        justify-content: center;

        .slideShowText {
            align-items: center;
            justify-items: center;
            h1 {
                letter-spacing: 5px;
            }
            p {
                text-align: center;
                justify-content: center;
                padding-top: 1em;
                padding-bottom: 1em;
                letter-spacing: 3px;
                width: 75%;
                transform: translateX(12.5%);
                align-self: center;
            }
        } 
    }
    
    .rainbowTryNow {
        width: 15vw;
        height: 7vh;
        background-color: white;
        background: linear-gradient(90deg, aqua 0%, blue 49%, red 60%, yellow 100%);
        color: white;
        justify-self: right;
        border-radius: 25px 25px ;
        font-size: 18px;
        border: 1px white;
        cursor: pointer;
    }

    .client-chooseBg {
        padding-top: 10em;

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


    @media screen and (max-width: 1024px) {
        height: 100%;
        align-items: center;

        #slideShow {
            .slideShowText {
                h1 {

                }
                p {
                    transform: translateX(15%);
                }
            }

        }
        .client-chooseBg {
            .dot {
                width: 3vw;
                height: 3vh;
                /* border: solid black 10px; */
            }

        }
    }

    @media screen and (max-width: 768px) {
        #slideShow {
            .slideShowText {
            
                p {
                    transform: translateX(17.5%);


                }
            }
        }
        
      
    }

    @media screen and (max-width: 450px) {
        #slideShow {
            .slideShowText {
                p {
                    width: 100%;
                    padding: 1em;
                    transform: translate(0%);
                }

            }
  
        }
    }


   
`;