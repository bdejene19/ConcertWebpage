import React, { useEffect } from 'react';
import EmailFooter from '../components/homepage/EmailFooter';
import PricePlans from '../components/pricing/PricePlans'
import {SectionWrapper} from '../pages/HomeLandingPage'
import LandingPageHeader from '../components/homepage/LandingPageHeader';
import LandingPerks from '../components/homepage/LandingPerks';

export default function Pricing() {
    useEffect(() => {
        window.scrollTo(0,0);
        clearInterval();
    })
    return (
        <div>
            <PricePlans></PricePlans>

            <SectionWrapper bgColor='#ff4d4d' style={{height: 650}}>
                <LandingPageHeader></LandingPageHeader>
                <LandingPerks style={{height: 300}} pColor='black'></LandingPerks>
            </SectionWrapper>
            <EmailFooter></EmailFooter>
        </div>
    )
}
