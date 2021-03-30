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

const HeaderContent = styled.div`
    display: flex;
    grid-gap: 1em;
    color: ${props => props.headerColor || 'white' };
    

    .hamburgerIcon{
        font-size: 36px;
        cursor: pointer;
    }

    #hamburger-effect {
        height: 7vh;
  


    }

    h2 {
        padding-top: 2px;
        font-size: 26px;
        font-weight: 500;
    }

`;
export default function LandingPageHeader(props) {
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    // const showMenu = () => {

    //     if (sideMenuOpen) {
    //         document.getElementById('hamburger-effect').style.display = 'none'
    //         setSideMenuOpen(false);
    //     } else {
    //         document.getElementById('hamburger-effect').style.display = 'inline-block'
    //         setSideMenuOpen(false);

    //     }

    // }
    return (
        <SectionHeader>
            <HeaderContent headerColor={props.headerColor}>
                <MenuIcon fontSize='large' className='hamburgerIcon'/>
                <h2>EXP|CON</h2>

            </HeaderContent>
                            
            <Link to='/pricing' className='pricing-link'>
                <button className="tryNow-btn" style={{color: `${props.btnTextColor}`}} showTryNow='inline-block'><b>Try it now</b></button>     
            </Link>
        </SectionHeader>
    )
}
