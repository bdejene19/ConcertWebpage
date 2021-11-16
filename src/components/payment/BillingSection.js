import React, {useEffect} from 'react';
import styled from 'styled-components';
import Countries from './Countries';
import TermsAgreement from './TermsAgreement';

export default function BillingSection() {
    useEffect(() => {
        window.scrollTo(0,0);
    });
    return (
        <UserBillingInfo>
            <h1 className='payment-title'>PAYMENT</h1>

            <div className='payment-1'>
                <h6>1. Select your plan</h6>
                <div className='plan-choices'> 
                    <input type='radio' name='plan-type' id='basic' className='radioBtn'></input>
                    <label htmlFor='basic' style={{color: '#ff4d4d'}}>BASIC</label>
                    <input type='radio' name='plan-type' id='advanced' value='advanced'></input>
                    <label htmlFor='advanced' style={{color: '#ffc233'}}>ADVANCED</label>
                    <input type='radio' name='plan-type' id='pro' value='pro'></input>
                    <label htmlFor='pro' style={{color: 'aqua'}}>PRO</label>      
                </div>
            </div>

            <div className='payment-2'>
                <div>

                    <h6>2. Billing Information</h6>
                    <form id='form-p1'>
                        <div>
                            <label htmlFor='fullName'>
                                FULL NAME
                            </label><br></br>
                            <input type='text' id='fullName'></input><br></br>
                            <span></span>
                        </div>
                    
                        <div>
                            <label htmlFor='billAddress'>
                                BILLING ADDRESS
                            </label><br></br>
                            <input type='text' id='billAddress'></input>
                        </div>
                        

                        <div className='smallText-input'>
                            <div>
                                <label htmlFor='city'>
                                    CITY
                                </label><br></br>
                                <input type='text' id='city' className='smallText-bar'></input>

                            </div>
                            
                            <div>
                                <label htmlFor='postalCode'>
                                    POSTAL CODE
                                </label><br></br>
                                <input type='text' id='postalCode' className='smallText-bar'></input>
                            </div>           
                        </div>

                        <div>
                            <label htmlFor='country'>
                                COUNTRY
                            </label><br></br>
                            <Countries></Countries>
                        </div>                    
                    </form>
                </div>

            </div>

            <div className='payment-3'>
                <div>
                    <h6>3. Credit Card Information</h6>

                    <form>
                        <div>
                            <label htmlFor='fullName'>
                                CARDHOLDER'S NAME
                            </label><br></br>
                            <input type='text' id='cardholder-name'></input>
                        </div>
                        
                        <div>
                            <label htmlFor='billAddress'>
                                CARD NUMBER
                            </label><br></br>
                            <input type='text' id='billAddress'></input>
                        </div>
                        

                        <div className='smallText-input'>
                            <div>
                                <label htmlFor='expiry-month'>
                                    EXPIRY MONTH
                                </label><br></br>
                                <input type='text' id='expiry-month'></input>

                            </div>
                            
                            <div>
                                <label htmlFor='expiry-year'>
                                    EXPIRY YEAR
                                </label><br></br>
                                <input type='text' className='smallText-bar' id='expiry-year'></input>
                            </div>           
                        </div>

                        <div>
                            <label htmlFor='cvv'>
                                CVV
                            </label><br></br>

                            <input type='text' id='cvv'></input>
                        </div>                    
                    </form>
                </div>

            </div>
            <TermsAgreement ></TermsAgreement>
        </UserBillingInfo>
    )
}

const UserBillingInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 5em;
    align-items: center;
    justify-content: center;
    padding-left: 10em;
    padding-right: 10em;
    letter-spacing: 3px;
    h1 {
        font-size: 3rem;
        flex: 1 1 100%;
        letter-spacing: 5px;
    }

    h6 {
        font-size: 2rem;
        font-weight: 300;
        /* padding-bottom: 0.5em; */
        padding-bottom: 1em;

    }

    .payment-title {
        padding-top: 1em;
        padding-bottom: 1em;
    }

    .payment-1 {
        padding-bottom: 5em;
        flex: 1 1 100%;
    }

    label {
        font-weight: bold;
    }
  
    .plan-choices {
        font-size: 1.5rem; 
        input {
        }
        input[type="radio"]:checked {
            background-color: solid green 1px;

            
        }

        label {
            padding-right: 1em;
            padding-left: 10px;    
            font-weight: 900; 
        }

        
    }

    form {
        width: 90%;
        grid-row: 2;
        input  {
            width: 100%;
            font-size: 16px;
            padding: 1em;
            height: 6vh;
            border-radius: 0;
            
        } 
        input:focus  {   
            border-bottom: solid slateblue 5px;
        }

        select {
            padding-left: 1em;
            font-size: 16px;
        }
        #country {
            width: 100%;
            height: 6vh;
            border-radius: 0;
            /* padding: 1em; */
        } 
        & div {
            padding-top: 0.5em;
        }
    }
    .smallText-input {
        display: flex;
        grid-gap: 2em;
        
        div {
            width: 100%;
        }
        
    }
    .smallText-bar {
        width: 100%; 
    }

    .payment-2, .payment-3 {
        flex: 1 1 30em;
    }

    @media screen and (max-width: 1024px) {
        padding-left: 2em;
        padding-right: 0;

        form {
            input {
                height: 5vh
            }
        }
        
    }

    @media screen and (max-width: 768px) {
       
        row-gap: 2em;

      
        
    }

    @media screen and (max-width: 425px) {
        padding-left: 1em;

        h6 {
            font-size: 1.5rem;
        }

        .payment-1 {
            padding-bottom: 0;
        }

        .plan-choices {
            padding-left: 0;
            label {
                font-size: 1.25rem;
                padding-left: 7px;
            }
        }
    }

`;
