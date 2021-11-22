import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import {Link} from 'react-router-dom';
import {SubHeader} from '../homepage/LandingPerks';
import { HorizontalBreak } from './PricePlans';


export default function PlanOption(props) {
    return (
        <div>
            <div style={{color: props.headerColor}}>
                <SubHeader className='plan-name'>{props.plan}<HorizontalBreak borderColor={props.headerColor} largeWidth='70%'></HorizontalBreak>Monthly</SubHeader>
                <h1><b>${props.price}</b></h1>
            </div>
            <br></br>
            <div className='price-text'>
                <MusicNoteIcon className='music-point'></MusicNoteIcon>
                <p>Very {props.veryGood} good.</p>
            </div>
            <div className='price-text'>
                <MusicNoteIcon className='music-point'></MusicNoteIcon>
                <p>Amazing.</p>
            </div>
            
            <div className='price-text'>
                <MusicNoteIcon className='music-point'></MusicNoteIcon>
                <p>Perfect Job.</p>
            </div>
            
            <div className='price-text'>
                <MusicNoteIcon className='music-point'></MusicNoteIcon>
                <p>Love This.</p>
            </div>

            <div className='price-text'>
                <MusicNoteIcon className='music-point'></MusicNoteIcon>
                <p>It's so good.</p>
            </div>

            <div className='price-text'>
                <MusicNoteIcon className='music-point'></MusicNoteIcon>
                <p>{props.extraFeatures}Features.</p>
            </div>

            <br></br>
            <Link to='/payNow'>
                <button className='tryNow' style={{backgroundColor: props.headerColor}}><b>SELECT</b></button>
            </Link>
        </div>
    )
}
