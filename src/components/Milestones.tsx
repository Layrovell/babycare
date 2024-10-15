import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import image from '../assets/milestones.jpg';
import NextIcon from '../assets/next.svg';

const Milestones = () => {
  return (
    <View style={styles.root}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />

      <View style={styles.bottomSection}>
        <Text style={styles.title}>Milestones</Text>
        <View style={styles.navigation}>
          <Text style={styles.date}>Month 12</Text>
          <NextIcon width={32} height={32} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 16,
    borderColor: '#000',
    borderWidth: 1,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 148,
  },
  bottomSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  navigation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    color: '#000',
    fontWeight: '400',
    marginBottom: 8,
  },
  date: {
    fontSize: 32,
    fontWeight: '300',
    color: '#000',
  },
});

export default Milestones;
