import React from 'react';
import styles, { layout } from '../style';
import Button from "./Button"
import { features } from '../constants';

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index === features.length -1 ? "mb-0" : "mb-6"} feature-card`} data-aos="fade-left" data-aos-duration={`${(index +1) * 1000}`}>
    <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-1/2 h-1/2" />
    </div>

    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-lg leading-[23px]">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-base leading-6">
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`} >
      <div className={layout.sectionInfo} data-aos="fade-up-right" >
        <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden" /> we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. 
          But with hundreds of credit cards on the market.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`} data-aos="fade-up-left" >
        { features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
         )) 
        }
      </div>
    </section>
  )
}

export default Business