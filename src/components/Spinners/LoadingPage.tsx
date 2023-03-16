import React from 'react';
import { Triangle } from 'react-loader-spinner';

type Props = {
  width: number;
  height: number;
  color: string;
};

const LoadingPage = ({ color, height, width }: Props) => {
  return (
    <Triangle
      height={height}
      width={width}
      color={color}
      ariaLabel='triangle-loading'
      wrapperStyle={{}}
      visible={true}
    />
  );
};

export default LoadingPage;
