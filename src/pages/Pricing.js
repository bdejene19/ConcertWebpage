import React from 'react';
import EmailFooter from '../components/homepage/EmailFooter';
import PricePlans from '../components/pricing/PricePlans'
import {SectionWrapper} from '../pages/HomeLandingPage'
import LandingPageHeader from '../components/homepage/LandingPageHeader';
import LandingPerks from '../components/homepage/LandingPerks';

export default function Pricing() {
    return (
        <div>
            <PricePlans></PricePlans>

            <SectionWrapper bgColor='#ff4d4d' style={{height: 650}}>
                <LandingPageHeader></LandingPageHeader>
                <LandingPerks></LandingPerks>

            </SectionWrapper>
            <EmailFooter></EmailFooter>
        </div>
    )
}
