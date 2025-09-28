import { ClipboardCheck } from 'lucide-react';
import React from 'react';

const PricingFeature = ({features}) => {
    return (
        <div className='flex gap-2 mb-10'>
            <ClipboardCheck></ClipboardCheck>
            {
                features
            }
        </div>
    );
};

export default PricingFeature;