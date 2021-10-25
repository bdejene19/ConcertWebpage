import React from 'react';
import styled from 'styled-components';
import StarRateIcon from '@material-ui/icons/StarRate';
export default function Reviews() {
    return (
        <ReviewContainer>
            <div className='reviewImgs'>
                <img src='speaker3.png' alt='alternative speaker'></img>
            </div>
            
            <div className='reviewsContainer'>
                <h2>REVIEWS</h2>
                <div className='reviewContent-reviewsContainer'>
                    <StarRateIcon className='starIcon'></StarRateIcon>
                    <StarRateIcon className='starIcon'></StarRateIcon>
                    <StarRateIcon className='starIcon'></StarRateIcon>
                    <StarRateIcon className='starIcon'></StarRateIcon>
                    <StarRateIcon className='starIcon'></StarRateIcon>

                    <h4>ARTIST</h4>

                    <p>"Love it, it's the Best. I can't live without it!"</p>
                </div>
                <div className='reviewContent-reviewsContainer'>
                    <StarRateIcon className='starIcon'></StarRateIcon>
                    <StarRateIcon className='starIcon'></StarRateIcon>
                    <StarRateIcon className='starIcon'></StarRateIcon>
                    <StarRateIcon className='starIcon'></StarRateIcon>
                    <StarRateIcon className='starIcon'></StarRateIcon>

                    <h4>PRODUCER</h4>

                    <p>"Love it, it's the Best. I can't live without it!"</p>
                </div>

                <div className='reviewContent-reviewsContainer'>
                    <StarRateIcon className='starIcon'></StarRateIcon>
                    <StarRateIcon className='starIcon'></StarRateIcon>
                    <StarRateIcon className='starIcon'></StarRateIcon>
                    <StarRateIcon className='starIcon'></StarRateIcon>
                    <StarRateIcon className='starIcon'></StarRateIcon>

                    <h4>MUSIC FAN</h4>

                <p>"Love it, it's the Best. I can't live without it!"</p>
                </div>
            </div>
        </ReviewContainer>
    )
}

const ReviewContainer = styled.article`
    display: flex;
    flex-wrap: wrap;
    color: white;
    padding-left: 5em;
    /* padding: 5em; */
    border: solid black 3px;
    letter-spacing: 3px;
    grid-gap: 3em;

    
    h2 {
        flex: 1 1 100%;
        font-size: 60px;
        margin: 0;
        padding-bottom: 1.5em;
    }

    .reviewImgs {
        flex: 1 1 25%;
        img {
            width: 25vw;
            transform: rotate(270deg);
        }

    }
    .reviewsContainer {
        flex: 1 1 50%;;
        border: solid green 3px;
        flex-wrap: wrap;
        display: flex;

        h2 {
            flex: 1 1 100%;
        }
    }

    .reviewContent-reviewsContainer {
        flex: 1 1 15em;
        border: solid pink 2px;
        margin-top: -1.5em;
        h4 {
            font-size: 32px;
            padding-top: 0.25em;
            padding-bottom: 0.5em;
        }
    }

    .starIcon {
        color: black;
        font-size: 34px;   
        font-weight: 900; 
    }

   

    p {
        width: 100%;
        color: black;
        font-size: 2rem;
    }

    @media screen and (max-width: 768px) {
        .reviewImgs {
            display: none;
        }
    }

`;


