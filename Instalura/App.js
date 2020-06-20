
import React, {Fragment} from 'react';
import {
  Text, 
  Image, 
  ScrollView} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Junior</Text>
      <Image 
        source={require("./res/img/alura.jpg")}
        style={{
          width:300,
          height:300 
        }}
      />
      <Text>Dani</Text>
      <Image source={require("./res/img/alura.jpg")}/>
    </ScrollView>
  )
};
export default App;
