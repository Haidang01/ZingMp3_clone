import React, { useEffect } from 'react';
import { TbArrowsSort } from 'react-icons/tb';
import ItemPlayList from './ItemPlayList';
import memo from './ItemPlayList';
import { ISong } from '../../interfaces/music';
import { convertSecondsToHoursAndMinutes } from '../../utils/time';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useAppDispatch } from '../../redux/hook';
import { setAlbum } from '../../redux/features/home/musicSlice';
type Props = {
  playlist: ISong[];
};

const Lists: React.FC<Props> = ({ playlist }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    playlist &&
      dispatch(
        setAlbum(
          playlist
            .filter(item => item.streamingStatus === 1)
            .map(item => item.encodeId),
        ),
      );
  }, [playlist]);

  return (
    <div className=''>
      <div className='flex p-[10px] h-[46px] items-center'>
        <div className='flex justify-start w-[50%] text-[#ffffff80] gap-3 h-[42px] items-center '>
          <button>
            <div className='text-[#ffffff80] border border-[#ffffff80]  inline-block rounded-sm'>
              <TbArrowsSort fontSize={'12px'} />
            </div>
          </button>
          <div className='font-[500] text-[13px]'>BÀI HÁT</div>
        </div>
        <div className='flex flex-auto justify-between items-center text-[13px] text-[#ffffff80]  font-medium '>
          <div>ALBUM</div>
          <div>THỜI GIAN</div>
        </div>
      </div>
      {/* item */}
      <Scrollbars className='w-full  ' style={{ height: 700 }}>
        {playlist?.map(item => (
          <ItemPlayList song={item} key={item.encodeId} />
        ))}
      </Scrollbars>
      <h3 className='text-[13px]  flex gap-2 mt-1 text-[#ffffff80]'>
        <span>{playlist?.length} bài bát</span>
        <span>•</span>
        <span>
          {playlist && convertSecondsToHoursAndMinutes(playlist, 'duration')}
        </span>
      </h3>
    </div>
  );
};

export default Lists;
