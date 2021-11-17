import React from 'react';
import Countries from './Countries';


export default function BillingInfo() {
    return (
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
    )
}
