import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Button from './Button';
import image from '../assets/banner.jpg';

const Banner = () => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.root}>
      <Text style={styles.title}>Save Big with Bundles!</Text>

      <View style={styles.content}>
        <Text>HONEST</Text>
        <Button title="Shop now" onPress={() => {}} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 16,
    overflow: 'hidden',
    padding: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
  },
  title: {
    fontSize: 16,
    color: '#000',
    fontWeight: '900',
    marginLeft: 30,
    fontFamily: 'Ribeye-Regular',
  },
  text: {},
});

export default Banner;
