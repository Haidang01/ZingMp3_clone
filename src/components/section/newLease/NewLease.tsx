import React, { useEffect, useState } from 'react';
import TitleSection from '../TitleSection';
import { INewRelease } from '../../../interfaces/sections';
import { BsPlayFill } from 'react-icons/bs';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import SongItemComponent from './SongItemComponent';
import { ISong } from '../../../interfaces/music';

type Props = {
  data: INewRelease | null;
};

const NewLease = ({ data }: Props) => {
  const [dataRender, setDataRender] = useState<ISong[]>([]);
  const [optionNew, setOptionNew] = useState<string>('all');
  useEffect(() => {
    data && setDataRender(data?.items?.all);
  }, [data]);

  useEffect(() => {
    if (optionNew === 'all' && data) {
      setDataRender(data.items?.all);
    } else if (optionNew === 'vPop' && data) {
      setDataRender(data.items?.vPop);
    } else if (optionNew === 'others' && data) {
      setDataRender(data.items?.others);
    }
  }, [optionNew]);
  return (
    <div className='mt-10  px-2'>
      <TitleSection title={data?.title} />
      <div className='flex sm:px-2 text-white gap-4 text-[12px]  font-[500] justify-start items-center'>
        <button
          onClick={() => setOptionNew('all')}
          className={` border ${
            optionNew === 'all' && 'bg-[#9b4de0]'
          } rounded-xl py-[4px] border-[#ffffff1a] px-6`}
        >
          TẤT CẢ
        </button>
        <button
          onClick={() => setOptionNew('vPop')}
          className={` border ${
            optionNew === 'vPop' && 'bg-[#9b4de0]'
          } rounded-xl py-[4px] border-[#ffffff1a] px-6`}
        >
          VIỆT NAM
        </button>
        <button
          onClick={() => setOptionNew('others')}
          className={` border ${
            optionNew === 'others' && 'bg-[#9b4de0]'
          } rounded-xl py-[4px] border-[#ffffff1a] px-6`}
        >
          QUỐC TẾ
        </button>
      </div>
      <div className='flex justify-center sm:justify-around xl:justify-between mt-2'>
        <div className=''>
          {dataRender?.slice(0, 4).map(item => (
            <SongItemComponent key={item.encodeId} song={item} />
          ))}
        </div>
        <div className='hidden sm:block'>
          {dataRender?.slice(4, 8).map(item => (
            <SongItemComponent key={item.encodeId} song={item} />
          ))}
        </div>
        <div className='hidden xl:block'>
          {dataRender?.slice(8, 12).map(item => (
            <SongItemComponent key={item.encodeId} song={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewLease;
