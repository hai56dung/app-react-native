import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const ItemAdditive = ({
  item,
  navigation,
  isSelect,
  index,
  setArrayIndexSelect,
  arrayIndexSelect,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        let indexInArray = arrayIndexSelect.findIndex(e => e === index);
        if (indexInArray === -1) {
          //neu k tim thay thi them vao arrayIndex
          setArrayIndexSelect([...arrayIndexSelect, index]);
        } else {
          arrayIndexSelect.splice(indexInArray, 1);
          const _arrayIndexSelect = [...arrayIndexSelect];
          setArrayIndexSelect(_arrayIndexSelect);
        }
      }}>
      <View style={styles.containerLeft}>
        <Text
          style={{
            color: isSelect ? '#0A84FF' : '#000000',
            fontSize: 17,
          }}>
          {item.title}
        </Text>
      </View>
      {!!isSelect && (
        <Image source={require('../../assets/icons/checkmark.png')} />
      )}
    </TouchableOpacity>
  );
};

export default ItemAdditive;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 11,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#C6C6C8',
  },
  containerLeft: {
    flex: 1,
    justifyContent: 'center',
  },
});
