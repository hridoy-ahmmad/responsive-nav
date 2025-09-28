import React, { Suspense } from 'react';
import Nav from './Components/NAv/Nav';
import PricingComponent from './Components/NAv/pricingCard/PricingComponent';


const pricingPromise = fetch('/pricing.json')
  .then(res => res.json())

const App = () => {
  return (
    <div className=' bg-black text-amber-50'>
      <Nav></Nav>
      <main>
        <Suspense fallback={<span className="loading loading-ring loading-xl"></span>
        }>
          <PricingComponent pricingPromise={pricingPromise}></PricingComponent>
        </Suspense>
      </main>
    </div>
  );
};

export default App;