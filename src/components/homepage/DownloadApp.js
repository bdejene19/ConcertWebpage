import React from 'react';
import styled from 'styled-components';
import LandingPageHeader from './LandingPageHeader';
import { TryNowBtn } from './SlideShow';
import { Link } from 'react-router-dom';


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
        font-size: 48px; 
        color: #ff4d4d;
        white-space: 300px
    }

    .downloadText {
        margin-left: 5em;
    }

    p {
        font-size: 32px;
    }
`;

export default function DownloadApp() {
    return (
        <DownloadAppText>
            <div id='download-banner'>
                <LandingPageHeader showBtn={false}></LandingPageHeader>

            </div>
            <div className='downloadText'>
                <h1>GET EXP|CON NOW</h1>
                <p style={{textAlign: 'left'}}>Purchase and download the app.</p>
            </div>
            <div style={{textAlign: 'center'}}>
                <Link to='/pricing'>
                    <TryNowBtn style={{width: '20vw', height: '10vh', borderRadius: '50px 50px'}}>TRY IT NOW</TryNowBtn>
                </Link>
            </div>
        </DownloadAppText>
    )
}
