import React from 'react';
import { SoundContainer, SeeDemo } from './SoundSectionHome';
import styled from 'styled-components';

const SeatsSection = styled(SoundContainer)`
    ${SoundContainer};
    padding: 0;
    padding-top: 5em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    button {
        color: #ffc233;
    }

    h1 {
        font-size: 60px;
        width: fit-content;
        letter-spacing: 3px;
    }

    p {
        font-size: 48px;
        letter-spacing: 3px;
        transform-origin: 0 0;
       
        color: black;
        padding-top: 0.5em;
        padding-bottom: 1em;
    }

    .seat-content {
        grid-column: 2;
        width: fit-content;
    }

`;
export default function Seats() {
    return (
        <SeatsSection>
            <div>
                where my images will be
            </div>

            <div className='seat-content'>
                <b><h1>FRONT ROW SEATS</h1></b>
                <p>Experience concerts up close and personal.</p>
                <SeeDemo>SEE DEMO</SeeDemo>
            </div>

        </SeatsSection>
    )
}
