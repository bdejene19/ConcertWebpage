import React, {useState} from 'react';
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
        background-color: inherit;

        button:hover {
            
            transition: 1s linear;
            background: linear-gradient(90deg, aqua 0%, blue 30%, red 70%, yellow 100%);
            /* opacity: 0; */
            color: white;

        }
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
        position: fixed;
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

        .menuItem {
            text-decoration: none;
            color: white;
        }

        .menuItem:hover {
            color: ${props => props.hoverColor}
        }
    }
    h2 {
        padding-top: 2px;
        font-size: 26px;
        font-weight: 500;
        z-index: 100;
    }

`;




export default function LandingPageHeader(props) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {


        if (isMenuOpen === false) {
            document.getElementById('menu').style.cssText = `
                transition: 1s linear;
                width: 30vw; 
                height: 40vh;
                border-radius: 0 45% 50% 50%;
                visibility: visible;
            `;
        } else {
            document.getElementById('menu').style.cssText = `
                transition: 1s linear;
                width: 0vw; 
                height: 0vh;
                visibility: hidden;
                border-radius: 0 45% 50% 50%;                
            `;        
        }
        setMenuOpen(!isMenuOpen);
        
    }
    return (
        <SectionHeader>
            <HeaderContent headerColor={props.headerColor}>
                <MenuIcon fontSize='large' className='hamburgerIcon' id='menu-icon' onClick={openMenu}/>
                <h2>EXP|CON</h2>

                <span className='menu' id='menu'>
                    <Link to='/' className='menuItem'>
                        <h1 hoverColor='blue'>WHAT IS IT?</h1>       
                    </Link>
                    
                    <Link to='/#perks' className='menuItem'>
                        <h1>PERKS</h1>
                    </Link>
                    
                    <Link to='/pricing' className='menuItem'>
                        <h1>PRICING</h1>
                    </Link>
                </span>

            </HeaderContent>

            {props.showBtn === false ? null : 
                <Link to='/pricing' className='pricing-link'>
                    <button className="tryNow-btn" style={{color: `${props.btnTextColor}`}}><b>Try it now</b></button>     
                </Link>
            }
            
            
        </SectionHeader>
    )
}
