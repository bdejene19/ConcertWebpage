import React from 'react';
import styled from 'styled-components';
import EmailIcon from '@material-ui/icons/Email';
import CopyrightIcon from '@material-ui/icons/Copyright';


export default function EmailFooter() {
    return (
        <ContactFooter>
            <div className='email-info'>
                <EmailIcon></EmailIcon>
                <h6>support@experienceconcerts@.co</h6>
            </div>

            <div className='copyright-content'>
                <h4>EXP|CON</h4>
                <p className='disclaimerText'>2019 <CopyrightIcon style={{fontSize: 16}}></CopyrightIcon> All rights reserved | Speer Technologies Incorporated</p>
            </div>
        </ContactFooter>
    )
}

const ContactFooter = styled.footer`
    display: flex;
    flex-wrap: wrap;
    height: 35vh;
    background-color: slateblue;
    color: white;
    padding: 3em;

    .email-info {
        flex: 1 1 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        grid-gap: 0.5em;

        h6 {
            font-size: 1.35rem;
            font-weight: 400;
        }
    }

    .copyright-content {
        flex: 1 1 100%;
        text-align: center;
        align-items: center;
        justify-content: center;

        h4 {
            font-weight: 300;
        }

        .disclaimerText {
            padding-left: 4vw;
            font-size: 1.5rem;
        }
    }

 
    @media screen and (max-width: 1024px) {

        .email-info {
            h6 {
                font-size: 1.5rem;
            }
        }

        .copyright-content {
           

            .disclaimerText {
                padding-left: 2.45em;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .email-info {
            h6 {
                font-size: 1.15rem;
            }
        }

        .copyright-content {
            .disclaimerText {
                font-size: 1rem;
                padding-left: 2em;
            }
        }
    }


    @media screen and (max-width: 450px) {

        padding-left: 0;
        padding-right: 0;
        .email-info {
            padding-left: 1em;
            h6 {
                font-size: 1rem;
            }
        }

        .copyright-content {
            padding-right: 0;
            h4 {
                font-size: 2rem;
                margin-left: -0.78em;
            }

            .disclaimerText {
                text-align: center;
                font-size: 0.85rem;
                padding-left: 0;
                padding-right: 0;
                width: 100%;
                margin-right: 0;
            }
        }
    }



  

  
`;

