import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { truncateString } from '../../utils/string';

type Props = {
  title?: string;
};

const TitleSection: React.FC<Props> = props => {
  return (
    <div className='flex  justify-between px-3 lg:px-1 mb-5 '>
      <h3 className='text-[21px] text-white font-bold'>{props.title}</h3>
      <a
        className='cursor-pointer hover:text-[#c273ed] flex justify-center items-center text-secondary text-[14px] font-medium'
        href=''
      >
        <span>TẤT CẢ</span>
        <MdNavigateNext fontSize={30} color='text-secondary' />
      </a>
    </div>
  );
};

export default TitleSection;
