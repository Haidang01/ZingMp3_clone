import React, { memo } from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { useState } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import { ISong } from '../../../interfaces/music';
import { truncateString } from '../../../utils/string';
import { format } from 'timeago.js';
import { useAppDispatch } from '../../../redux/hook';
import { setModalVip } from '../../../redux/features/home/homeSlice';
import {
  setCurSongId,
  setPlayed,
} from '../../../redux/features/home/musicSlice';
type Props = {
  song: ISong;
};

const SongItemComponent = ({ song }: Props) => {
  const [hoverItem, setHoverItem] = useState<Boolean>(false);
  const dispatch = useAppDispatch();
  const handleHoverItem = () => {
    setHoverItem(true);
  };
  const handleMouseOutItem = () => {
    setHoverItem(false);
  };
  const handlePlaySong = (songId: string) => {
    if (song.streamingStatus === 2) {
      dispatch(setModalVip());
    } else {
      song.encodeId &&
        dispatch(setCurSongId(songId)) &&
        dispatch(setPlayed(true));
    }
  };
  return (
    <div
      onMouseOver={handleHoverItem}
      onMouseOut={handleMouseOutItem}
      className='flex relative cursor-pointer gap-2 w-[290px] hover:bg-[#ffffff1a] rounded-md px-[8px] py-[6px] justify-start items-center'
    >
      {/* img */}
      <div
        onClick={() => handlePlaySong(song.encodeId)}
        className='relative w-auto h-auto rounded-md'
      >
        <img
          src={song.thumbnailM}
          alt=''
          className='w-[60px] rounded-md h-[60px] object-cover'
        />
        {hoverItem && (
          <div className=' flex justify-center items-center text-white absolute bg-[rgba(0,0,0,0.4)] top-0 left-0 right-0 bottom-0 '>
            <BsPlayFill fontSize={'28px'} />
          </div>
        )}
      </div>
      {/* song Info */}
      <div className=' flex flex-grow   p-1 text-white'>
        <div className='flex flex-col  '>
          <span className='font-semibold text-[15px]'>
            {truncateString(song.title, 20)}
          </span>
          <a href='' className='font-medium text-[12px] text-secondary'>
            {truncateString(song.artistsNames, 18)}
          </a>
          <span className='font-medium text-[12px] text-secondary'>
            {format(song.releaseDate * 1000)}
          </span>
        </div>
      </div>
      {hoverItem && (
        <div className='absolute right-2 top-6'>
          <div
            title='Khác'
            className='w-[35px] cursor-pointer hover:bg-[#ffffff1a] h-[35px] rounded-full flex items-center  justify-center'
          >
            <BiDotsHorizontalRounded
              color='white'
              title='Xem thêm'
              fontSize={'23px'}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SongItemComponent;
