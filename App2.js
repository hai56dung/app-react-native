import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  Button,
  Text,
} from 'react-native';
const width = Dimensions.get('window').width;
const App2 = () => {
  const [index, setIndex] = React.useState(0);
  const refScroll = React.useRef(null);
  const refModal = React.useRef(null);
  const nextPage = () => {
    let nextIndex = index + 1;
    setIndex(nextIndex);
    refScroll.current.scrollTo({x: nextIndex * width, y: 0, animated: true});
  };
  const prevPage = () => {
    let nextIndex = index - 1;
    setIndex(nextIndex);
    refScroll.current.scrollTo({x: nextIndex * width, y: 0, animated: true});
  };

  return (
    <View style={{flex: 1}}>
      <Button
        title="Change Name Modal"
        onPress={() => {
          refModal.current.setName('Question 2');
        }}
      />
      <View style={{flex: 1}}>
        <ScrollView horizontal pagingEnabled ref={refScroll}>
          <View style={{width, height: '100%', backgroundColor: 'red'}} />
          <View style={{width, height: '100%', backgroundColor: 'blue'}} />
        </ScrollView>
      </View>
      <ModalComponent
        ref={refModal}
        index={index}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </View>
  );
};

const ModalComponent = React.forwardRef(({index, prevPage, nextPage}, ref) => {
  const [name, setName] = React.useState('Question 1');

  React.useImperativeHandle(ref, () => {
    return {
      setName,
    };
  });

  return (
    <View
      style={{
        width: '100%',
        height: 150,
        flexDirection: 'row',
      }}>
      <Button
        title="Prev"
        onPress={() => {
          prevPage();
        }}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>{index}</Text>
        <Text style={{fontSize: 30}}>{name}</Text>
      </View>
      <Button
        title="Next"
        onPress={() => {
          nextPage();
        }}
      />
    </View>
  );
});

export default App2;

const styles = StyleSheet.create({});
