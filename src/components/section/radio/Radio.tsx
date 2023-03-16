import React, { useState, useEffect } from 'react';
import TitleSection from '../TitleSection';
import { ILivestream } from '../../../interfaces/sections';
import Slider from 'react-slick';
import ImgRadio from './ImgRadio';
import RadioItem from './RadioItem';

type Props = {
  playList: ILivestream | null;
};

const Radio = ({ playList }: Props) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:
      windowSize.width > 680 ? (windowSize.width > 1200 ? 6 : 4) : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };
  return (
    <div>
      <TitleSection title={playList?.title} />
      <div className='py-4 lg:w-[900px] lg:w-[700px] overflow-hidden flex-row   mx-auto pt-5 '>
        <Slider {...settings}>
          {playList?.items?.map(item => (
            <RadioItem key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Radio;
