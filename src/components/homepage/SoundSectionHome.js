import React from 'react'; 
import styled from 'styled-components';

export const SoundContainer = styled.article`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
    padding: 5em;
    color: white;
    .sound-content {
        padding: 2em;
        padding-left: 0;
    
    }
    h1 {
        font-size: 60px;
        transform-origin: 0 0;
        width: fit-content;
        transform: scaleX(1.25);
        letter-spacing: 3px;
        font-weight: 900;

    }

    p {
        font-size: 47px;
        letter-spacing: 3px;
        transform-origin: 0 0;
        color: black;
        padding-top: 0.5em;
        padding-bottom: 1em;
    }
`;

export const SeeDemo = styled.button`
    width: 22vw;
    height: 9vh;
    border-radius: 40px 40px;
    background-color: white;
    border: solid white;
    color: #ff4d4d;
    font-size: 16px;
    font-weight: 900;
    cursor: pointer;
`;

export default function SoundSectionHome() {
    return (
        <SoundContainer>
            <div className='sound-content'>
                <h1>SUPERIOR SOUND</h1>
                <p>Experience live versions of your favourite songs.</p>
                <SeeDemo>SEE DEMO</SeeDemo>
            </div>

            <div className='sound-photos'>

            </div>
        </SoundContainer>
    )
}
