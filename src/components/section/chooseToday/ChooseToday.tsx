import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import SectionItem from '../SectionItem';
import { useAppSelector } from '../../../redux/hook';
import { RootState } from '../../../redux/store';
import { ISongTodaySection } from '../../../interfaces/sections';
import TitleSection from '../TitleSection';
import TodayItemComponent from './TodayItemComponent';
import { IAlbum } from '../../../interfaces/music';
type Props = {
  playList: ISongTodaySection | null;
};

const ChooseToday: React.FC<Props> = ({ playList }) => {
  return (
    <div className='mt-12 px-2'>
      <TitleSection title={playList?.title} />
      <div className='grid px-3 xl:px-0 grid-cols-2 xl:grid-cols-4 items-center justify-center gap-5 '>
        {playList &&
          playList?.items?.length > 0 &&
          playList?.items
            ?.slice(0, 4)
            ?.map((item: IAlbum) => (
              <TodayItemComponent key={item.encodeId} song={item} />
            ))}
      </div>
    </div>
  );
};

export default ChooseToday;
