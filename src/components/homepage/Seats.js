import React from 'react';
import { SoundContainer, SeeDemo } from './SoundSectionHome';
import styled from 'styled-components';

const SeatsSection = styled(SoundContainer)`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    ${SoundContainer};
    button {
        color: #ffc233;
    }

    h1 {
        font-size: 60px;
        transform-origin: 0 0;
        width: fit-content;
        transform: scaleX(1.4);
        letter-spacing: 5px;
    }

    p {
        font-size: 40px;
        letter-spacing: 3px;
        transform-origin: 0 0;
        width: 80%;;
        transform: scaleX(1.3);
        word-spacing: 5px;
        color: black;
        padding-top: 0.5em;
        padding-bottom: 1em;
    }

`;
export default function Seats() {
    return (
        <SeatsSection>
            <div>
                where my images will be
            </div>

            <div className='sound-content'>
                <b><h1>FRONT ROW SEATS</h1></b>
                <p>Experience concerts up close and personal.</p>
                <SeeDemo>SEE DEMO</SeeDemo>
            </div>

        </SeatsSection>
    )
}
