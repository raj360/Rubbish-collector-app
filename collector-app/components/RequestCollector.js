import React from 'react';
import { StyleSheet, Image,TouchableOpacity} from 'react-native';
import {Block,Text,Theme,Button} from 'galio-framework';

import {Images,argonTheme} from '../constants'


const RequestCollector = () => {
  return (
   <Block center flex>
      <TouchableOpacity>
     <Block center middle>
          <Image source={Images.requestCollector}
      />
      <Text bold color={argonTheme.COLORS.PRIMARY}>Request for a waste collector</Text>
     </Block>
      </TouchableOpacity>

    <Block middle>
     <Button style={{borderRadius: 100}}>
       <Text bold color={argonTheme.COLORS.WHITE}>
         Recent Collections
       </Text>
     </Button>
    </Block>

   </Block>
  )
}

export default RequestCollector

const styles = StyleSheet.create({});


