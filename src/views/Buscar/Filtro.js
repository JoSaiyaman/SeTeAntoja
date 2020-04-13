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
import Slider from '@react-native-community/slider';
import ToggleSwitch from 'toggle-switch-react-native'
import { SegmentedControls } from 'react-native-radio-buttons'

import COLORS from "../../../res/colors";
import light from "../../../res/styles/lightMode";
import {commonStyles} from '../../../res/styles/commonStyles';

export default class Filtro extends React.Component{

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
        dieta: "Omnivora"
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
          "Omnivora"
      ]
      
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
              <View style={[estilos.opcion, {paddingTop: 30} ]}>
                <Text style={estilos.Subtítulo}>Distancia del lugar: {this.state.tiempo} minutos</Text>
                <Slider
                    style={estilos.opcionSlider}
                    minimumValue={0}
                    maximumValue={120}
                    step={5}
                    value={30} // Valor a ser tomado de la "Base de datos"
                    minimumTrackTintColor={COLORS.primary}
                    maximumTrackTintColor={COLORS.accent}
                    onValueChange={value => this.setState({tiempo: value})}
                />
              </View>
              <View style={estilos.opcion}>
                <Text style={estilos.Subtítulo}>Presupuesto: {this.state.presupuesto}</Text>
                <Slider
                    style={estilos.opcionSlider}
                    minimumValue={0}
                    maximumValue={3}
                    step={1}
                    value={1} // Valor a ser tomado de la "Base de datos"
                    minimumTrackTintColor={COLORS.primary}
                    maximumTrackTintColor={COLORS.accent}
                    onValueChange={value => {
                        let costo = '$'.repeat(value + 1);
                        this.setState({presupuesto: costo}); 
                        }
                    }
                />
              </View>
              <View style={estilos.opcion}>
                <ToggleSwitch
                    isOn={this.state.domicilio}
                    onColor={COLORS.primary}
                    offColor={COLORS.disabled}
                    label="Sólo envíos a domicilio"
                    labelStyle={estilos.Subtítulo}
                    size="large"
                    onToggle={
                        domicilio => {
                            this.setState({domicilio});
                        } 
                    }
                />
              </View>
              <View style={estilos.opcion}>
                <ToggleSwitch
                    isOn={this.state.abierto}
                    onColor={COLORS.primary}
                    offColor={COLORS.disabled}
                    label="Sólo lugares abiertos"
                    labelStyle={estilos.Subtítulo}
                    size="large"
                    onToggle={
                        abierto => {
                            this.setState({abierto});
                        } 
                    }
                />
              </View>
              <View style={estilos.opcion}>
                <Text style={estilos.Subtítulo}>Dieta:</Text>
                <SegmentedControls
                    tint={COLORS.primary}
                    selectedTint= {'white'}
                    backTint= {COLORS.disabled}
                    options={ dietas }
                    // allowFontScaling={ false } // default: true
                    onSelection={ dieta => {
                        this.setState({
                            dieta
                        });
                    }}
                    selectedOption={ this.state.dieta }
                    optionStyle={{fontFamily: 'AvenirNext-Medium'}}
                    optionContainerStyle={{flex: 1}}
                />
              </View>
              <View style={estilos.opcion}>
                <TouchableOpacity style={[estilos.botonMenu,{backgroundColor: COLORS.primary}]}>
                  <Text  style={estilos.botonMenuText}> Continuar </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </DrawerLayoutAndroid>
      );
    }
  }