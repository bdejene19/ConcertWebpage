import React from 'react';
import { SoundContainer, SeeDemo } from './SoundSectionHome';
import styled from 'styled-components';

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
 
const SeatsSection = styled(SoundContainer)`
    ${SoundContainer};
    padding: 0;
    padding-top: 5em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    overflow: hidden;
    /* grid-template-columns: 1fr 1fr; */
    button {
        color: #ffc233;
    }

    h1 {
        font-size: 4rem;
        width: fit-content;
        /* letter-spacing: 3px; */
    }

    p {
        font-size: 3rem;
        letter-spacing: 3px;
        width: 90%;       
        color: black;
        padding-top: 0.5em;
        padding-bottom: 1em;
    }

    .seat-content {
        flex: 1 1 25em;
        padding-left: 3em;
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
        transform: translate(0%, -15%);
        flex-basis: 40%;
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


    @media screen and (max-width: 1200px) {
        height: 100%;
        .seat-content {
            padding-left: 0;
        }
        h1 { 
            font-size: 3rem;
        }

        p {
            font-size: 2rem;
        }

        .doubleBubble-container {
            transform: translate(-10%, -15%);
        }

        .halfCircle-container {
            margin-top: 4.25em;
        }
        
    }

    @media screen and (max-width: 1024px) {
        padding-left: 0;
        h1 {
            font-size: 2.5rem;
        }

        .halfCircle-container {
            margin-top: 0;
            transform: translateY(28vh);
        }

      
    }

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 2rem;
        }
        .doubleBubble-container {
            display: none;
        }

        .halfCircle-container {
            transform: translateY(20.5vh)
;        }

        .seat-content {
            padding-left: 2.25em;
        }
    }

    @media screen and (max-width: 450px) {
        .seat-content {
            padding-left: 1.5em;
        }
        .halfCircle-container {
            padding-top: 0; 
            transform: translateY(9vh);
        }
    }
`;

