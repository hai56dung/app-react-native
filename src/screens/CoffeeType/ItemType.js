import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ItemType = ({item, navigation, isSelect, setIndexSelect, index}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('Additives');
        setIndexSelect(index);
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
    </TouchableOpacity>
  );
};

export default ItemType;

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
