import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';


const SectionHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    color: blue;
    width: 100%;;
    font-size: 16px;
    padding: 2em;

    .hamburgerIcon{
        font-size: 36px;
        cursor: pointer;
    }

    h2 {
        padding-top: 2px;
        font-size: 26px;
    }

    .header-text {
        display: flex;
        grid-gap: 1em;
        color: white;
    }

    .tryNow-btn {
        width: 10vw;
        background-color: white;
        height: 6vh;
        justify-self: right;
        border-radius: 20px 20px ;
        border: 1px white;
        cursor: pointer;
        outline: none;

    }

    .pricing-link {
        text-align: right;
        outline: none;
    }
`;

const TryNow = styled.button`
    
`;

export default function LandingPageHeader(props) {
    return (
        <SectionHeader>
            <div className='header-text'>
                <MenuIcon fontSize='large' className='hamburgerIcon'/>
                <h2>EXP|CON</h2>

            </div>
            
            <Link to='/pricing' className='pricing-link'>
                <button className="tryNow-btn" style={{color: `${props.btnTextColor}`}} showTryNow='inline-block'><b>Try it now</b></button>     

            </Link>
        </SectionHeader>
    )
}
