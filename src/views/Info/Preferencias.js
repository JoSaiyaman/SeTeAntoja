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
  TouchableOpacity,
  DrawerLayoutAndroid
} from 'react-native';
import { 
    Header,
    Icon
  } from 'react-native-elements';
import { Actions, ActionConst } from 'react-native-router-flux';
import Slider from '@react-native-community/slider';
import ToggleSwitch from 'toggle-switch-react-native'
import { SegmentedControls } from 'react-native-radio-buttons'

import COLORS from "../../../res/colors";
import light from "../../../res/styles/lightMode";
import commonStyles from '../../../res/commonStyles';

export default class Preferencias extends React.Component{

  constructor(props){

    super(props);
    var {height, width} = Dimensions.get("window");
    this.width = width;
    this.height = height;

    this.state = {
        tiempo: 30,
        presupuesto: '$$',
        domicilio: true,
        abierto: true,
        dieta: "De todo"
    }

    this.style = StyleSheet.create({

      menu_card:{

        width: width*0.40,
        height: height*0.25,
        marginTop: 20,
        marginBottom:10,
        marginRight: width*0.03,
        marginLeft: width*0.03,
        backgroundColor:COLORS.navbar

      }

    });
  }

  estilo(){
    switch (global.style){
      case 'light':
        return(light);
      // case 'dark':
      //   return(dark);
      default:
        return(light);
    }
  }

  render(){
    let estilos = this.estilo();
    let c_style = commonStyles(this);

    var navigationView = (
        <View style={estilos.container}>
          
        </View>    
      ); 

      const dietas = [
          "Vegana",
          "Vegetariana",
          "De todo"
      ]
      
      return ( 
        <DrawerLayoutAndroid style={estilos.container}
        ref = "mainDrawer"
        drawerWidth={300}
        renderNavigationView={() => navigationView}>
        <Header
          backgroundColor= {estilos.navBar.backgroundColor}
          leftComponent={{ text: "Salir", style: estilos.textNavBar, onPress:() => Actions.pop() }}
          containerStyle={{
            marginTop: Platform.OS === 'ios' ? 0 : - 24,
            borderBottomWidth: 0
          }}
        />
          <View >
            <ScrollView>

              <View style={[estilos.opcion, {paddingTop: 30} ]}>
                <Text style={[estilos.Título, {fontFamily: c_style.secondaryFont}]}>Preferencias Alimenticias</Text>
              </View>

              <View style={estilos.opcion}>
                <Text style={[estilos.CuadroDescripción, {fontFamily: c_style.secondaryFont}]}>Selecciona el tipo de comida que prefieres comer</Text>
              </View>

              <View style={{ paddingTop:30, paddingBottom: 30 }}>
                <SegmentedControls
                    direction={'column'}
                    tint={COLORS.accent}
                    selectedTint= {COLORS.fontColorAccentContrast}
                    backTint= {COLORS.background}
                    options={ dietas }
                    // allowFontScaling={ false } // default: true
                    onSelection={ dieta => {
                        this.setState({
                            dieta
                        });
                    }}
                    
                    containerStyle= {{
                        marginLeft: 20,
                        marginRight: 20,
                    }}
                    selectedOption={ this.state.dieta }
                    optionStyle={{fontSize: 22, fontFamily: c_style.secondaryFont}}
                    optionContainerStyle={{flex: 1}}
                />
              </View>
              <Icon 
                name='restaurant'
                color={COLORS.accent}
                size = {43}
                />
              <View style={estilos.opcion}>
                <TouchableOpacity onPress={() => {
                    Actions.ubicación()
                }} 
                 style={[estilos.botonMenu,{backgroundColor: COLORS.accent}]}>
                  <Text  style={{fontSize: 20, fontFamily: c_style.secondaryFontBold, color: COLORS.fontColorAccentContrast}}> Continuar </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </DrawerLayoutAndroid>
      );
    }
  }