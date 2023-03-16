import { IconType } from 'react-icons';

import icons from './icon';
import { IoIosRadio } from 'react-icons/io';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { BiCategoryAlt } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
const { MdLibraryMusic, BsDisc, FiDisc, MdOutlineFeed } = icons;

interface ISideBar {
  text: string;
  path: string;
  icon: IconType;
  img?: string;
}

export const SideBarMenu: ISideBar[] = [
  {
    text: 'Cá Nhân',
    path: '/mymusic',
    icon: MdLibraryMusic,
  },
  {
    text: 'Khám Phá',
    path: '/',
    icon: FiDisc,
  },
  {
    text: '#zingchart',
    path: '/zing',
    icon: BsDisc,
  },
  {
    text: 'Radio',
    path: '/follow',
    icon: IoIosRadio,
    img: 'https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg',
  },
  {
    text: 'Theo Dõi',
    path: '/follows',
    icon: MdOutlineFeed,
  },
];
export const SideBarMenu2: ISideBar[] = [
  {
    text: 'Nhạc Mới',
    path: '/moi-phat-hanh',
    icon: BsMusicNoteBeamed,
  },
  {
    text: 'Thể Loại',
    path: '/hub',
    icon: BiCategoryAlt,
  },
  {
    text: 'Top 100',
    path: '/top100',
    icon: AiOutlineStar,
  },
];
