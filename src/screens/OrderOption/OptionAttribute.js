import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {OrderOptionContext} from '.';

const ItemAttribute = ({uri, value}) => {
  const {setObjCoffee, objCoffee} = React.useContext(OrderOptionContext);
  const _onPress = React.useCallback(() => {
    setObjCoffee(prevValue => {
      const newValue = {
        ...prevValue,
        attribute: value,
      };
      return newValue;
    });
  }, [value]);
  return (
    <TouchableOpacity style={styles.btn} onPress={_onPress}>
      <Image
        source={uri}
        style={{
          tintColor: value === objCoffee.attribute ? '#000000' : '#D8D8D8',
        }}
      />
    </TouchableOpacity>
  );
};

const OptionAttribute = () => {
  const orderContext = React.useContext(OrderOptionContext);
  return (
    <View style={styles.container}>
      {orderContext?.initValue?.attributes?.map(item => {
        return (
          <ItemAttribute value={item.value} uri={item.uri} key={item.value} />
        );
      })}
    </View>
  );
};

export default OptionAttribute;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  btn: {
    height: 34,
    width: 34,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
});
