import React from 'react';
import styled from 'styled-components';

const TermsContainer = styled.p`
    color: lightgrey;
    font-size: 18px;
    width: 80%;
    padding-top: 1em;
    padding-bottom: 1em;
    margin-left: 2.3em;

    a {
        color: blue;
        text-decoration: none;
    }
`;
export default function TermsAgreement() {
    return (
        <TermsContainer>
            By continuing, I acknowledge that I've read and agree to the <a href='#'>Terms of Service</a> & <a href='#'>Privacy and Policy</a>.
        </TermsContainer>
    )
}
