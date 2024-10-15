import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Notifications from '../assets/notifications.svg';
import profileImage from '../assets/profile.jpg';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Woddle</Text>

      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.cartButton} onPress={() => {}}>
          <Notifications width={30} height={26} />
        </TouchableOpacity>

        <ImageBackground
          source={profileImage}
          resizeMode="cover"
          style={styles.avatar}
          imageStyle={{borderRadius: 20}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 40,
    fontWeight: '400',
    color: '#000',
    fontFamily: 'Ribeye-Regular',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartButton: {
    marginRight: 15,
  },
  cartText: {
    fontSize: 16,
    color: '#007AFF',
  },
  avatar: {
    width: 40,
    height: 40,
  },
});

export default Header;
