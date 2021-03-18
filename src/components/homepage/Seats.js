import React from 'react';
import { SoundContainer, SeeDemo } from './SoundSectionHome';
import styled from 'styled-components';

const SeatsSection = styled(SoundContainer)`
    display: grid;
    grid-template-columns: 1fr 2fr;
    ${SoundContainer};
    button {
        color: #ffc233;
    }

`;
export default function Seats() {
    return (
        <SeatsSection>
            <div>
                where my images will be
            </div>

            <div className='sound-content'>
                <h1>FRONT ROW SEATS</h1>
                <p>Experience concerts up close and personal.</p>
                <SeeDemo>SEE DEMO</SeeDemo>
            </div>

        </SeatsSection>
    )
}
