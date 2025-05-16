import {React} from 'react';
import {View} from 'react-native';
import {FONTS, COLORS} from '../constants';

const ProgressBar = ({containerStyle, progress}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 13,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        ...containerStyle,
      }}>
      <View
        style={{
          position: 'absolute',
          left: 0,
          height: '100%',
          width: progress,
          borderRadius: 10,
          backgroundColor: COLORS.primary2,
        }}
      />
    </View>
  );
};

export default ProgressBar;
