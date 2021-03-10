import React from 'react'
import { StyleSheet,Image,TouchableOpacity } from 'react-native';
import {Text,Block,theme} from 'galio-framework';
import {Images,argonTheme} from '../constants';
import {Button} from '../components';



const ServiceCard = () => {
  return (
    <Block  column card style={styles.container} >
      <Block> 
        <TouchableOpacity>
          <Block right style={{elevation:5}} >
          <Text size={16} style={styles.close}>X</Text>
        </Block>
        </TouchableOpacity>
       <Image source={Images.ProfileBackground} style={styles.image}  />
      </Block>

      <Block style={styles.details} >
        <Text style={styles.text}>Name:</Text>
        <Text style={styles.text}>Email:</Text>   
        <Text style={styles.text}>District:</Text>   
        <Text style={styles.text}>Town:</Text>   
        <Text style={styles.text}>Street:</Text>   
        <Text style={styles.text}>Telephone:</Text>   
      </Block>
      
      <Block right style={{marginBottom:-10,marginRight:-5}}>
        <Button small>
          confirm
        </Button>
      </Block>
    
    </Block>
  )
}

export default ServiceCard

const styles = StyleSheet.create({
  container:{
    elevation:5,
    borderRadius:10,
    padding:20,
    width:'70%'
  },
  image:{
    width:90,
    height:90,
    borderRadius:50,
    marginTop:-30
  },
  text:{
     color:argonTheme.COLORS.PRIMARY
  },
  details:{
    marginLeft: theme.SIZES.BASE,
    marginTop: theme.SIZES.BASE
  },close:{
    backgroundColor:argonTheme.COLORS.PRIMARY,
    color:argonTheme.COLORS.WHITE,
    padding:10,
    borderRadius:50,
    marginTop: -5,
    width: 40,
    paddingLeft:15
  }
})
