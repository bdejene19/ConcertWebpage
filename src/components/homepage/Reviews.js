import React from 'react';
import styled from 'styled-components';
import StarRateIcon from '@material-ui/icons/StarRate';
 
const ReviewContainer = styled.article`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    color: white;
    padding: 5em;
    letter-spacing: 3px;
    grid-gap: 3em;

    
    h2 {
        grid-row: 1;
        grid-column: 2/5;
        font-size: 60px;
        margin: 0;
        padding-bottom: 1.5em;
    }

    .reviewImgs {
        grid-column: 1;
        grid-row: 1/3;

        img {
            width: 25vw;
            transform: rotate(270deg);
        }

    }

    .reviewContent-container {
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
        width: 80%;
        color: black;
        font-size: 22px;
    }

`;

export default function Reviews() {
    return (
        <ReviewContainer>
            <div className='reviewImgs'>
                <img src='speaker3.png' alt='alternative speaker'></img>
            </div>

            <h2>REVIEWS</h2>
            <div className='reviewContent-container'>
                <StarRateIcon className='starIcon'></StarRateIcon>
                <StarRateIcon className='starIcon'></StarRateIcon>
                <StarRateIcon className='starIcon'></StarRateIcon>
                <StarRateIcon className='starIcon'></StarRateIcon>
                <StarRateIcon className='starIcon'></StarRateIcon>

                <h4>ARTIST</h4>

                <p>"Love it, it's the Best. I can't live without it!"</p>
            </div>
            <div className='reviewContent-container'>
                <StarRateIcon className='starIcon'></StarRateIcon>
                <StarRateIcon className='starIcon'></StarRateIcon>
                <StarRateIcon className='starIcon'></StarRateIcon>
                <StarRateIcon className='starIcon'></StarRateIcon>
                <StarRateIcon className='starIcon'></StarRateIcon>

                <h4>PRODUCER</h4>

                <p>"Love it, it's the Best. I can't live without it!"</p>
            </div>

            <div className='reviewContent-container'>
                <StarRateIcon className='starIcon'></StarRateIcon>
                <StarRateIcon className='starIcon'></StarRateIcon>
                <StarRateIcon className='starIcon'></StarRateIcon>
                <StarRateIcon className='starIcon'></StarRateIcon>
                <StarRateIcon className='starIcon'></StarRateIcon>

                <h4>MUSIC FAN</h4>

                <p>"Love it, it's the Best. I can't live without it!"</p>
                </div>
        </ReviewContainer>
    )
}
