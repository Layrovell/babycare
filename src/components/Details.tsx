import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const tileData = [
  {
    title: 'Weight',
    text: '15 lbs',
    unit: '3 oz',
    subtitle: '1:00 PM Dec 05 2023',
    backgroundColor: '#FFF5DC',
  },
  {
    title: 'Diaper',
    text: 'Pee Medium',
    subtitle: '2h 55m ago',
    backgroundColor: '#EFF1FF',
  },
  {
    title: 'Feeding',
    text: 'Formula',
    unit: '5oz',
    subtitle: '2h 30m ago',
    backgroundColor: '#FFEEE7',
  },
  {
    title: 'Sleep',
    text: '2h 20m',
    subtitle: '3h 35m ago',
    backgroundColor: '#F8EEFF',
  },
];

const Tile = ({data}: any) => (
  <View style={[styles.tile, {backgroundColor: data.backgroundColor}]}>
    <View>
      <Text style={styles.tileTitle}>{data.title}</Text>
      <Text style={styles.tileText}>{data.text}</Text>
      {data?.unit && <Text style={styles.tileText}>{data.unit}</Text>}
    </View>
    <Text style={styles.tileSubtitle}>{data.subtitle}</Text>
  </View>
);

const Details = () => {
  return (
    <View style={styles.grid}>
      {tileData.map(tile => (
        <Tile key={tile.title} data={tile} />
      ))}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  grid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    flexWrap: 'wrap'
  },
  tile: {
    padding: 18,
    height: 173,
    width: '47%',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  tileTitle: {
    fontSize: 12,
    marginBottom: 10,
    color: '#000',
  },
  tileText: {
    fontSize: 32,
    color: '#000',
    fontWeight: '300',
  },
  tileSubtitle: {
    fontSize: 10,
    color: '#000',
  },
});
