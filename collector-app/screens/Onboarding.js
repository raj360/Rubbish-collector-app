import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";

class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block  flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
        <ImageBackground
            style={{ height, width, zIndex: 1 }}
          />
        </Block>
        <Block center>
          <Image source={Images.ArgonLogo} style={styles.logo} />
        </Block>
        <Block flex space="between" style={styles.padded}>
            <Block flex space="around" style={{ zIndex: 2 }}>
              <Block style={styles.title}>
                <Block>
                </Block>
                <Block  column style={{marginBottom:10}} >
                  <Text color={argonTheme.COLORS.PRIMARY} size={60} >
                    Kasasiro
                  </Text>

                  <Text  color={argonTheme.COLORS.PRIMARY} size={30}>
                    for Collectors
                  </Text>
                </Block>
                <Block style={styles.subTitle}>
                  <Text color={argonTheme.COLORS.PRIMARY} size={18}>
                    You timely rubbish collector app, cheap and so affordable
                  </Text>
                </Block>
              </Block>
              <Block center>
                <Button
                  style={styles.button}
                  color={argonTheme.COLORS.SECONDARY}
                  onPress={() => navigation.navigate("App")}
                  textStyle={{ color: argonTheme.COLORS.WHITE }}
                >
                  Get Started
                </Button>
              </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: argonTheme.COLORS.WHITE
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 10,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    borderRadius:50
  },
  logo: {
    width: 500,
    height: 300,
    zIndex: 2,
    position: 'relative',
    resizeMode:'stretch',
    marginTop: '-50%'
  },
  title: {
    marginTop:'-5%'
  },
  subTitle: {
    marginTop: 5
  }
});

export default Onboarding;
