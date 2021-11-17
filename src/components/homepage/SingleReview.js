import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';

export const SingleReview = (props) => {
    return (
        <div className='reviewContent-reviewsContainer'>
            <StarRateIcon className='starIcon'></StarRateIcon>
            <StarRateIcon className='starIcon'></StarRateIcon>
            <StarRateIcon className='starIcon'></StarRateIcon>
            <StarRateIcon className='starIcon'></StarRateIcon>
            <StarRateIcon className='starIcon'></StarRateIcon>

            <h4>{props.title}</h4>

            <h5>{props.content}</h5>
        </div>
    )
}
