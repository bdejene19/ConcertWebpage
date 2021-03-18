import React from 'react'; 
import styled from 'styled-components';

const SoundContainer = styled.article`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
    padding: 5em;
    color: white;
    .sound-content {
        padding: 2em;
    }
    h1 {
        font-size: 42px;
    }

    p {
        font-size: 34px;
        color: black;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        padding-left: 0;
        padding-right: 3em;
    }
`;

const SeeDemo = styled.button`
    width: 15vw;
    height: 7vh;
    border-radius: 30px 30px;
    background-color: white;
    border: solid white;
    color: #ff4d4d;
    font-size: 14px;
    font-weight: bold;
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
