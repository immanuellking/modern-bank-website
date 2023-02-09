import React from 'react';
import { card } from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo} data-aos="fade-up-right">
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[480px]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo accusantium eaque sequi eligendi explicabo? 
          Nobis porro non facilis corrupti?
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg} data-aos="fade-down-left">
        <img src={card} alt="card" className="w-full h-full" />
      </div>
    </section>
  )
}

export default CardDeal