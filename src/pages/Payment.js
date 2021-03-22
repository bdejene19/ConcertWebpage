import React from 'react';
import LandingPageHeader from '../components/homepage/LandingPageHeader'
import BillingSection from '../components/payment/BillingSection';
import EmailFooter from '../components/homepage/EmailFooter'
export default function Payment() {
    return (
        <div>
            <LandingPageHeader headerColor='black'></LandingPageHeader>
            <BillingSection></BillingSection>
            <EmailFooter></EmailFooter>

        </div>
    )
}
