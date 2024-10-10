'use client'

import { useEffect } from 'react';
import  AOS from 'aos';
import 'aos/dist/aos.css';

const AOSProvider = ({ children }) => {
  useEffect(() => {
    if(AOS){
        AOS.init()
    }
  }, []);

  return <>{children}</>;
};

export default AOSProvider;