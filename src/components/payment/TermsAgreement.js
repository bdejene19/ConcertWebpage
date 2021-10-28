import React from 'react';
import styled from 'styled-components';
import { TryNowBtn } from '../homepage/SlideShow';

export default function TermsAgreement() {
    return (
        <TermsContainer>
            <p>By continuing, I acknowledge that I've read and agree to the <a href='#'>Terms of Service</a> & <a href='#'>Privacy and Policy.</a></p>
            <TryNowBtn>DOWNLOAD</TryNowBtn>
        </TermsContainer>
    )
}

const TermsContainer = styled.p`
    color: black;
    font-size: 1.25rem;
    letter-spacing: 1px;
    width: 100%;
    padding-top: 3em;

    a {
        color: blue;
        text-decoration: none;
        font-weight: 900;
    }

    p {
        padding-bottom: 2em;
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
            
        }
        
    }
`;

