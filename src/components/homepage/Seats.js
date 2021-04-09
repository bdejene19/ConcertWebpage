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
        font-size: 56px;
        width: fit-content;
        letter-spacing: 3px;
    }

    p {
        font-size: 44px;
        letter-spacing: 3px;
        width: 90%;       
        color: black;
        padding-top: 0.5em;
        padding-bottom: 1em;
    }

    .seat-content {
        grid-column: 2;
        width: fit-content;
    }

    .halfCircle-container {
        display: grid;
        justify-content: right;
        height: 34.9vh;
        overflow: hidden;
        .half-circle {
            content: '';
            width: 30vw;
            height: 50vh;
            border-radius: 100% 100% 0;
            background-color: black;
            align-self: flex-end;
            transform: translate(20%, 15%);
            
        }
    }
  


    .doubleBubble-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row: auto;
        transform: translate(5%, -15%);
        .smallBubble {
            align-self: flex-end;
            width: 20vw;
            height: 30vh;
            content: '';
            background-color: black;
            grid-column: 2;
            border-radius:50%;
            transform: translate(-30%, 15%);
        }

        .largeBubble {
            align-items: flex-start;
            justify-self: right;
            border-radius: 50%;
            width: 25vw; 
            height: 40vh;
            transform: translate(25%, -15%);
            content: '';
            background-color: black;

        }
    }

`;
export default function Seats() {
    return (
        <SeatsSection>
            <div className='doubleBubble-container'>
                <div className='smallBubble'></div>
                <div className='largeBubble'></div>

            </div>

            <div className='seat-content'>
                <b><h1>FRONT ROW SEATS</h1></b>
                <p>Experience concerts up close and personal.</p>
                <SeeDemo>SEE DEMO</SeeDemo>
                <div className='halfCircle-container'>
                    <div className='half-circle'>

                    </div>
                </div>

            </div>

        </SeatsSection>
    )
}
