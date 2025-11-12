import React from 'react';
import CompanyBanner from './components/CompanyBanner';
import OurEvolution from '../home/our-evolution/OurEvolution';

const CompanyPage = () => {
    return (
        <div>
          <CompanyBanner />  
          <div className=' pt-[100px]'> 
          <OurEvolution />  
          </div>
        </div>
    );
};

export default CompanyPage;