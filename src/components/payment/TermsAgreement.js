import React from 'react';
import styled from 'styled-components';
import { TryNowBtn } from '../homepage/SlideShow';

export default function TermsAgreement() {
    return (
        <TermsContainer>
            <p className='disclaimerText'>By continuing, I acknowledge that I've read and agree to the <button href='#'>Terms of Service</button> & <button href='#'>Privacy and Policy.</button></p>
            <TryNowBtn>DOWNLOAD</TryNowBtn>
        </TermsContainer>
    )
}

const TermsContainer = styled.div`
    color: black;
    font-size: 1.25rem;
    letter-spacing: 1px;
    width: 100%;
    padding-top: 3em;

    button {
        text-decoration: none;
        font-weight: 900;
    }

    p {
        padding-bottom: 2em;
        button {
            border: none;
            background-color: transparent;
            color: blue;
            font-size: 1.25rem;
        }
    }

    @media screen and (max-width: 768px) {
        padding-top: 0em;

        p {
            padding-bottom: 2.5em;
        }
    }

    @media screen and (max-width: 450px) {
        font-size: 1rem;
        p {
            padding-bottom: 2.5em;
            button {
                font-size: 1rem;
            }
            
        }
        
    }
`;

