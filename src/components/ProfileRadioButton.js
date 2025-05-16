import React from 'react';
import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';

import {COLORS, FONTS, SIZES} from '../constants';

const ProfileRadioButton = ({icon, label, isSelected, onPress}) => {
  const radioAnimated = React.useRef(new Animated.Value(0)).current;

  const circlecolorAnimated = radioAnimated.interpolate({
    inputRange: [0, 17],
    outputRange: [COLORS.gray40, COLORS.primary],
  });

  const linecolorAnimated = radioAnimated.interpolate({
    inputRange: [0, 17],
    outputRange: [COLORS.additionalColor4, COLORS.additionalColor13],
  });

  React.useEffect(() => {
    if (isSelected) {
      Animated.timing(radioAnimated, {
        toValue: 17,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(radioAnimated, {
        toValue: 17,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isSelected]);

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        // marginRight: 20,
      }}>
      {/* Icon */}
      <View
        style={{
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          margin: 10,
          backgroundColor: COLORS.additionalColor11,
        }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.primary,
          }}
        />
      </View>
      {/* Label */}
      <View
        style={{
          flex: 1,
          marginLeft: SIZES.radius,
        }}>
        <Text
          style={{
            ...FONTS.h3,
          }}>
          {label}
        </Text>
      </View>
      {/* Radio Button */}
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={onPress}>
        <Animated.View
          style={{
            width: '100%',
            height: 5,
            borderRadius: 3,
            backgroundColor: linecolorAnimated,
          }}
        />

        <Animated.View
          style={{
            position: 'absolute',
            left: radioAnimated,
            width: 25,
            height: 25,
            borderRadius: 15,
            borderWidth: 5,
            borderColor: circlecolorAnimated,
            backgroundColor: COLORS.white,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileRadioButton;
