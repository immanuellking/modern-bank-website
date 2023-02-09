import React from 'react';
import { quotes } from '../assets';

const FeedbackCard = ({content, name, title, img, index}) => {
  let data = "";
  if(index === 0) {
   data = "fade-right"
  } else if(index === 1) {
   data = "zoom-out"
  } else {
    data = "fade-left"
  }

  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[350px] md:mr-10 sm:mr-5 mr-0 my-5 feature-card" data-aos={data} >
      <img src={quotes} alt="double_quotes" className="w-[42px] h-[27px]" />
      <p className="font-poppins font-normal text-lg leading-8 text-white my-10">
        {content}
      </p>

      <div className="flex flex-row">
        <img src={img} alt={name} className="w-12 h-12" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-xl leading-8 text-white">{name}</h4>
          <p className="font-poppins font-normal text-base leading-6 text-dimWhite" >{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard