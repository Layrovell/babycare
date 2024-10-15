import {Dimensions, ImageBackground, Text, View} from 'react-native';
import ReanimatedCarousel from 'react-native-reanimated-carousel';
import MaleIcon from '../assets/male.svg';
import maleImage from '../assets/carousel-img-1.jpg';
// carousel-img-1.jpg

const width = Dimensions.get('window').width - 40;

const data = [
  {title: 'Christian Bowen', text: '1y 2m', icon: MaleIcon, image: maleImage},
  {title: 'Christian Bowen', text: '1y 2m', icon: MaleIcon, image: maleImage},
];

const Carousel = () => {
  return (
    <View style={{flex: 1}}>
      <ReanimatedCarousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({item}) => (
          <ImageBackground
            source={item.image}
            resizeMode="cover"
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              borderRadius: 24,
              overflow: 'hidden',
            }}>
            <View
              style={{
                backgroundColor: '#F3F7FAB2',
                paddingHorizontal: 20,
                paddingVertical: 10,
                margin: 20,
                borderRadius: 24,
                width: 165,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 15,
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 14, fontWeight: '700'}}>
                  {item.title}
                </Text>
                <item.icon />
              </View>
              <Text>{item.text}</Text>
            </View>
            <Text style={{textAlign: 'center', fontSize: 30}}>ddd</Text>
          </ImageBackground>
        )}
      />
    </View>
  );
};

export default Carousel;
