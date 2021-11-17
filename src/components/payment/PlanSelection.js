import React from 'react'

export default function PlanSelection() {
    return (
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
    )
}
