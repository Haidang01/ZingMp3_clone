import React from 'react';
import { IArtistSectionItem } from '../../../interfaces/sections';
import { formattedDateTimeStamp } from '../../../utils/time';
import { truncateString } from '../../../utils/string';
import { useDispatch } from 'react-redux';
import {
  setCurSongId,
  setPlayed,
} from '../../../redux/features/home/musicSlice';

type Props = {
  item: IArtistSectionItem;
  index: number;
};

const NewSongItem = ({ item, index }: Props) => {
  const dispatch = useDispatch();
  return (
    <div className='p-[15px] cursor-pointer gap-3 w-[290px] rounded-md flex flex-1 bg-[#2f2739]'>
      <div
        onClick={() => {
          dispatch(setCurSongId(item.encodeId));
          dispatch(setPlayed(true));
        }}
      >
        <img
          src={item.thumbnailM}
          alt=''
          className='rounded-md w-[120px] h-[120px] object-cover'
        />
      </div>
      <div className='flex justify-between flex-col'>
        <div>
          <div className='text-white font-bold text-[18px]'>
            {truncateString(item.title, 10)}
          </div>
          <span className='text-[12px] font-medium text-secondary'>
            {truncateString(item.artistsNames, 15)}
          </span>
        </div>
        <div className='flex gap-2'>
          <div className='text-[40px]  font-black  text-secondary'>
            #{index + 1}
          </div>
          <span className='flex text[14px] font-normal text-secondary mb-2 items-end'>
            {item.releaseDate && formattedDateTimeStamp(item?.releaseDate)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewSongItem;
