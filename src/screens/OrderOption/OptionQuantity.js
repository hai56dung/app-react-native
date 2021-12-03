import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const OptionQuantity = ({quantity, setObjCoffee}) => {
  const minus = React.useCallback(() => {
    if (quantity <= 1) return;
    setObjCoffee(prevValue => {
      const newValue = {
        ...prevValue,
        quantity: prevValue.quantity - 1,
      };
      return newValue;
    });
  }, [quantity]);

  const plus = React.useCallback(() => {
    setObjCoffee(prevValue => {
      const newValue = {
        ...prevValue,
        quantity: prevValue.quantity + 1,
      };
      return newValue;
    });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={minus}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text style={{width: 50, textAlign: 'center'}}>{quantity}</Text>
      <TouchableOpacity onPress={plus}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OptionQuantity;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D8D8D866',
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
});
