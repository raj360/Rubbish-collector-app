import React from 'react';
import { StyleSheet,ScrollView,Dimensions,Image,TouchableOpacity} from 'react-native';
import {Block,Text,theme,Checkbox,Button} from 'galio-framework';
import {argonTheme,Images,Input} from '../constants';
const {width} = Dimensions.get('screen');

const RequestCollector = () => {
  return (
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.container}
  >
     <Block center flex style={{marginTop: theme.SIZES.BASE*5}}>
       <Block flex  center>
           <Image source={Images.greyBackground} style={styles.image}/> 
          
            <TouchableOpacity>
              <Image source={Images.CaptureImage} style={styles.capture}/>
            </TouchableOpacity>

       </Block>
     
     <Text style={{color:argonTheme.COLORS.PRIMARY}}>Capture image of waste (Volume)</Text>

      <Block flex center >
         <Button style={{borderRadius:50,marginTop:theme.SIZES.BASE*2}} >
           submit
         </Button>
      </Block>

   </Block>
  </ScrollView>
  )
}

export default RequestCollector;

const styles = StyleSheet.create({
  container: {
    width: width - theme.SIZES.BASE ,
    paddingVertical: theme.SIZES.BASE,
  },
  image:{
    width:300,
    height:300,
    borderRadius:5
  },
  capture:{
    width:50,
    height:50,
    margin:theme.SIZES.BASE/2
  }

})
