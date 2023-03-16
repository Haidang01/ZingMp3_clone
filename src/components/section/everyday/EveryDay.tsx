import React from 'react';
import TitleSection from '../TitleSection';
import { IArtistSection } from '../../../interfaces/sections';
import EveryDayItem from './EveryDayItem';

type Props = {
  playList: IArtistSection | null;
};

const EveryDay = ({ playList }: Props) => {
  return (
    <div>
      <TitleSection title={playList?.title} />
      <div className='grid px-3 lg:px-0 grid-cols-2  lg:grid-cols-4 gap-4 grid-row'>
        {playList?.items?.slice(0, 4).map(item => (
          <EveryDayItem key={item.encodeId} item={item} />
        ))}
      </div>
    </div>
  );
};

export default EveryDay;
