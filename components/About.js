import React from 'react';
import {View, Text, Button} from 'react-native';

function About({navigation}) {
    return (
    <View>
      <Text>About Screen</Text>
      <Button title="Back" onPress={() => navigation.navigate('Home')}/>
    </View>
    )
}

export default About
