import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Page = ({title, description, source}) => {
  return (
    <View style={styles.page}>
      <View style={styles.containerImg}>
        <Image source={source} />
      </View>
      <View style={styles.contentPage}>
        <Text style={styles.txtTitle}>{title}</Text>
        <Text style={styles.txtDescription}>{description}</Text>
      </View>
    </View>
  );
};

const Wellcome = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}>
        <Page
          title={`Почувствуй себя\nбариста!`}
          description={'Волшебный кофе под заказ.'}
          source={require('../../assets/imgs/logoSplashScreen.png')}
        />
        <Page
          title={`Почувствуй себя\nбариста2!`}
          description={'Волшебный кофе под заказ2.'}
          source={require('../../assets/imgs/logoSplashScreen.png')}
        />
        <Page
          title={`Почувствуй себя\nбариста3!`}
          description={'Волшебный кофе под заказ3.'}
          source={require('../../assets/imgs/logoSplashScreen.png')}
        />
      </ScrollView>
      <TouchableOpacity
        style={styles.btnNext}
        onPress={() => {
          navigation.navigate('Authorization');
        }}>
        <Image source={require('../../assets/icons/icArrowRight.png')} />
      </TouchableOpacity>
      <View style={styles.containerDot}>
        <View style={styles.activeDot} />
        <View style={styles.inactiveDot} />
        <View style={styles.inactiveDot} />
      </View>
    </View>
  );
};

export default Wellcome;

const styles = StyleSheet.create({
  page: {
    width: width,
    height: height,
  },
  containerImg: {
    width: width,
    height: width,
    backgroundColor: '#324A59',
    alignItems: 'center',
    overflow: 'hidden',
  },
  txtTitle: {
    fontSize: 28,
    color: '#181D2D',
    alignSelf: 'center',
    textAlign: 'center',
  },
  txtDescription: {
    fontSize: 18,
    color: '#AAAAAA',
    alignSelf: 'center',
    textAlign: 'center',
  },
  btnNext: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#324A59',
    position: 'absolute',
    right: 16,
    bottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#324A59',
    opacity: 0.2,
    marginHorizontal: 2,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#324A59',
    marginHorizontal: 2,
  },
  containerDot: {
    height: 10,
    position: 'absolute',
    top: width + 8,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  contentPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 96,
  },
});
