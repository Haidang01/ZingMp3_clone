import React, { useState } from 'react';
import { RiHeart3Line } from 'react-icons/ri';
import { BsPlayCircle } from 'react-icons/bs';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

type Props = {
  item: any;
};

const ImgSection = ({ item }: Props) => {
  const [hoverImg, setHoverImg] = useState<Boolean>(false);
  const handleMouseOver = () => {
    setHoverImg(true);
  };
  const handleMouseOut = () => {
    setHoverImg(false);
  };
  return (
    <div
      className='w-auto relative overflow-hidden'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img
        src={item.thumbnailM}
        alt=''
        className={` ${
          hoverImg ? ' scale-110  ' : ''
        } rounded-md w-full h-full object-cover transition ease-in-out cursor-pointer duration-500 `}
      />
      {hoverImg && (
        <div className='absolute flex gap-4 cursor-pointer justify-center items-center bg-[rgba(0,0,0,0.3)] top-0 left-0 right-0 bottom-0'>
          <div
            title='Thêm vào thư viện'
            // onClick={() => setLike(prev => !prev)}
            className='w-[35px]   cursor-pointer h-[35px] rounded-full text-white flex items-center hover:bg-[#ffffff1a] justify-center'
          >
            <RiHeart3Line
              // color={like ? '#c273ed' : 'white'}
              title='Thêm vào thư viện'
              fontSize={'20px'}
            />
          </div>
          <BsPlayCircle color='white' fontSize={'50px'} />
          <div
            title='Khác'
            className='w-[35px] cursor-pointer text-white hover:bg-[#ffffff1a] h-[35px] rounded-full flex items-center  justify-center'
          >
            <BiDotsHorizontalRounded title='Xem thêm' fontSize={'23px'} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImgSection;
