import React from 'react';
import ImgSection from '../ImgSection';
import { IArtistSectionItem } from '../../../interfaces/sections';
import { truncateString } from '../../../utils/string';
import { useNavigate } from 'react-router-dom';

type Props = {
  item: IArtistSectionItem;
};

const EveryDayItem = ({ item }: Props) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`${item.link.split('.')[0]}`)}>
      <ImgSection item={item} />

      <div className='mt-3 min-h-[40px] '>
        <div className='text-secondary  space-x-1 font-normal  text-[14px]'>
          <div className='text-white hover:text-[#c273ed] cursor-pointer font-bold text-[15px] my-1 mx-1'>
            {truncateString(item.title, 30)}
          </div>
          {item?.artists?.length > 3
            ? item?.artists.slice(0, 3).map(artist => (
                <a
                  className='hover:text-[#c273ed] hover:underline'
                  href=''
                  key={artist.id}
                >
                  {artist.name},
                </a>
              ))
            : item?.artists.map(artist => (
                <a
                  className='hover:text-[#c273ed] hover:underline'
                  href=''
                  key={artist.id}
                >
                  {artist.name},
                </a>
              ))}
        </div>
      </div>
    </div>
  );
};

export default EveryDayItem;
