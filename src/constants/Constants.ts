import { Dimensions, Platform } from 'react-native';

export const IS_IOS: boolean = Platform.OS === 'ios';
export const IS_AOS: boolean = Platform.OS === 'android';

const isIphoneX = () => {
  const { height } = Dimensions.get('window');
  return IS_IOS && (height === 780 || height === 812 || height === 844 || height === 896 || height === 926);
};

export const SCREEN_WIDTH: number = Math.min(Dimensions.get('window').width, Dimensions.get('window').height);
export const SCREEN_HEIGHT: number = Math.max(Dimensions.get('window').width, Dimensions.get('window').height);
export const PADDING_TOP: number = IS_AOS ? 0 : (isIphoneX() ? 34 : 20);
export const PADDING_BOTTOM: number = IS_AOS ? 0 : (isIphoneX() ? 25 : 0);
