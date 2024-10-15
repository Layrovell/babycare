import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import routes from './routes';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useEffect} from 'react';
import App from '../../App';
import Header from '../components/Header';
import MainScreen from '../screens/MainScreen';

import HomeIcon from '../assets/home.svg';
import MainIcon from '../assets/main.svg';
import MoreIcon from '../assets/more.svg';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        header(props) {
          return <Header />;
        },
        tabBarStyle: {
          backgroundColor: '#FEF9F5',
          height: 80,
        },
      }}>
      {navigationItems.map(
        ({activeIcon: ActiveIcon, initialRoute, label, route}) => {
          return (
            <Tab.Screen
              key={route}
              name={route}
              component={MainScreen}
              initialParams={{screen: initialRoute}}
              options={{
                tabBarButton: props => {
                  return (
                    <TouchableOpacity
                      style={styles.container}
                      // onPress={onPress}
                      activeOpacity={0.4}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        {route === 'Main' ? (
                          <View
                            style={{
                              backgroundColor: '#FEF9F5',
                              padding: 8,
                              borderRadius: 50,
                            }}>
                            <View
                              style={{
                                padding: 6,
                                borderRadius: 50,
                                width: 92,
                                height: 92,
                                borderColor: '#000',
                                borderWidth: 1,
                                marginBottom: 40,
                              }}>
                              <View
                                style={{
                                  backgroundColor: '#BECFDA',
                                  width: '100%',
                                  height: '100%',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  borderRadius: 50,
                                }}>
                                <Text
                                  style={{
                                    fontSize: 50,
                                    color: '#000',
                                    fontFamily: 'Ribeye-Regular',
                                  }}>
                                  W
                                </Text>
                              </View>
                            </View>
                          </View>
                        ) : (
                          <ActiveIcon />
                        )}
                        {label && (
                          <Text
                            style={{fontSize: 10, color: '#000', marginTop: 4}}>
                            {label}
                          </Text>
                        )}
                      </View>
                    </TouchableOpacity>
                  );
                },
              }}
            />
          );
        },
      )}
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 60,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
  },
});

const navigationItems = [
  {
    route: 'Home',
    initialRoute: 'Home',
    activeIcon: HomeIcon,
    label: 'Home',
  },
  {
    route: 'Main',
    initialRoute: 'Main',
    activeIcon: MainIcon,
  },
  {
    route: 'More',
    initialRoute: 'More',
    activeIcon: MoreIcon,
    label: 'More',
  },
];
