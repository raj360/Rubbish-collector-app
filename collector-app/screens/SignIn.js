import React from 'react'
import { StyleSheet,
   View ,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import { Images, argonTheme } from "../constants";

import {Block, Checkbox, Text, theme } from 'galio-framework';
import { Button, Icon, Input } from "../components";

const {width,height} = Dimensions.get("screen");
const SignIn = (props) => {
  return (
   <Block flex middle  >
     <StatusBar hidden/>
     <Block flex middle >
       <Block flex style={styles.registerContainer}>
                <Block flex={0.5} middle>
                   <Image source={Images.ArgonLogo} style={styles.logo} />
                </Block>
                <Block flex middle>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >

                <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Telephone"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="support"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>

                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Password"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    
                    </Block>
                
                    <Block middle>
                      <Button color="primary" style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          SignIn
                        </Text>
                      </Button>
                        <Block  row style={styles.passwordCheck}>
                        <Text size={16} color={argonTheme.COLORS.MUTED}>
                        You don't have an account:
                        </Text>
                        <Text 
                        onPress={() => props.navigation.navigate('SignUp')}
                        bold size={16} color={argonTheme.COLORS.SECONDARY}>
                          {" "}
                          SignUp
                        </Text>
                      </Block>

                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
   </Block>

   </Block>
  )
}

export default SignIn

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 3,
    overflow: "hidden"
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  },
 avatar: {
    width: 100,
    height: 100,
    borderRadius: 62,
    borderWidth: 0
  }
  ,
 logo:{
  resizeMode:'stretch',
    width:250,
  height:200,
  }
});



