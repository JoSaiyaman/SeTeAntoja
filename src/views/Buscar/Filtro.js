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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from "../../../res/colors";
import light from "../../../res/styles/lightMode";
import commonStyles from '../../../res/commonStyles';

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
        <View style={{backgroundColor: COLORS.background, flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
               <TouchableOpacity
                   onPress={()=>Actions.pop()}
                   style={estilos.custom_appbar_icon}>
                   <Icon name="close" size={30} color={COLORS.fontColorBackground} />
               </TouchableOpacity>
            </View>
            
            <View style={estilos.main_banner}>
              <Text style={{
                  fontFamily: c_style.specialFont,
                  fontSize: 50,
                  color: COLORS.accent
              }}> Filtros </Text>
            </View>
            
            <ScrollView>
              <View style={[estilos.opcion, {paddingTop: 30} ]}>
                <Text style={{
                    fontFamily: c_style.secondaryFont,
                    color: COLORS.fontColorBackground,
                    fontSize: 18
                  }}>Distancia del lugar: {this.state.tiempo} minutos</Text>
                <Slider
                    style={estilos.opcionSlider}
                    thumbTintColor = {COLORS.accent}
                    minimumValue={0}
                    maximumValue={120}
                    step={5}
                    value={30} // Valor a ser tomado de la "Base de datos"
                    minimumTrackTintColor={COLORS.accent}
                    maximumTrackTintColor={COLORS.accent}
                    onValueChange={value => this.setState({tiempo: value})}
                />
              </View>
              <View style={estilos.opcion}>
                <Text style={{
                    fontFamily: c_style.secondaryFont,
                    color: COLORS.fontColorBackground,
                    fontSize: 18
                  }}>Presupuesto: {this.state.presupuesto}</Text>
                <Slider
                    style={estilos.opcionSlider}
                    thumbTintColor = {COLORS.accent}
                    minimumValue={0}
                    maximumValue={3}
                    step={1}
                    value={1} // Valor a ser tomado de la "Base de datos"
                    minimumTrackTintColor={COLORS.accent}
                    maximumTrackTintColor={COLORS.accent}
                    onValueChange={value => {
                        let costo = '$'.repeat(value + 1);
                        this.setState({presupuesto: costo}); 
                        }
                    }
                />
              </View>
              <View style={estilos.opcion}>
                <View style={estilos.opcionRow}>
                  <Text style={{
                    fontFamily: c_style.secondaryFont,
                    color: COLORS.fontColorBackground,
                    fontSize: 18
                  }}>Solo envíos a domicilio</Text>
                  <ToggleSwitch
                      isOn={this.state.domicilio}
                      onColor={COLORS.accent}
                      offColor={COLORS.container}
                      // label="Sólo envíos a domicilio"
                      labelStyle={estilos.Subtítulo}
                      size="large"
                      onToggle={
                          domicilio => {
                              this.setState({domicilio});
                          } 
                      }
                  />
                </View>
              </View>
              <View style={estilos.opcion}>
                <View style={estilos.opcionRow}>
                  <Text style={{
                    fontFamily: c_style.secondaryFont,
                    color: COLORS.fontColorBackground,
                    fontSize: 18
                  }}>Solo lugares abiertos</Text>
                  <ToggleSwitch
                      isOn={this.state.abierto}
                      onColor={COLORS.accent}
                      offColor={COLORS.container}
                      // label="Sólo lugares abiertos"
                      labelStyle={estilos.Subtítulo}
                      size="large"
                      onToggle={
                          abierto => {
                              this.setState({abierto});
                          } 
                      }
                  />
                </View>
              </View>
              <View style={estilos.opcion}>
                <Text style={{
                    fontFamily: c_style.secondaryFont,
                    color: COLORS.fontColorBackground,
                    fontSize: 18
                  }}>Preferencias alimenticias:</Text>
                <View style={{height: 10}}></View>
                <SegmentedControls
                    tint={COLORS.accent}
                    selectedTint= {COLORS.fontColorWhite}
                    backTint= {COLORS.background}
                    options={ dietas }
                    // allowFontScaling={ false } // default: true
                    onSelection={ dieta => {
                        this.setState({
                            dieta
                        });
                    }}
                    selectedOption={ this.state.dieta }
                    optionStyle={{fontFamily: c_style.secondaryFont, fontSize: 16}}
                    optionContainerStyle={{flex: 1}}
                />
              </View>
              <View style={{height: 15}}></View>
              <View style={estilos.opcion}>
                <TouchableOpacity onPress={()=>Actions.meal_search()} style={[estilos.botonMenu,{backgroundColor: COLORS.accent}]}>
                  <Text  style={{
                    fontFamily: c_style.secondaryFontBold,
                    color: COLORS.fontColorBackground,
                    fontSize: 20
                  }}> Comenzar </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        // </DrawerLayoutAndroid>
      );
    }
  }