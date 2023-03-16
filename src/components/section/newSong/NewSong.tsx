import React, { useEffect, useState } from 'react';
import { IArtistSection } from '../../../interfaces/sections';
import NewSongItem from './NewSongItem';
import Slider from 'react-slick';
import TitleSection from '../TitleSection';

type Props = {
  playList: IArtistSection | null;
};

const NewSong = ({ playList }: Props) => {
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
      windowSize.width > 680 ? (windowSize.width > 1200 ? 3 : 2) : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className=''>
      <TitleSection title={playList?.title} />
      <div className='py-2 px-8 xl:px-0 xl:w-[930px] lg:w-[700px] overflow-hidden  gap-2  mx-auto '>
        <Slider {...settings}>
          {playList?.items?.map((item, index) => (
            <NewSongItem key={item.encodeId} item={item} index={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewSong;
