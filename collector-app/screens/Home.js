import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme,Text } from 'galio-framework';
import { Card,RequestCollector, ServiceCard,Button} from '../components';
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
           
           <ServiceCard/>

          <Block center style={{marginTop:theme.SIZES.BASE}} >
                <Button style={styles.button} >
                  <Text style={{color:argonTheme.COLORS.WHITE}}>See more</Text>
                </Button>
          </Block>

          <Block flex row>
            <Card item={articles[1]} style={styles.cards}  />
            <Card item={articles[2]} styles={styles.cards} />
          </Block>

          <Block flex row>
            <Card item={articles[1]} style={styles.cards}  />
            <Card item={articles[2]} styles={styles.cards} />
          </Block>

          {/* <Card item={articles[3]} horizontal / double view wide
          <Card item={articles[4]} full /> full view image and text */}
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
