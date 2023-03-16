import { BsMusicNoteBeamed, BsFillPlayFill } from 'react-icons/bs';
import { setCurSongId, setPlayed } from '../../redux/features/home/musicSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { truncateString } from '../../utils/string';
import { convertTimeSong } from '../../utils/time';
import { TbMicrophone2 } from 'react-icons/tb';
import { RiHeart3Line } from 'react-icons/ri';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { memo, useRef, useState } from 'react';
import { setModalVip } from '../../redux/features/home/homeSlice';
import { RootState } from '../../redux/store';
import useEffect from 'react';
import AudioSpinner from '../Spinners/AudioSpinner';

const ItemPlayList: React.FC<any> = ({ song }) => {
  const dispatch = useAppDispatch();
  const [showHoverIcon, setShowHoverIcon] = useState<boolean>(false);
  const { currentSongId, played } = useAppSelector(
    (state: RootState) => state.rootReducer.music,
  );

  const handleClickBanner = (songId: string) => {
    if (song.streamingStatus === 2) {
      dispatch(setModalVip());
    } else {
      song.encodeId &&
        dispatch(setCurSongId(songId)) &&
        dispatch(setPlayed(true));
    }
  };

  const handleMouseOver = () => {
    setShowHoverIcon(true);
  };

  const handleMouseOut = () => {
    setShowHoverIcon(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ borderTop: '1px solid #ffffff0d' }}
      className={` ${
        currentSongId === song?.encodeId ? 'bg-[#382e46]' : ''
      } p-[10px] h-[60px]   flex hover:bg-[#30283a] rounded-md   items-center`}
    >
      {/* left */}
      <div className='w-[50%] gap-3 flex items-center '>
        <div className='cursor-pointer'>
          <BsMusicNoteBeamed className='w-[14px]  text-[#ffffff80] h-[14px]' />
        </div>
        <div
          className='relative rounded-md cursor-pointer'
          onClick={() => handleClickBanner(song?.encodeId)}
        >
          <img
            src={song?.thumbnailM}
            className='w-[40px] cursor-pointer h-[40px] rounded-md object-cover'
            alt=''
          />
          {showHoverIcon && (
            <div
              style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
              className='absolute  w-full h-full top-0 left-0  right-0 bottom-0 flex justify-center items-center '
            >
              <BsFillPlayFill fontSize={'20px'} />
            </div>
          )}
          {currentSongId === song?.encodeId && played && (
            <div
              style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
              className='absolute rounded-md  w-full h-full top-0 left-0  right-0 bottom-0 flex justify-center items-center '
            >
              <AudioSpinner width={20} height={20} color='#ccc' />
            </div>
          )}
        </div>
        <div className=''>
          <span className='flex items-center justify-between gap-2'>
            <span className='flex text-[#ffffff80]  text-[10px] lg:text-[14px] font-light lg:font-[500]'>
              {song?.title && truncateString(song?.title, 23)}
            </span>
            {song.streamingStatus === 2 ? (
              <span>
                <img
                  src={
                    'https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.2/static/media/vip-label.3dd6ac7e.svg'
                  }
                  className='opacity-50'
                />
              </span>
            ) : (
              ''
            )}
          </span>
          <h3 className=' text-[8px] lg:text-[10px] hover:underline cursor-pointer hover:text-[#c273ed] text-[#ffffff80] '>
            {song?.artistsNames && truncateString(song?.artistsNames, 23)}
          </h3>
        </div>
      </div>
      {/* right */}
      <div className='flex justify-between items-center flex-auto'>
        <div>
          <span className=' text-[8px] lg:text-[13px] hover:underline cursor-pointer hover:text-[#c273ed] text-[#ffffff80]'>
            {song?.album?.title && truncateString(song?.album?.title, 23)}
          </span>
        </div>
        <div className=''>
          {!showHoverIcon ? (
            <div className='time '>
              <span className=' text-[10px] lg:text-[13px]  text-[#ffffff80]'>
                {song.duration && convertTimeSong(song.duration)}
              </span>
            </div>
          ) : (
            <div className='icons'>
              <span className='text-[10px] lg:text-[13px] flex gap-1 lg:gap-3 text-[#fff]'>
                <div
                  title='Phát cùng lời bài hát '
                  className=' w-[30px] cursor-pointer hover:bg-[#2d2536] h-[30px] rounded-full flex items-center bg-[#3a3344] justify-center'
                >
                  <TbMicrophone2 title='Xem thêm' fontSize={'18px'} />
                </div>
                <div
                  title='Thêm vào thư viện'
                  // onClick={() => setLike(prev => !prev)}
                  className='w-[30px] hover:bg-[#2d2536]  cursor-pointer h-[30px] rounded-full flex items-center bg-[#3a3344] justify-center'
                >
                  <RiHeart3Line
                    // color={like ? '#c273ed' : 'white'}
                    title='Thêm vào thư viện'
                    fontSize={'18px'}
                  />
                </div>
                <div
                  title='Khác'
                  className='w-[30px] cursor-pointer hover:bg-[#2d2536] h-[30px] rounded-full flex items-center bg-[#3a3344] justify-center'
                >
                  <BiDotsHorizontalRounded title='Xem thêm' fontSize={'18px'} />
                </div>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default memo(ItemPlayList);
