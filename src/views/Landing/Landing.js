import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  ToastAndroid,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  Button
} from 'react-native';
import {style, COMMON_BORDER_RADIUS, COMMON_PADDING, COMMON_ELEVATION} from './Landing_style';
import {commonStyles} from '../../../res/styles/commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Overlay } from 'react-native-elements';
import COLORS from '../../../res/colors';
import {Actions} from 'react-native-router-flux';
import Video from "react-native-video";
import LinearGradient from 'react-native-linear-gradient';


import {
    goToPhoneRegistration,
} from './Landing_controller';

export class Landing extends Component{

    constructor(props){

        super(props);
        let {width, height} = Dimensions.get("window");

        this.width = width;
        this.height = height;

        this.state = {
        }

    }

    render(){

        let view_style = style(this);

        let c_style_context = {

            width: this.width*0.8,
            height: this.height

        }

        let c_style = commonStyles(c_style_context);
        return(
            <View style={view_style.main}>
                
                <Video
                    source={require("../../../res/videos/background_video.mp4")}
                    style={view_style.backgroundVideo}
                    muted={true}
                    repeat={true}
                    resizeMode={"cover"}
                    rate={1.0}
                    ignoreSilentSwitch={"obey"}
                />
                <LinearGradient colors={['rgba(0,0,0,.6)', 'rgba(0,0,0,.6)']} style={view_style.background_gradient}>
                </LinearGradient>
                <View style={view_style.column}>
                    <Text style={view_style.centered_paragraph}>Explora, descubre y prueba el sabor de lo local</Text>

                    <View style={{height: 20}}></View>

                    <Text style={view_style.brand_label}>¿Se te antoja?</Text>

                    <View style={{height: 10}}></View>


                    <View style={{height: 20}}></View>

                    <Text style={view_style.call_to_action}>Crea tu cuenta</Text>

                    <View style={{height: 10}}></View>

                    <TouchableOpacity
                        onPress={() =>
                            Actions.phone_registration() 
                            // goToPhoneRegistration(this)
                        } 
                        style={view_style.tile_button}>

                        <Icon name="mobile" size={30} color="white" />

                        <View style={{width: 12}}></View>

                        <Text style={view_style.tile_button_text}>Usando tu número telefonico</Text>
                    
                    </TouchableOpacity>

                    <View style={{height: 24}}></View>

                    <TouchableOpacity
                        onPress={() => {
                            // Actions.profile_completion()
                            Actions.main()
                            // goToPhoneRegistration(this)
                        }}>

                        <Text style={[view_style.centered_paragraph, {fontSize: 16}]}>¿Ya tienes cuenta?</Text>
                    
                    </TouchableOpacity>

                </View>
                
            </View>
        )

    }

}