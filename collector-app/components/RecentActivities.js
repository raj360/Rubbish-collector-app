import React from 'react';
import { StyleSheet,ScrollView} from 'react-native';
import {Block,Text,theme} from 'galio-framework';
import {Images,argonTheme} from '../constants';
import {ServiceCardSmall} from '../components'


const RecentActivities = () => {
  return (
    <Block card style={styles.container} >
      <Text bold center size={20} style={[styles.text]}>
       RECENT ACTIVIES
      </Text>
     
     <Block style={styles.border} />

      <ScrollView
      horizontal={true}
       showsHorizontalScrollIndicator={false}
      >
        <ServiceCardSmall />
        <ServiceCardSmall />
        <ServiceCardSmall />
        <ServiceCardSmall />
      </ScrollView>

    </Block>
  )
}

export default RecentActivities

const styles = StyleSheet.create({
  container: {
    padding:5,
    elevation:2
  },
  text:{
    color:argonTheme.COLORS.PRIMARY
  },
  border:{
   margin:4,
   borderRadius:3,
   borderBottomWidth:2,
   borderBottomColor:argonTheme.COLORS.PRIMARY
  }
})
