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
import {commonStyles} from '../../../res/styles/commonStyles';

export default class Ubicación extends React.Component{

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
          <ScrollView style={estilos.ScrollContainer} contentContainerStyle={estilos.contentContainer}>
            <View>
              <View style ={estilos.header}>
                  <View >
                      <Image style={estilos.profilepicWrap}/>
                  </View> 
              </View>
              
              <View style={estilos.texto}>
                  {/* <Text style={estilos.name}>Otras opciones</Text> */}
              </View >   
              
              <TouchableOpacity onPress={() => {
                // Actions.settings()
                Alert.alert('Escena de configuración')
                }}>
                <View style={estilos.celdaOption}>
                  <Text style={estilos.menuOption}>Configuración</Text>
                </View>
              </TouchableOpacity>
  
            </View>
            <View style={{paddingBottom: 25}}>
              <TouchableOpacity onPress={() => {
                // Actions.()
                Alert.alert('Cerrar sesión')
                }}>
                <View style={estilos.celdaOption}>
                  <Text style={estilos.menuOptionFinal}>Cerrar sesión</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
          leftComponent={{ text: "Atrás", style: estilos.textNavBar, onPress:() => Actions.pop() }}
          rightComponent={{ text: "Saltar", style: estilos.textNavBar, onPress:() => Actions.main() }}
          containerStyle={{
            marginTop: Platform.OS === 'ios' ? 0 : - 24,
            borderBottomWidth: 0
          }}
        />
          <View >
            <ScrollView>
              <View style={[estilos.opcion, {paddingTop: 30} ]}>
                <Text style={estilos.Título}>Permiso de Ubicación</Text>
              </View>
              <View style={estilos.opcion}>
                <Text style={estilos.CuadroDescripción}>Por favor comparte tu ubicación para poder optimizar tu experiencia</Text>
              </View>
              <View style={{ paddingTop:30, paddingBottom: 30 }}>
                <Icon 
                    name='place'
                    color={COLORS.accent}
                    size = {150}
                    />
              </View>
              <View style={estilos.opcion}>
                <TouchableOpacity onPress={() => {
                    Actions.main()
                }} 
                style={[estilos.botonMenu,{backgroundColor: COLORS.accent}]}>
                  <Text  style={estilos.botonMenuText}> Compartir ubicación </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </DrawerLayoutAndroid>
      );
    }
  }