import React from 'react';
import { StyleSheet , View } from 'react-native';
import {Block,Text} from 'galio-framework';

const LogOut = ({navigation}) => {

  React.useEffect(() =>{
  navigation.navigate('SignIn')
  })

  return (
    <Block flex center middle>
      <Text>Logout</Text>
    </Block>
  )
}


export default LogOut;

const styles = StyleSheet.create({})
