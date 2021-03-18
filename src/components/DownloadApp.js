import React from 'react';
import styled from 'styled-components';
import LandingPageHeader from './LandingPageHeader';


const DownloadAppText = styled.article`
    background-color: black;
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 90vh;
    
    #download-banner {
        grid-column: 1/3;
    }

    h1 {
        font-size: 44px; 
        color: #ff4d4d;
    }

    .downloadText {
        margin-left: 5em;
    }
`;

export default function DownloadApp() {
    return (
        <DownloadAppText>
            <div id='download-banner'>
                <LandingPageHeader ></LandingPageHeader>

            </div>
            <div className='downloadText'>
                <h1>GET EXP|CON NOW</h1>
                <p style={{textAlign: 'left'}}>Purchase and download the app.</p>
            </div>
            <div style={{textAlign: 'center'}}>
                where my try now button will go
            </div>
        </DownloadAppText>
    )
}
