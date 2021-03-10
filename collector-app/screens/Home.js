import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme,Text } from 'galio-framework';
import { Card,RequestCollector, ServiceCard,Button, RecentActivities} from '../components';
import articles from '../constants/articles';
import {argonTheme} from '../constants';

const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
           
            <ScrollView 
            horizontal={true}
            >
             
                  <ServiceCard/>
                  <ServiceCard/>
                  <ServiceCard/>
             
              
            </ScrollView>
       

          <Block center style={{marginTop:theme.SIZES.BASE/2,marginBottom:theme.SIZES.BASE/2}} >
                <Button style={styles.button} >
                  <Text style={{color:argonTheme.COLORS.WHITE}}>See more</Text>
                </Button>
          </Block>

          <Block >
            <RecentActivities/>
          </Block>           

        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  cards:{
      marginRight: theme.SIZES.BASE 
  },
  button: {
      borderRadius:50,

  }
});

export default Home;
