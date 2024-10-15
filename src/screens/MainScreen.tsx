import {ScrollView, StyleSheet, View} from 'react-native';
import Details from '../components/Details';
import Banner from '../components/Banner';
import Milestones from '../components/Milestones';
import Carousel from '../components/Carousel';

const MainScreen = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.root}>
        <Carousel />
        <Details />
        <Banner />
        <Milestones />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 20,
    padding: 20,
  },
});

export default MainScreen;
