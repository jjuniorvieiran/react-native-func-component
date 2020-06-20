
import React, {Fragment} from 'react';
import {Text, Image} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <Text>Junior</Text>
      <Image source={require("./res/img/alura.jpg")}/>
    </Fragment>
  )
};
export default App;
