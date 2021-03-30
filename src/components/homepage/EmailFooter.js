import React from 'react';
import styled from 'styled-components';
import EmailIcon from '@material-ui/icons/Email';
import CopyrightIcon from '@material-ui/icons/Copyright';

const ContactFooter = styled.footer`
    display: grid;
    height: 35vh;
    grid-template-columns: repeat(3, 1fr);
    background-color: slateblue;
    color: white;
    padding: 3em;

    .email-info {
        display: flex;
        flex-direction: row;
        grid-column: 1/3;
        font-size: 18px;
        align-items: center;
        grid-gap: 0.5em;
    }

    .copyright-content {
        grid-row: 2;
        grid-column: 1/4;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    h3 {
        font-size: 26px;
        font-weight: 300;
    }

    h6 {
        font-size: 16px;
        font-weight: 400;
    }

    p {
        padding-left: 2.2vw
    }
`;

export default function EmailFooter() {
    return (
        <ContactFooter>
            <div className='email-info'>
                <EmailIcon></EmailIcon>
                <h6>support@experienceconcerts@.co</h6>
            </div>

            <div className='copyright-content'>
                <h3>EXP|CON</h3>
                <p>2019 <CopyrightIcon style={{fontSize: 16}}></CopyrightIcon> All rights reserved | Speer Technologies Incorporated</p>
            </div>
        </ContactFooter>
    )
}