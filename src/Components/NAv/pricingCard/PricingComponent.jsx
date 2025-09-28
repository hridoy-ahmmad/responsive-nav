import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingComponent = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    // console.log(pricingData)
    return (
        <div className='lg:container mx-auto mt-12  '>
            <h1 className='text-2xl font-bold text-center'>Gym Plan</h1>
            <h1 className='lg:text-7xl text-2xl font-bold text-center leading-tight my-10 block '>Choose Your Plan Thats Suits <br /> Your Need</h1>

            <div className='grid md:grid-cols-3 gap-5'>
            {
                pricingData.map((price, index) => <PricingCard key={index} price={price} ></PricingCard>)
            }
            </div>
        </div>
    );
};

export default PricingComponent;