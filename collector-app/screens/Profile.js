import React from 'react'
import { StyleSheet,
   View ,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import { Images, argonTheme } from "../constants";

import {Block, Checkbox, Text, theme } from 'galio-framework';
import { Button, Icon, Input } from "../components";

const {width,height} = Dimensions.get("screen");



const Profile = (props) => {

  const [values, setValues] = React.useState({});

 const  handleTextChange = (prop) => (event) => {
       setValues({ ...values, [prop]: event.target.value });
     };

  return (
      <Block flex middle  >
     <StatusBar hidden/>
     <Block flex middle >
       <Block flex style={styles.registerContainer}>
                <Block flex={0.2} middle style={{marginBottom:'15%'}}>
                   <Image source={Images.Amos} style={styles.logo} />
                  <TouchableOpacity>
                     <Image source={Images.CaptureImage} style={styles.button} />
                  </TouchableOpacity>
                </Block>
                <Block flex middle>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                   
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderlessd
                        name="firstName"
                        onChange={ handleTextChange }
                        placeholder="First Name"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.PRIMARY}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />

                    
                    </Block>

                      <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Last Name"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.PRIMARY}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>

                <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Telephone"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.PRIMARY}
                            name="support"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>

                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Email"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.PRIMARY}
                            name="ic_mail_24px"
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
                            color={argonTheme.COLORS.PRIMARY}
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
                          Update profile
                        </Text>
                      </Button>

                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
   </Block>

   </Block>
  )
}

export default Profile

const styles = StyleSheet.create({
  registerContainer: {
    margin:20,
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
  resizeMode:'contain',
  width:'100%',
  height:'100%',
  borderRadius: 200,
  marginTop: 100,
 
  
  },button:{
    resizeMode:'contain',
    width:50,
    height:50,
    left:55,
    bottom:30,
 zIndex: 2
  }
});



