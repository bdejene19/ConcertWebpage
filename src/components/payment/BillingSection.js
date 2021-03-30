import React, {useEffect} from 'react';
import styled from 'styled-components';
import Countries from './Countries';
import TermsAgreement from './TermsAgreement';

const UserBillingInfo = styled.div`
    display: grid;
    grid-template-columns: 40vw 40vw;
    grid-column-gap: 5em;
    align-items: center;
    justify-content: center;
    letter-spacing: 3px;
    h1 {
        font-size: 48px;
        letter-spacing: 5px;
    }

    h6 {
        font-size: 36px;
        font-weight: 300;
        /* padding-bottom: 0.5em; */

    }

    .payment-title {
        grid-column: 1/3;
        padding-bottom: 1em;
    }

    .payment-1 {
        padding-bottom: 1em;
    }

    #form-p1 {
        margin-left: 2.3em;
    }

    label {
        font-weight: bold;
    }
  
    .payment-2 {
        width: 100%;
        grid-column: 1;
        grid-row: 2;
        input  {
            width: 100%;
            font-size: 16px;
            padding: 1em;
            height: 6vh;
            border-radius: 0;
            
        } 

        #country {
            width: 100%;
            height: 6vh;
            border-radius: 0;
            padding: 1em;
        } 
    }

    .payment-3 {
        grid-column: 2;
        grid-row: 2;
        width: 100%;
        input  {
            width: 100%;
            font-size: 16px;
            padding: 1em;
            height: 6vh;
            border-radius: 0;
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
`;

export default function BillingSection() {
    useEffect(() => {
        window.scrollTo(0,0);
    });
    return (
        <UserBillingInfo>
            
            <div className='payment-1'>
                <h1 className='payment-title'>PAYMENT</h1>
                <h6>1. Select your plan</h6>
                <div>
                    <input type='radio' name='plan-type' id='basic'></input>
                    <label for='basic'>Basic</label>
                    <input type='radio' name='plan-type' id='advanced' value='advanced'></input>
                    <label for='advanced'>Advanced</label>
                    <input type='radio' name='plan-type' id='pro' value='pro'></input>
                    <label for='basic'>Pro</label>
                    
                </div>
            </div>

            <div className='payment-2'>
                <div>

                    <h6>2. Billing Information</h6>
                    <form id='form-p1'>
                        <div>
                            <label for='fullName'>
                                FULL NAME
                            </label><br></br>
                            <input type='text' id='fullName'></input><br></br>
                            <span></span>
                        </div>
                    
                        <div>
                            <label for='billAddress'>
                                BILLING ADDRESS
                            </label><br></br>
                            <input type='text' id='billAddress'></input>
                        </div>
                        

                        <div className='smallText-input'>
                            <div>
                                <label for='city'>
                                    CITY
                                </label><br></br>
                                <input type='text' id='city' className='smallText-bar'></input>

                            </div>
                            
                            <div>
                                <label for='postalCode'>
                                    POSTAL CODE
                                </label><br></br>
                                <input type='text' id='postalCode' className='smallText-bar'></input>
                            </div>           
                        </div>

                        <div>
                            <label for='country'>
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
                            <label for='fullName'>
                                CARDHOLDER'S NAME
                            </label><br></br>
                            <input type='text' id='cardholder-name'></input>
                        </div>
                        
                        <div>
                            <label for='billAddress'>
                                CARD NUMBER
                            </label><br></br>
                            <input type='text' id='billAddress'></input>
                        </div>
                        

                        <div className='smallText-input'>
                            <div>
                                <label for='expiry-month'>
                                    EXPIRY MONTH
                                </label><br></br>
                                <input type='text' id='expiry-month'></input>

                            </div>
                            
                            <div>
                                <label for='expiry-year'>
                                    EXPIRY YEAR
                                </label><br></br>
                                <input type='text' id='postalCode' className='smallText-bar' id='expiry-year'></input>
                            </div>           
                        </div>

                        <div>
                            <label for='cvv'>
                                CVV
                            </label><br></br>

                            <input type='text' id='cvv'></input>
                        </div>                    
                    </form>
                </div>

            </div>
            <br></br>
           

            <TermsAgreement ></TermsAgreement>
            
        </UserBillingInfo>
    )
}
