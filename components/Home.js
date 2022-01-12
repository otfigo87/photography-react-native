import React from 'react';
import {View, Text, Button} from 'react-native';

function Home({navigation}) {
    return (
    <View>
      <Text>Home Screen</Text>
      <Button title="About Us" onPress={() => navigation.navigate('About')}/>
    </View>
    )
}

export default Home
