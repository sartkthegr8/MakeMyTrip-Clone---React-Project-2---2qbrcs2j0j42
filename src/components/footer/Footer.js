import React from 'react';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';



function Footer() {
  const d = new Date();
  const year = d.getFullYear();

  return (

    
    <div className='bg-gradient-to-b from-blue-900 to-blue-600'>
      <div className='container mx-auto py-10 text-white'>
        <div className='flex flex-col md:flex-row items-center justify-center md:justify-between'>
          <div className='flex gap-6'>
            <div className='footer__icon'><FacebookSharpIcon className='text-3xl'/></div>
            <div className='footer__icon'><TwitterIcon className='text-3xl'/></div>
          </div>
          <div className='text-lg'>
            <p>©{year} Copyright MakeMyTrip</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
