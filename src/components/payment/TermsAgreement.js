import React from 'react';
import styled from 'styled-components';

const TermsContainer = styled.p`
    color: black;
    font-size: 18px;
    letter-spacing: 1px;
    width: 80%;
    padding-top: 3em;

    a {
        color: blue;
        text-decoration: none;
        font-weight: 900;
    }
`;
export default function TermsAgreement() {
    return (
        <TermsContainer>
            By continuing, I acknowledge that I've read and agree to the <a href='#'>Terms of Service</a> & <a href='#'>Privacy and Policy</a>.
        </TermsContainer>
    )
}
