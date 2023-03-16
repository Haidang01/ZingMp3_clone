import React from 'react';
import { RotatingLines, Triangle } from 'react-loader-spinner';

type Props = {
  width: number;
  height: number;
  color: string;
};

<RotatingLines
  strokeColor='grey'
  strokeWidth='5'
  animationDuration='0.75'
  width='96'
  visible={true}
/>;
const LoadingImg = ({ color, height, width }: Props) => {
  return (
    <RotatingLines
      width={`'${width}'`}
      strokeColor={color}
      strokeWidth='5'
      animationDuration='0.75'
      visible={true}
    />
  );
};

export default LoadingImg;
