import {useRoute} from '@react-navigation/core';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import Button from './Button';
import OptionAttribute from './OptionAttribute';
import OptionQuantity from './OptionQuantity';
import OptionType from './OptionType';
import OptionVolume from './OptionVolume';
const widthScreen = Dimensions.get('window').width;
const withImage = widthScreen - 50;
const heightImage = (withImage / 325) * 146;

export const OrderOptionContext = React.createContext({
  objCoffee: {},
  setObjCoffee: () => {},
  initValue: {},
});

const OrderOption = () => {
  const route = useRoute();
  const item = route.params.item;
  const initValue = React.useMemo(() => {
    return {
      types: [
        {
          value: 0,
          name: 'Один',
        },
        {
          value: 1,
          name: 'Два',
        },
      ],
      attributes: [
        {
          value: 0,
          uri: require('../../assets/imgs/hot.png'),
        },
        {
          value: 1,
          uri: require('../../assets/imgs/cold.png'),
        },
      ],
      volumes: [
        {
          value: 0,
          uri: require('../../assets/imgs/250.png'),
          name: '250',
        },
        {
          value: 1,
          uri: require('../../assets/imgs/350.png'),
          name: '350',
        },
        {
          value: 2,
          uri: require('../../assets/imgs/450.png'),
          name: '450',
        },
      ],
    };
  }, []);

  const [objCoffee, setObjCoffee] = React.useState({
    name: item.name,
    uri: item.uri,
    quantity: 1,
    type: 0,
    attribute: 1,
    volume: 1,
    enableTime: false,
    timeOrder: 1637247528000,
  });
  const date = new Date(objCoffee.timeOrder);
  return (
    <OrderOptionContext.Provider
      value={{
        objCoffee,
        setObjCoffee,
        initValue,
      }}>
      <ScrollView
        style={{backgroundColor: '#FFF'}}
        contentContainerStyle={{paddingBottom: 32}}>
        <View style={styles.container}>
          <View style={styles.containerImg}>
            <Image source={objCoffee.uri} />
          </View>
          <View style={styles.rowItem}>
            <Text>{objCoffee.name}</Text>
            <OptionQuantity
              quantity={objCoffee.quantity}
              setObjCoffee={setObjCoffee}
            />
          </View>
          <View style={styles.line} />
          <View style={styles.rowItem}>
            <Text>Ристретто</Text>
            <OptionType />
          </View>
          <View style={styles.line} />
          <View style={styles.rowItem}>
            <Text>На месте / навынос</Text>
            <OptionAttribute />
          </View>
          <View style={styles.line} />
          <View style={styles.rowItem}>
            <Text>Объем, мл</Text>
            <OptionVolume
              volume={objCoffee.volume}
              setObjCoffee={setObjCoffee}
              initVolumes={initValue.volumes}
            />
          </View>
          <View style={styles.line} />
          <View style={styles.rowItem}>
            <Text>Приготовить к определенному{'\n'}времени сегодня?</Text>
            <Switch
              value={objCoffee.enableTime}
              onValueChange={newEnableTime => {
                setObjCoffee(prevValue => {
                  const newValue = {
                    ...prevValue,
                    enableTime: newEnableTime,
                  };
                  return newValue;
                });
              }}
            />
          </View>
          <View style={[styles.rowItem, {flexDirection: 'row-reverse'}]}>
            <View style={styles.contentTime}>
              <Text style={styles.txtTime}>
                {date.getHours()} : {date.getMinutes()}
              </Text>
            </View>
          </View>
          <Button />
          <View style={styles.rowItem}>
            <Text style={styles.txt16}>Итоговая сумма</Text>
            <Text style={styles.txtPrice}>BYN 3.00</Text>
          </View>

          <TouchableOpacity style={styles.btnNext}>
            <Text style={{color: '#FFF'}}>Далее</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </OrderOptionContext.Provider>
  );
};

export default OrderOption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: '#FFFFFF',
  },
  containerImg: {
    width: withImage,
    height: heightImage,
    borderRadius: 12,
    backgroundColor: '#F7F8FB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowItem: {
    flexDirection: 'row',
    paddingVertical: 21,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {
    height: 1,
    backgroundColor: '#F4F5F7',
  },
  contentTime: {
    width: 86,
    height: 36,
    backgroundColor: '#7676801F',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTime: {
    fontSize: 22,
    color: '#000000',
  },
  txt16: {
    fontSize: 16,
  },
  txtPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnNext: {
    backgroundColor: '#324A59',
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
    borderRadius: 30,
  },
});
