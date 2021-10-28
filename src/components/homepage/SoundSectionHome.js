import React from 'react'; 
import styled from 'styled-components';

export default function SoundSectionHome() {
    return (
        <SoundContainer>
            <div className='sound-content'>
                <h1>SUPERIOR SOUND</h1>
                <p>Experience live versions of your favourite songs.</p>
                <SeeDemo>SEE DEMO</SeeDemo>
            </div>

            <div className='sound-photos'>
                <img src='speaker2.png' alt='stereo'></img>
            </div>
        </SoundContainer>
    )
}


export const SoundContainer = styled.article`
    display: flex;
    flex-wrap: wrap;
    padding: 5em;
    color: white;
    .sound-content {
        flex-basis: 65%;
        padding-left: 0;
    
    }
    h1 {
        transform-origin: 0 0;
        width: fit-content;
        transform: scaleX(1.25);
        letter-spacing: 3px;
        font-weight: 900;

    }

    p {
        letter-spacing: 3px;
        transform-origin: 0 0;
        color: black;
        padding-top: 0.5em;
        padding-bottom: 1em;
    }

    .sound-photos {
        /* transform: translate(10%, -20%); */
        flex-basis: 35%;

        img {
            width: 30vw;
        }
    }

    @media screen and (max-width: 1024px) {
        padding: 2.5em;
        .sound-photos {
            transform: translate(10%, 30%);
        }
    }

    @media screen and (max-width: 768px) {
        .sound-content {
            flex-grow: 1;
        }
        .sound-photos {
            flex-basis: 0;

            img { 
                height: 30vh; 
                width: 50vw
            }
        }
    }

    @media screen and (max-width: 600px) {
        img {
            display: none;
        }
    }

    @media screen and (max-width: 450px) {
        padding-left: 1.5em;
    }

   
`;

export const SeeDemo = styled.button`
    width: 18vw;
    height: 9vh;
    border-radius: 40px 40px;
    background-color: white;
    border: solid white;
    color: #ff4d4d;
    font-size: 22px;
    font-weight: 900;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        width: 50vw;
    }
`;

