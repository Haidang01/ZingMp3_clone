import React, { memo, useEffect } from 'react';
import ImgRadio from './ImgRadio';
import { ILivestreamItem } from '../../../interfaces/sections';

type Props = {
  item: ILivestreamItem;
};

const RadioItem = ({ item }: Props) => {
  return (
    <div className='w-[140px]'>
      <ImgRadio
        bigImg={item.program.thumbnail}
        smallImg={item.host.thumbnail}
      />
      {/* ==info== */}
      <div className='text-center mt-[12px]'>
        <div className='text-white font-bold text-[16px]'>{item.host.name}</div>
        <div className='text-secondary text-[12px] font-medium'>
          {item.activeUsers} đang nghe
        </div>
      </div>
    </div>
  );
};

export default memo(RadioItem);
