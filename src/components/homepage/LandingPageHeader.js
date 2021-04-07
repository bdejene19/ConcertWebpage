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
            background: linear-gradient(90deg, aqua 0%, blue 30%, red 70%, yellow 100%);
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
        z-index: 3;
    }

    /* .menu {
        position: absolute;
        visibility: hidden;
        height: 0vh;
        width: 0vw;
        margin: -2em;
        background-color: black;
        padding: 5.3em;
        overflow: hidden;
        letter-spacing: 2px; */
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
    /* } */
    h2 {
        padding-top: 2px;
        font-size: 26px;
        font-weight: 500;
        z-index: 100;
    }

`;


const MenuContainer = styled.span`
        position: absolute;
        visibility: hidden;
        height: 0vh;
        width: 0vw;
        margin: -2em;
        background-color: ${props => props.menuBgColor || 'black'};
        padding: 5.3em;
        overflow: hidden;
        letter-spacing: 2px;
`;

export const MenuItemContent = styled.h1`
    font-size: 32px;
    padding-bottom: 0.5em;
    width: max-content;
    font-weight: 500;

    color: white;

    &:hover {
        color: ${props => props.hoverColor}
    }
`;



export default function LandingPageHeader(props) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const openMenu = (targetElement) => {

        
        if (isMenuOpen === false) {
            document.getElementById(`${targetElement}`).style.cssText = `
                transition: 1s linear;
                width: 60%; 
                height: 40vh;
                border-radius: 0 40% 50% 50%;
                visibility: visible;
                z-index: 2;
            `;

            document.querySelector('.hamburgerIcon').style.color = props.contentColor
        }   
         else {
            document.getElementById(`${targetElement}`).style.cssText = `
                transition: 1s linear;
                width: 0; 
                height: 0vh;
                visibility: hidden;
                border-radius: 0 50% 50% 50%;                
            `;

            document.querySelector('.hamburgerIcon').style.color = 'white'

        }
        setMenuOpen(!isMenuOpen);      
    }
    return (
        <SectionHeader>
            <div style={{position: 'relative'}}>
                <HeaderContent headerColor={props.headerColor}>
                    <MenuIcon fontSize='large' className='hamburgerIcon'  onClick={() => openMenu(props.subMenuHeader)}/>
                    <h2>EXP|CON</h2>

                    <MenuContainer menuBgColor={props.bgMenuColor} id={props.subMenuHeader}>
                        <Link to='/' className='menuItem'>
                            <MenuItemContent hoverColor={props.contentColor}>WHAT IS IT?</MenuItemContent>
                        </Link>
                        
                        <Link to='/#perks' className='menuItem'>
                            <MenuItemContent hoverColor={props.contentColor}>PERKS</MenuItemContent>
                        </Link>
                        
                        <Link to='/pricing' className='menuItem'>
                            <MenuItemContent hoverColor={props.contentColor}>PRICING</MenuItemContent>
                        </Link>
                    </MenuContainer>

                </HeaderContent>
            </div>


            {props.showBtn === false ? null : 
                <Link to='/pricing' className='pricing-link'>
                    <button className="tryNow-btn" style={{color: `${props.btnTextColor}`}}><b>Try it now</b></button>     
                </Link>
            }
            
            
        </SectionHeader>
    )
}
