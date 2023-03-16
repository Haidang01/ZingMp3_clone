import React, { useState } from 'react';
import { BsPlayCircle } from 'react-icons/bs';

type Props = {
  bigImg: string;
  smallImg: string;
};

const ImgRadio = ({ bigImg, smallImg }: Props) => {
  const [hoverImg, setHoverImg] = useState<Boolean>(false);
  const handleMouseOver = () => {
    setHoverImg(true);
  };
  const handleMouseOut = () => {
    setHoverImg(false);
  };
  return (
    <div className='relative'>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className='relative w-[130px] cursor-pointer rounded-full flex justify-center overflow-hidden h-[130px]'
      >
        <img
          src={bigImg}
          alt=''
          className={`${
            hoverImg && 'scale-110'
          } rounded-full transition duration-500 ease-in-out w-[130px] h-[130px] object-cover`}
        />
        {hoverImg && (
          <div className='absolute top-0 flex justify-center items-center left-0 right-0 w-full h-full rounded-full bg-[rgba(0,0,0,0.5)]'>
            <BsPlayCircle color='white' fontSize={50} />
          </div>
        )}
      </div>
      <img
        src={smallImg}
        alt=''
        className='rounded-full z-10 w-[47px] h-[47px] object-cover absolute bottom-0 right-0 border border-[#000] '
      />
    </div>
  );
};

export default ImgRadio;
