import React from 'react';
import { Audio } from 'react-loader-spinner';

type Props = {
  height: number;
  width: number;
  color: string;
};

const AudioSpinner = ({ color, height, width }: Props) => {
  return (
    <Audio
      height={height}
      width={width}
      color={color}
      ariaLabel='audio-loading'
      wrapperStyle={{}}
      wrapperClass='wrapper-class'
      visible={true}
    />
  );
};

export default AudioSpinner;
