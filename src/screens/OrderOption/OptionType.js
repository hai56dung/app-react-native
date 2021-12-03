import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {OrderOptionContext} from '.';

// useCallback
// useMemo
// memo
// useState
// useRef
const ItemType = ({value, name}) => {
  const {setObjCoffee, objCoffee} = React.useContext(OrderOptionContext);
  const _onPress = React.useCallback(() => {
    setObjCoffee(prevValue => {
      const newValue = {
        ...prevValue,
        type: value,
      };
      return newValue;
    });
  }, [value]);
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          borderColor: objCoffee.type === value ? '#324A59' : '#D8D8D866',
        },
      ]}
      onPress={_onPress}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const OptionType = React.memo(({initValue}) => {
  console.log('render option type');
  return (
    <View style={styles.container}>
      {initValue.types.map(item => {
        return (
          <ItemType name={item.name} value={item.value} key={item.value} />
        );
      })}
    </View>
  );
});

const WrapOptionType = () => {
  const {initValue} = React.useContext(OrderOptionContext);
  return <OptionType initValue={initValue} />;
};

export default WrapOptionType;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  btn: {
    borderWidth: 1,
    borderColor: '#D8D8D866',
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 16,
    marginHorizontal: 4,
  },
});
