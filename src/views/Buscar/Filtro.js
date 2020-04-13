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
    Header
  } from 'react-native-elements';
import { Actions, ActionConst } from 'react-native-router-flux';

import COLORS from "../../../res/colors";
import light from "../../../res/styles/lightMode";
import {commonStyles} from '../../../res/styles/commonStyles';

export default class Filtro extends React.Component{

  constructor(props){

    super(props);
    var {height, width} = Dimensions.get("window");
    this.width = width;
    this.height = height;

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
      
      return ( 
        <DrawerLayoutAndroid style={estilos.container}
        ref = "mainDrawer"
        drawerWidth={300}
        renderNavigationView={() => navigationView}>
        <Header
          backgroundColor= {estilos.navBar.backgroundColor}
          leftComponent={{ icon: 'arrow-back', color: '#fff', onPress:() => Actions.pop() }}
          centerComponent={{ text: "Filtros", style: estilos.textNavBar }}
          containerStyle={{
            marginTop: Platform.OS === 'ios' ? 0 : - 24,
            borderBottomWidth: 0
          }}
        />
          <View >
            <ScrollView>
              <View style={estilos.opcion}>
              </View>
              <View style={estilos.opcion}>
                <TouchableOpacity style={[estilos.botonMenu,{backgroundColor: 'rgb(112,151,245)'}]}>
                  <Text  style={estilos.botonMenuText}> Botón </Text>
                </TouchableOpacity>
              </View>
              <View style={estilos.opcion}>
                <TouchableOpacity style={[estilos.botonMenu,{backgroundColor: 'rgb(68,114,196)'}]}>
                  <Text  style={estilos.botonMenuText}> Botón </Text>
                </TouchableOpacity>
              </View>
              <View style={estilos.opcion}>
                <TouchableOpacity style={[estilos.botonMenu,{backgroundColor: 'rgb(0,32,96)'}]}>
                  <Text  style={estilos.botonMenuText}> Botón </Text>
                </TouchableOpacity>
              </View>
              <View style={estilos.opcion}>
                <TouchableOpacity style={[estilos.botonMenu,{backgroundColor: 'rgb(0,37,203)'}]}>
                  <Text  style={estilos.botonMenuText}> Botón </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </DrawerLayoutAndroid>
      );
    }
  }