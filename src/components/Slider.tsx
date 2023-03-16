import Slider from 'react-slick';

import { useAppDispatch, useAppSelector } from '../redux/hook';
import { setCurSongId, setPlayed } from '../redux/features/home/musicSlice';
import { IBanner } from '../interfaces/music';
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
type Props = {};

const Sliders = (props: Props) => {
  const { banner } = useAppSelector(
    (state: RootState) => state.rootReducer.homeReducer,
  );

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

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleClickBanner = (song: IBanner) => {
    if (song.type === 1) {
      song.encodeId && dispatch(setCurSongId(song?.encodeId));
      dispatch(setPlayed(true));
    } else if (song.type === 4) {
      navigate(song.link.split('.')[0]);
    }
  };

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
    <div className='py-4 flex-1  w-[65vw] lg:w-[70vw]  mx-auto pt-5 '>
      <Slider {...settings}>
        {banner?.map(item => (
          <div key={item?.banner} className='rounded-lg'>
            <img
              src={item.banner}
              alt=''
              onClick={() => handleClickBanner(item)}
              className='h-[160px] flex-1 rounded-lg cursor-pointer rounded-lg object-contain'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;
