import React from 'react';
import { IWeekChartItem } from '../../../interfaces/sections';

type Props = {
  chart: IWeekChartItem[];
};

const WeekChart = ({ chart }: Props) => {
  return (
    <div className='flex px-3 xl:px-0 items-center justify-center gap-6'>
      {chart.map(item => (
        <div key={item.banner} className=' rounded-md overflow-hidden'>
          <img
            src={item.cover}
            className='transition hover:scale-110 duration-500 ease-in-out rounded-md cursor-pointer'
            alt=''
          />
        </div>
      ))}
    </div>
  );
};

export default WeekChart;
