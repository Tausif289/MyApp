import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
   const data = ['Apple', 'Banana', 'Mango', 'Orange'];
  return (
    <SafeAreaView >
    <ScrollView style={styles.container}>
      
      {/* Text */}
      <Text style={styles.heading}>Hello Tausif 🚀</Text>

      {/* Image */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />

      {/* Input */}
      <TextInput
        placeholder="Enter your username"
        style={styles.input}
      />

      {/* Button */}
      <Button title="Click Me" onPress={() => Alert.alert('Button Pressed')} />

      {/* Touchable */}
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => Alert.alert('Touchable Pressed')}
      >
        <Text style={{ color: 'white' }}>Custom Button</Text>
      </TouchableOpacity>

      {/* Multiple Views */}
      <View style={styles.boxContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>

      {/* Scroll Content */}
      <Text style={styles.paragraph}>
        This is scrollable content. Add more text here to test scrolling behavior.
        React Native uses ScrollView for vertical scrolling by default.
      </Text>
      <View style={{ flex: 1, marginTop: 50 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 20, padding: 10 }}>
            {item}
          </Text>
        )}
      />
    </View>

    </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  touchable: {
    backgroundColor: 'blue',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  box2: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  box3: {
    width: 50,
    height: 50,
    backgroundColor: 'orange',
  },
  paragraph: {
    fontSize: 16,
    marginTop: 20,
  },
});