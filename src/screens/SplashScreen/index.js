import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={require('../../assets/imgs/bgSplashScreen.png')}>
        <View style={styles.shadow} />
        <Image
          source={require('../../assets/imgs/logoSplashScreen.png')}
          style={styles.imgLogo}
        />
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    width: width,
    height: height,
  },
  shadow: {
    width: width,
    height: height,
    backgroundColor: 'rgba(29,35,53,.37)',
    position: 'absolute',
  },
  imgLogo: {
    alignSelf: 'center',
  },
});
