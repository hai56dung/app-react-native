import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ItemGift from './ItemGift';
const widthScreen = Dimensions.get('window').width;
const withImage = widthScreen - 50;
const height1 = (withImage / 325) * 122;
const height2 = (withImage / 325) * 108;
const Gift = () => {
  const renderCup = (value = 4, maxValue = 8) => {
    let view = [];
    for (let i = 1; i <= maxValue; i++) {
      let source =
        i <= value
          ? require('../../assets/icons/cupActive.png')
          : require('../../assets/icons/cupInActive.png');
      view.push(<Image source={source} key={i} />);
    }
    return view;
  };
  return (
    <View style={styles.content}>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({item, index}) => {
          return <ItemGift />;
        }}
        keyExtractor={(item, index) => index.toString()}
        style={{backgroundColor: '#FFF'}}
        ListHeaderComponent={() => {
          return (
            <>
              <View style={styles.contentCup}>
                <View style={styles.rowValueCup}>
                  <Text style={{color: '#D8D8D8'}}>Карта лояльности</Text>
                  <Text style={{color: '#D8D8D8'}}>4/8</Text>
                </View>
                <View style={styles.containerCup}>{renderCup(7, 8)}</View>
              </View>
              <View style={styles.containerPoint}>
                <View>
                  <Text style={styles.txtPoint}>Мои баллы:</Text>
                  <Text style={styles.txtValuePoint}>2750</Text>
                </View>
                <TouchableOpacity style={styles.btnPaymentByPoint}>
                  <Text style={{color: '#FFF'}}>Оплатить баллами</Text>
                </TouchableOpacity>
                <Image
                  source={require('../../assets/imgs/Group.png')}
                  style={styles.imgPoint}
                />
              </View>
              <Text style={{marginTop: 31, marginBottom: 8, fontSize: 14}}>
                История начисления баллов
              </Text>
            </>
          );
        }}
      />
    </View>
  );
};

export default Gift;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: '#FFF',
  },
  contentCup: {
    width: withImage,
    height: height1,
    backgroundColor: '#324A59',
    borderRadius: 12,
    marginBottom: 16,
  },
  rowValueCup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 9,
  },
  containerCup: {
    flex: 1,
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  containerPoint: {
    flexDirection: 'row',
    width: withImage,
    height: height2,
    backgroundColor: '#324A59',
    borderRadius: 12,
    paddingLeft: 30,
    paddingRight: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  txtPoint: {
    color: '#D8D8D8',
  },
  txtValuePoint: {
    color: '#D8D8D8',
    fontSize: 24,
  },
  btnPaymentByPoint: {
    borderRadius: 5,
    backgroundColor: 'rgba(162, 205, 233, 0.19)',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  imgPoint: {
    position: 'absolute',
    right: -8,
    bottom: -20,
  },
});
