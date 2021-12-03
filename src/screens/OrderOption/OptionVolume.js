import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const ItemOptionVolume = ({value, name, uri, volume, setObjCoffee}) => {
  const _onPress = React.useCallback(() => {
    setObjCoffee(prevValue => {
      const newValue = {
        ...prevValue,
        volume: value,
      };
      return newValue;
    });
  }, [value]);
  return (
    <TouchableOpacity style={styles.btn} onPress={_onPress}>
      <Text style={styles.txtVolume}>{name}</Text>
      <Image
        source={uri}
        style={{
          tintColor: value === volume ? '#000000' : '#D8D8D8',
        }}
      />
    </TouchableOpacity>
  );
};

const OptionVolume = ({volume, setObjCoffee, initVolumes}) => {
  return (
    <View style={styles.container}>
      {initVolumes.map(item => {
        return (
          <ItemOptionVolume
            volume={volume}
            setObjCoffee={setObjCoffee}
            name={item.name}
            uri={item.uri}
            value={item.value}
            key={item.value}
          />
        );
      })}
    </View>
  );
};

export default OptionVolume;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  btn: {
    flexDirection: 'column-reverse',
    paddingHorizontal: 4,
    marginHorizontal: 6,
  },
  txtVolume: {
    marginTop: 8,
    fontSize: 10,
  },
});
