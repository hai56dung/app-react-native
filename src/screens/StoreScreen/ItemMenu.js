import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
const widthScreen = Dimensions.get('window').width;
const spacing = 18;
const widthItem = (widthScreen - spacing * 2) / 2;
const heightItem = (widthItem / 154) * 164;
const ItemMenu = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.content}
        onPress={() => {
          navigation.navigate('OrderOption', {
            item: item,
          });
        }}>
        <Image source={item.uri} style={{marginBottom: 12}} />
        <Text style={styles.txtName}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemMenu;

const styles = StyleSheet.create({
  container: {
    height: heightItem,
    borderRadius: 20,
    width: widthItem,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  content: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtName: {
    color: '#324A59',
    fontSize: 14,
  },
});
