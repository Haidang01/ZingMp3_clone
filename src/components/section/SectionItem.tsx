import React, { memo } from 'react';
import { IArtistSectionItem } from '../../interfaces/sections';
import { useState } from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import { RiHeart3Line } from 'react-icons/ri';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import ImgSection from './ImgSection';
import { useNavigate } from 'react-router-dom';

type Props = {
  title: string;
  item: IArtistSectionItem;
};

const SectionItem: React.FC<Props> = ({ title, item }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`${item.link.split('.')[0]}`)}>
      <ImgSection item={item} />

      <div className='mt-3 min-h-[40px] '>
        <div className='text-secondary space-x-1 font-normal  text-[14px]'>
          {title === 'artist'
            ? item?.artists?.map(artist => (
                <a
                  className='hover:text-[#c273ed] hover:underline'
                  href=''
                  key={artist.id}
                >
                  {artist.name},
                </a>
              ))
            : item?.sortDescription}
        </div>
      </div>
    </div>
  );
};

export default memo(SectionItem);
