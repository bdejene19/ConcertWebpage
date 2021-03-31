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


    .tryNow-btn {
        width: 12vw;
        background-color: white;
        height: 6vh;
        justify-self: right;
        border-radius: 30px 30px ;
        border: 1px white;
        cursor: pointer;
        outline: none;

    }

    .pricing-link {
        text-align: right;
        outline: none;
    }
`;

const HeaderContent = styled.div`
    display: flex;
    grid-gap: 1em;
    color: ${props => props.headerColor || 'white' };
    

    .hamburgerIcon{
        font-size: 36px;
        cursor: pointer;
        z-index: 1;
    }

    .menu {
        position: absolute;
        visibility: hidden;
        height: 0vh;
        width: 0vw;
        margin: -2em;
        background-color: black;
        padding: 5.3em;
        overflow: hidden;
        letter-spacing: 2px;
        h1 {
            font-size: 32px;
            padding-bottom: 0.5em;
            width: max-content;
            font-weight: 500;
        }
    }
    h2 {
        padding-top: 2px;
        font-size: 26px;
        font-weight: 500;
        z-index: 1;
    }

`;
export default function LandingPageHeader(props) {

    // const showMenu = () => {

    //     if (sideMenuOpen) {
    //         document.getElementById('hamburger-effect').style.display = 'none'
    //         setSideMenuOpen(false);
    //     } else {
    //         document.getElementById('hamburger-effect').style.display = 'inline-block'
    //         setSideMenuOpen(false);

    //     }

    // }

    const openMenu = () => {


        document.getElementById('menu').style.cssText = `
            transition: 1s linear;
            width: 30vw; 
            height: 40vh;
            border-radius: 0 45% 50% 50%;
            visibility: visible;
        `;
    }
    return (
        <SectionHeader>
            <HeaderContent headerColor={props.headerColor}>
                <MenuIcon fontSize='large' className='hamburgerIcon' id='menu-icon' onClick={openMenu}/>
                <h2>EXP|CON</h2>

                <span className='menu' id='menu'>
                    <h1>WHAT IS IT?</h1>
                    <h1>PERKS</h1>
                    <h1>PRICING</h1>
                </span>

            </HeaderContent>
                            
            <Link to='/pricing' className='pricing-link'>
                <button className="tryNow-btn" style={{color: `${props.btnTextColor}`}} showTryNow='inline-block'><b>Try it now</b></button>     
            </Link>
        </SectionHeader>
    )
}
