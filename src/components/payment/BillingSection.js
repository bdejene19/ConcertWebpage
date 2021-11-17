import React, {useEffect} from 'react';
import styled from 'styled-components';
import BillingInfo from './BillingInfo';
import CardForm from './CardForm';
import PlanSelection from './PlanSelection';
import TermsAgreement from './TermsAgreement';

export default function BillingSection() {
    useEffect(() => {
        window.scrollTo(0,0);
    });
    return (
        <UserBillingInfo>
            <h1 className='payment-title'>PAYMENT</h1>

            <PlanSelection/>
            <BillingInfo/>
            <CardForm/>
           
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
