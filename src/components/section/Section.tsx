import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import SectionItem from './SectionItem';
import { useAppSelector } from '../../redux/hook';
import { RootState } from '../../redux/store';
import { IArtistSection } from '../../interfaces/sections';
import TitleSection from './TitleSection';
type Props = {
  title: string;
  playList: IArtistSection | null;
};

const Section: React.FC<Props> = ({ title, playList }) => {
  return (
    <div className='mt-4 px-2'>
      <TitleSection title={playList?.title} />
      <div className='grid  px-3 xl:px-0 grid-cols-2 xl:grid-cols-4 items-center justify-center gap-3 sm:gap-5 '>
        {playList &&
          playList?.items?.length > 0 &&
          playList?.items
            ?.slice(0, 4)
            ?.map(item => (
              <SectionItem key={item.encodeId} title={title} item={item} />
            ))}
      </div>
    </div>
  );
};

export default Section;
