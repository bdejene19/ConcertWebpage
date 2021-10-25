import React from 'react';
import styled from 'styled-components';
import LandingPageHeader from './LandingPageHeader';
import { TryNowBtn } from './SlideShow';
import { Link } from 'react-router-dom';

export default function DownloadApp() {
    return (
        <DownloadAppText>
            <div id='download-banner'>
                <LandingPageHeader showBtn={false} subMenuHeader='landing6' bgMenuColor='aqua' contentColor='black'></LandingPageHeader>

            </div>
            <div className='downloadText'>
                <h1 className='download-title'>GET EXP|CON NOW</h1>
                <p style={{textAlign: 'left'}}>Purchase and download the app.</p>
            </div>
            <div style={{textAlign: 'center'}}>
                <Link to='/pricing'>
                    <TryNowBtn style={{ borderRadius: '50px 50px'}} id='download-tryNow'>TRY IT NOW</TryNowBtn>
                </Link>
            </div>
        </DownloadAppText>
    )
}

const DownloadAppText = styled.article`
    background-color: black;
    color: white;
    display: flex;
    flex-wrap: wrap;
    height: 90vh;
    
    #download-banner {
        flex: 1 1 100%;
        height: fit-content;
    }

    .download-title {
        font-size: 48px; 
        color: #ff4d4d;
        white-space: 300px
    }

    div {
        height: fit-content;
        width: 100%;
        flex: 1 1 25em;
    }

    .downloadText {
        padding-left: 5em;

    }

    .download-banner {
        font-size: 12px;
    }

    p {
        font-size: 32px;
    }

    #download-tryNow {
        width: '20vw'; 
        height: '10vh',
    }
    @media screen and (max-width: 768px) {
        .downloadText {
            padding-left: 2.5em;
        }

    
    }
`;


