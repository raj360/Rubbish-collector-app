import React from 'react';
import { StyleSheet,Image} from 'react-native';
import {Button,Text,Block,theme} from 'galio-framework';
import {argonTheme,Images} from "../constants";

const CollectionItem = () => {
  return (
    <Block card style={styles.container} >
      
      <Block center >
        <Image
          source={Images.greyBackground}
          style={styles.image}
        />
      </Block>
      
      <Block style={{marginTop: theme.SIZES.BASE/2}}>
        <Text  size={14} style={styles.text}>Mukono T.C Collected You wastes</Text>
        <Text  size={14} style={styles.text}>On the  20th/12/2020{}</Text>
        <Text  size={14} style={styles.text}>At a fee of 2000/=</Text>
        <Text  size={14} style={styles.text}>By track UGX245B</Text>
      </Block>
    </Block>
  )
}

export default CollectionItem;

const styles = StyleSheet.create({
  container: {
    elevation:3,
    padding:5,
    width: 155,
    margin:5
  },
  image:{
    width:145,
    height:100,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius:10
  },
  text:{
    color:argonTheme.COLORS.PRIMARY
  }
});
