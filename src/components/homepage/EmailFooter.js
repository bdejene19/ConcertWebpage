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
                <div className='contact left'>
                    <h4>EXP</h4>
                    <p className='disclaimerText'>2019 <CopyrightIcon style={{fontSize: 16}} className='copy-icon'></CopyrightIcon> All rights reserved </p>
                </div>

                <div className='contact right'>
                    <h4>CON</h4>
                    <p className='disclaimerText'> Speer Technologies Incorporated</p>

                </div>
            </div>
        </ContactFooter>
    )
}

const ContactFooter = styled.footer`
    /* display: flex;
    flex-wrap: wrap; */
    display: grid;
        grid-template-columns: 1fr 1fr;
    height: 35vh;
    background-color: slateblue;
    color: white;

    .email-info {
        flex: 1 1 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 2em;
        padding-bottom: 0;
        grid-column: 1/3;
        grid-gap: 0.5em;

        h6 {
            font-size: 1.35rem;
            font-weight: 400;
        }
    }

    .copyright-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100vw;


        .contact {
            display: flex;
            flex-direction: column; 
            row-gap: 1em;
            column-gap: 1em;
            
            

                h4 {
                    font-weight: 300;
                }
                p {
                    /* display: flex; */
                    /* justify-items: baseline; */
                }

                .copy-icon {
                    font-size: 16px;
                }
        }
        .left {
            text-align: right;
            row-gap: 1em;
            column-gap: 1em;
            h4,p {
                border-right: solid white 2px;
                padding-right: 0.2em;
            }

        

            
        }

        .right {
            padding-left: 0.2em;
        }
       

        .disclaimerText {
            font-size: 1.5rem;
        }
    }

 
    @media screen and (max-width: 1024px) {

        .email-info {
            h6 {
                font-size: 1.5rem;
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
                /* padding-left: 2em; */
            }

            .copy-icon {
                font-size: 12px;
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
            h4 {
                font-size: 2rem;
            }

            .disclaimerText {
                font-size: 0.85rem;
                padding-left: 0;
                padding-right: 0;
                width: 100%;
                margin-right: 0;
            }
        }
    }



  

  
`;

