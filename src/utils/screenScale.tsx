import {Dimensions} from 'react-native';

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

const {width, height} = Dimensions.get('screen');

export const widthlScale = (size: number) =>
  (width / guidelineBaseWidth) * size;
export const heightScale = (size: number) =>
  (height / guidelineBaseHeight) * size;
