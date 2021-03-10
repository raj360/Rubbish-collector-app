import React from 'react'
import { StyleSheet,Image,TouchableOpacity } from 'react-native';
import {Text,Block,theme} from 'galio-framework';
import {Images,argonTheme} from '../constants';
import {Button} from '../components';



const ServiceCardSmall = () => {
  return (
    <Block  column card style={styles.container} >
      <Block> 
        <TouchableOpacity>
          <Block right >
          <Text size={14} style={styles.close}>X</Text>
        </Block>
        </TouchableOpacity>
       <Image source={Images.ProfileBackground} style={styles.image}  />
      </Block>

      <Block style={styles.details} >
        <Text size={12} style={styles.text}>Name: </Text>
        <Text size={12} style={styles.text}>Email:</Text>   
        <Text size={12} style={styles.text}>District:</Text>   
        <Text size={12} style={styles.text}>Town:</Text>   
        <Text size={12} style={styles.text}>Street:</Text>   
        <Text size={12} style={styles.text}>Telephone:</Text>   
      </Block>
      
      <Block right style={{marginBottom:-10,marginRight:-5}}>
        <Button small>
          view
        </Button>
      </Block>
    
    </Block>
  )
}

export default ServiceCardSmall;

const styles = StyleSheet.create({
  container:{
    elevation:3,
    borderRadius:10,
    padding:10,
    width:180,
    margin:5
  },
  image:{
    width:60,
    height:60,
    borderRadius:50,
    marginTop:-25
  },
  text:{
     color:argonTheme.COLORS.PRIMARY
  },
  details:{
    marginLeft: theme.SIZES.BASE/2,
    marginTop: theme.SIZES.BASE/3
  },close:{
    backgroundColor:argonTheme.COLORS.PRIMARY,
    color:argonTheme.COLORS.WHITE,
    padding:5,
    borderRadius:50,
    marginTop: 0,
    width: 30,
    paddingLeft:10
  }
})
