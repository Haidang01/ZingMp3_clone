import React from 'react';
import { useSearchSongQuery } from '../redux/apis/Music/MusicApi';
import { useLocation } from 'react-router-dom';
import Scrollbars from 'react-custom-scrollbars-2';
import { ISong } from '../interfaces/music';
import { ItemPlayList } from '../components';
import EveryDay from '../components/section/everyday/EveryDay';
import TitleSection from '../components/section/TitleSection';
import EveryDayItem from '../components/section/everyday/EveryDayItem';
import { IArtistSectionItem } from '../interfaces/sections';
import LoadingPage from '../components/Spinners/LoadingPage';

type Props = {};

const Search = (props: Props) => {
  const location = useLocation();
  const { data, isFetching } = useSearchSongQuery(
    location.pathname.split('/')[2],
  );
  console.log(data?.playlists, data);

  return (
    <div className='pb-[90px]'>
      <div className=' px-2 text-2xl  lg:px-0 lg:text-3xl   font-bold text-white'>
        Kết quả tìm kiếm
      </div>
      <hr className='lg:w-full' />
      {isFetching ? (
        <div className='w-full h-[60vh] flex justify-center items-center'>
          <LoadingPage color='#c273ed' width={100} height={100} />
        </div>
      ) : (
        <div className='lg:mt-10'>
          <div className=' px-2 text-xl lg:px-0 lg:text-2xl my-2 font-bold text-white'>
            Bài hát
          </div>

          {!data.songs && (
            <div className=' text-sm text-center my-5 text-[#ccc] lg:text-xl '>
              Không có kết quả được tìm thấy
            </div>
          )}
          {data?.songs?.map((item: ISong) => (
            <ItemPlayList song={item} key={item.encodeId} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
