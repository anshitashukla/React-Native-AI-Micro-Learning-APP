import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {
  IconButton,
  TextButton,
  LineDivider,
  ProgressBar,
  ProfileValue,
  ProfileRadioButton,
} from '../../components';

import {COLORS, FONTS, SIZES, icons, images} from '../../constants';

const Profile = () => {
  const [newCourseNotification, setNewCourseNotification] =
    React.useState(false);
  const [studyReminder, setStudyReminder] = React.useState(false);

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 50,
          paddingHorizontal: SIZES.padding,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            ...FONTS.h1,
          }}>
          Profile
        </Text>
        <IconButton
          icon={icons.sun}
          iconStyle={{
            tintColor: COLORS.black,
          }}></IconButton>
      </View>
    );
  }

  function renderProfileCard() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 20,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}>
        {/* Profile Image */}
        <TouchableOpacity
          style={{
            width: 80,
            height: 80,
          }}>
          <Image
            source={images.student_3}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 40,
              borderWidth: 1,
              borderColor: COLORS.white,
            }}
          />
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                marginBottom: -15,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                backgroundColor: COLORS.primary,
              }}>
              <Image
                source={icons.camera}
                resizeMode="contain"
                style={{
                  width: 17,
                  height: 17,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
        {/* Details */}
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h2,
            }}>
            Anshita Shukla
          </Text>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body4,
            }}>
            Full Stack Developer
          </Text>
          {/* Progress */}
          <ProgressBar
            progress="58%"
            containerStyle={{
              marginTop: SIZES.radius,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
              style={{
                flex: 1,
                color: COLORS.white,
                ...FONTS.body4,
              }}>
              Overall Progress
            </Text>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body4,
              }}>
              58%
            </Text>
          </View>
          {/* Member */}
          <TextButton
            label="+ Become Member"
            contentContainerStyle={{
              height: 35,
              marginTop: SIZES.padding,
              paddingHorizontal: SIZES.radius,
              borderRadius: 20,
              backgroundColor: COLORS.white,
            }}
            labelStyle={{
              color: COLORS.primary,
            }}></TextButton>
        </View>
      </View>
    );
  }

  function renderProfileSection1() {
    return (
      <View style={styles.profileSectionContainer}>
        <ProfileValue
          icon={icons.profile}
          label="Name"
          value="anshitashukla@gmail.com"
        />
        <LineDivider lineStyle={{width: '90%', alignSelf: 'center'}} />
        <ProfileValue icon={icons.email} label="Email" value="Anshita Shukla" />
        <LineDivider lineStyle={{width: '90%', alignSelf: 'center'}} />
        <ProfileValue
          icon={icons.password}
          label="Password"
          value="Updated 2 weeks ago"
        />
        <LineDivider lineStyle={{width: '90%', alignSelf: 'center'}} />

        <ProfileValue
          icon={icons.call}
          label="Contact Number"
          value="+1234567890"
        />
      </View>
    );
  }

  function renderProfileSection2() {
    return (
      <View style={styles.profileSectionContainer}>
        <ProfileValue icon={icons.star_1} value="Pages" />

        <LineDivider lineStyle={{width: '90%', alignSelf: 'center'}} />
        <ProfileRadioButton
          icon={icons.new_icon}
          label="New Course Notifications"
          isSelected={newCourseNotification}
          onPress={() => {
            setNewCourseNotification(!newCourseNotification);
          }}
        />

        <LineDivider lineStyle={{width: '90%', alignSelf: 'center'}} />
        <ProfileRadioButton
          icon={icons.reminder}
          label="Study Reminder"
          isSelected={studyReminder}
          onPress={() => {
            setStudyReminder(!studyReminder);
          }}
        />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {/* Header */}
      {renderHeader()}

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
          paddingBottom: 150,
        }}>
        {/* Profile Grid */}
        {renderProfileCard()}

        {/* Profile Section 1 */}
        {renderProfileSection1()}

        {/* Profile Section 2 */}
        {renderProfileSection2()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  profileSectionContainer: {
    marginTop: SIZES.padding,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    borderColor: COLORS.gray20,
  },
});

export default Profile;
