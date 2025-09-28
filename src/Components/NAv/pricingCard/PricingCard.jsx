import React from 'react';
import PricingFeature from './pricingFeature';
import { Dumbbell } from 'lucide-react';

const PricingCard = ({ price }) => {
    console.log(price)
    const { name,  pricing,description, feature  } = price
    return (
        <div className='p-6 border-1 border-gray-500 flex flex-col gap-3 rounded-xl bg: bg-gradient-to-b from-[#0f172a] via-[#0b1220] to-[#000814] shadow-lg'>
            <div className='flex justify-between  py-4 px-2 font-bold items-center'>
                <span className='flex gap-2 items-center border-2 border-gray-500 py-2 px-5 rounded-xl'>
                    <Dumbbell></Dumbbell><h3 className=''>  {name}</h3>
                </span>
    
            </div>

            <h2 className='text-5xl font-bold'>  {pricing} </h2>
            <h6 className='text-xl my-10  border-gray-500   h-[100px]'> {description} </h6>
            <div className=' mb-8 border-t border-gray-500 pt-10 '>
                {
                    feature.map((features, index) => <PricingFeature features={features} key={index} ></PricingFeature>)
                }
                <button className='btn bg-orange-300 text-black py-3 px-8 font-bold rounded-sm cursor-pointer hover:bg-orange-400 hover:text-gray-200 duration-100 mt-4'>Buy Now</button>
            </div>

        </div>
    );
};

export default PricingCard;