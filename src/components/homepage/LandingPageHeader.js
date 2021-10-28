import React, {useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

export default function LandingPageHeader(props) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const openMenu = (targetElement) => {
        let openStyling = `  transition: 0.5s linear;
        height: 42vh;
        border-radius: 0 50% 50% 40%;
        visibility: visible;
        z-index: 2;`

        let width = '';
        let windowWidth = window.innerWidth;
        if (isMenuOpen === false) {
            if (windowWidth >= 1000) {
                document.getElementById(`${targetElement}`).style.cssText = `
               ${openStyling}
               width: 45%; 

            `;
            } else if (windowWidth <= 768 && windowWidth > 450) {
                document.getElementById(`${targetElement}`).style.cssText = `
                ${openStyling}
                width: 45vw;
                height: 35vh; 
 
             `; 

            } else if (windowWidth <= 450) {
                document.getElementById(`${targetElement}`).style.cssText = `
                ${openStyling}
                width: 80vw;
                height: 40vh; 
 
             `; 
            } 
           
        }   
         else {
            document.getElementById(`${targetElement}`).style.cssText = `
                transition: 0.5s linear;
                width: 0; 
                height: 0vh;
                visibility: hidden;
                border-radius: 0 50% 50% 50%;                
            `;


        }
        setMenuOpen(!isMenuOpen);      
    }

    return (
        <SectionHeader>
            <div style={{position: 'relative'}}>
                <HeaderContent headerColor={props.headerColor}>
                    <div style={{alignItems: 'center', display: 'flex', gridGap: '1em'}}>
                        <MenuIcon fontSize='large' className='hamburgerIcon'  onClick={() => openMenu(props.subMenuHeader)}/>
                        <h2>EXP|CON</h2>

                    </div>
                    

                    <MenuContainer menuBgColor={props.bgMenuColor} id={props.subMenuHeader}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        <Link to='/' className='menuItem'>
                            <MenuItemContent hoverColor={props.contentColor}>WHAT IS IT?</MenuItemContent>
                        </Link>
                        
                        <a href='#perks' className='menuItem'>
                            <MenuItemContent hoverColor={props.contentColor}>PERKS</MenuItemContent>
                        </a>
                        
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
        
        button:hover {
            background: linear-gradient(90deg, aqua 0%, blue 30%, red 70%, yellow 100%);
            color: white;


        }
    }
    
    @media screen and (max-width: 768px) {
        .tryNow-btn {
            min-width: 15vw;
            max-width: 35vw;
        }
    }

    @media screen and (max-width: 450px) {
        .tryNow-btn {
            margin-left: 1.5em;
            min-width: 25vw;
        }
    }
`;

const HeaderContent = styled.div`
    display: flex;
    color: ${props => props.headerColor || 'white' };

    .hamburgerIcon{
        font-size: 2.75rem;
        cursor: pointer;
        justify-content: right;
        align-items: center;
        z-index: 3;
    }

   
    /* } */
    h2 {
        padding-top: 2px;
        font-size: 2.5rem;
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
        /* padding-top: 5em; */
        padding-left: 2.2em;
        overflow: hidden;
        letter-spacing: 2px;


        h1 {
            font-size: 32px;
            padding-bottom: 0.5em;
            width: max-content;
            font-weight: 700;
        }

        .menuItem {
            text-decoration: none;
            color: white;
        }

        .menuItem:hover {
            color: ${props => props.hoverColor}
        }
`;

export const MenuItemContent = styled.h5`
    font-size: 2.25rem;
    padding-bottom: 0.5em;
    width: max-content;
    font-weight: 500;

    color: white;

    &:hover {
        color: ${props => props.hoverColor}
    }

    @media screen and (max-width: 768px) {
        font-size: 2rem

    }
`;
