import React from 'react'

export default function CardForm() {
    return (
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
    )
}
