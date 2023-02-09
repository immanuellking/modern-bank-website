import React, {useEffect} from 'react';
import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from "./GetStarted";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`} data-aos="fade-right">

        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-8 h-8" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For {" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-7xl text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" /> {" "}
            <span className="text-gradient">Generation</span>
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0" data-aos="zoom-in" >
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-7xl text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Payment Method.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] `}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your need. 
          We annual percentage rates, annual fees.
        </p>
      </div>


      <div className={`flex-1 ${styles.flexCenter} relative md:my-0 my-10`}>
        <img src={robot} alt="billing" className="w-full h-full z-[5]" data-aos="fade-left"/>

        <div className="w-2/5 h-[35%] pink__gradient absolute z-[0] top-0" />
        <div className="w-4/5 h-4/5 rounded-full white__gradient absolute z-[1] bottom-40" />
        <div className="w-1/2 h-1/2 blue__gradient absolute z-[0] right-20 bottom-20" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`} >
        <GetStarted />
      </div>

    </section>
  )
}

export default Hero