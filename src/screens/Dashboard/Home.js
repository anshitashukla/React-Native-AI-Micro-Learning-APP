import React from 'react';
import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler'; // works better with Horizontal flatlist

import {COLORS, FONTS, SIZES, icons, images, dummyData} from '../../constants';

import {IconButton, TextButton} from '../../components';

const Home = () => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 50,
          marginBottom: 10,
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        {/* Greetings*/}

        <View
          style={{
            flex: 1,
          }}>
          <Text style={{...FONTS.h2}}>Hello!</Text>
          <Text
            style={{
              color: COLORS.gray50,
              ...FONTS.body3,
            }}>
            Anshita Shukla
          </Text>
        </View>

        {/* Notification */}

        <IconButton
          icon={icons.notification}
          iconStyle={{
            tintColor: COLORS.black,
          }}></IconButton>
      </View>
    );
  }

  function renderStartLearning() {
    return (
      <ImageBackground
        source={images.featured_bg_image}
        style={{
          alignItems: 'flex-start',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: 15,
        }}
        imageStyle={{
          borderRadius: SIZES.radius,
        }}>
        {/* Info */}
        <View>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body2,
            }}>
            HOW TO
          </Text>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h2,
            }}>
            Integrate AI into your React Native application
          </Text>
          <Text
            style={{
              marginTop: SIZES.radius,
              color: COLORS.white,
              ...FONTS.body4,
            }}>
            By Anshita Shukla
          </Text>
        </View>

        {/* Image */}

        <Image
          source={images.start_learning}
          style={{
            width: '80%',
            height: 150,
            marginTop: SIZES.padding,
            alignSelf: 'center',
          }}></Image>

        {/* Button */}

        <TextButton
          label="Start Learning"
          contentContainerStyle={{
            height: 40,
            paddingHorizontal: SIZES.padding,
            borderRadius: 20,
            backgroundColor: COLORS.white,
          }}
          labelStyle={{
            color: COLORS.black,
          }}></TextButton>
      </ImageBackground>
    );
  }

  // function renderCourses() {
  //   return (
  //     <FlatList
  //       horizontal
  //       data={dummyData.courses_list_1}
  //       listKey="Courses"
  //       keyExtractor={(item) => `Courses-${item.id}`}
  //       showsHorizontalScrollIndicator={false}
  //       contentContainerStyle={{
  //         marginTop: SIZES.padding,
  //       }}
  //       // renderItem={({})}
  //     ></FlatList>
  //   );
  // }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {/* Header */}
      {renderHeader()}

      {/* Content */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        showsVerticalScrollIndicator={false}>
        {/* Start Learning section */}
        {renderStartLearning()}

        {/* Courses */}
        {/* {renderCourses()} */}
      </ScrollView>
    </View>
  );
};

export default Home;
