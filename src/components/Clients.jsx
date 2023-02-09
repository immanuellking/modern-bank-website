import React from 'react';
import { clients } from '../constants';
import styles from '../style';

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`} data-aos="zoom-out-up">
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`} data-aos="flip-right" data-aos-duration="3000" >
            <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px]" />
          </div>
        ))

        }
      </div>
    </section>
  )
}

export default Clients