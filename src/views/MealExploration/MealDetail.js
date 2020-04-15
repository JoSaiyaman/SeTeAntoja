import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import {style, COMMON_BORDER_RADIUS, COMMON_PADDING, COMMON_ELEVATION} from './MealExploration_style';
import {commonStyles} from '../../../res/styles/commonStyles';
import { Input, Overlay, colors } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../res/colors';

export class MealDetail extends Component{
    constructor() {
        super();
        let {width, height} = Dimensions.get("window");

        this.width = width;
        this.height = height;

        this.state = {
            loading: false,
            platillos: [
                {"name":"La matona"},
                {"name":"Tacos de barbacha"},
                {"name":"Burro San Mario"},
                {"name":"Spaghetti del Santo"},
                {"name":"Discada casera"}
            ],
        };
    }

    componentDidMount() {
        // this.setState({
        //     pickerData: this.phone.getPickerData(),
        //     phoneNumber: '+' + this.phone.getCountryCode(),
        // });
        
        // setTimeout(() => this.phone.focus(), 500)
    }

    renderList(name){

        //Sirve para renderear la lista
        
        let elementWidth = this.width * 0.4;
        let elementHeight = this.height * 0.13;
        let marginLeft = this.width*0.05 - this.padding;
        
        let onClick = ()=>{
            
        }
        
        return(
            
            

            <View style={{
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                backgroundColor: colors.accent,
                width: this.width*0.3,
                height: this.height*0.2,
                marginHorizontal: this.width*0.04,
                marginVertical: this.height*0.03
                
            }}>
                <TouchableOpacity 
                onPress={onClick.bind(this)} 
                style={{
                    backgroundColor:"white",
                    borderRadius:15,                
                    backgroundColor: COLORS.accent,
                    flex:1,}}>

                    <View style={{
                        justifyContent:"center",
                        alignContent:"center",
                        alignItems:"center",
                        color:"white",
                        padding:10
                        }}>

                        <Text style={{
                            color:"white",
                            fontSize: 18,
                            fontWeight:"bold",
                            textAlign: "justify",
                            textAlign:"center"
                            }}>

                            {name}

                        </Text>
                    </View>                
                </TouchableOpacity>
            </View>            
                        
                
        )
    }

    renderListEmpty(){
        return(
            this.state.loading ? <Text style={{alignSelf:"center"}}>Cargando...</Text> : 
            <View style={{alignSelf:"center"}}>
                {//<Image source={} resizeMode="contain" style={{flex:1, borderRadius: 8, height:200, width: undefined, marginTop:100}}>
                //</Image> /*
            }
                <Text style={{alignSelf:"center", fontSize: 16, fontWeight: "bold", color:COLORS.accent, marginLeft: 70, marginRight: 70, marginTop: 20, textAlign:"center"}}>
                    No hay selección.
                </Text>
                
            </View>
            
        );
    }

    render() {
        let view_style = style(this);

        let c_style_context = {

            width: this.width*0.8,
            height: this.height

        }

        let c_style = commonStyles(c_style_context);

        let dataToRender = this.state.platillos;
 
        return (
            <View style={view_style.main}>
                <Overlay isVisible={this.state.loading}
                    overlayStyle={{height:this.width*0.1, width:this.width*0.1}}
                    >
                    <ActivityIndicator size="large" color={COLORS.primary}></ActivityIndicator>
                </Overlay>

                <ScrollView>
                <View style={{
                    width: this.width, 
                    backgroundColor: COLORS.background,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems:"center"}}>

                    <View style={{height: 25}}></View>
                    <View style={{height: this.height*0.1,
                    justifyContent:"center"}}>
                        <Text style={{color:COLORS.fontColorAccent,
                            fontSize: 26,
                            fontWeight: "bold",}}>
                            No sé si esto lleva nombre
                        </Text>
                    </View>
                    <View style={{width: this.width,
                        height: this.width*1.05,
                        flexDirection:"column-reverse",
                        justifyContent:"flex-start",
                        backgroundColor: COLORS.accent}}>
                    </View>
                    <View style={{height: 25}}></View>
                    <View style={{width: this.width*0.85,

                        justifyContent:"flex-start",
                        backgroundColor: COLORS.background}}>
                            <Text style={{color:COLORS.fontColorAccent,
                            fontSize: 28,
                            fontWeight: "bold"}}>
                                La matonas especial de tres vacas de leche espumosa
                            </Text>
                    </View>
                    <View style={{height: 10}}></View>
                    <View style={{width: this.width*0.85,
                        height: this.height*0.05,
                        flexDirection:"row",
                        backgroundColor: COLORS.background}}>
                            <Text style={{color:COLORS.fontColorWhite,
                            flex: 1,
                            fontSize: 16,
                            fontWeight: "bold"}}>
                                25 minutos
                            </Text>
                            <Text style={{color: "yellow",
                            flex: 1,
                            fontSize: 16,
                            fontWeight: "bold"}}>
                                Estrellitas
                            </Text>
                            <Text style={{color:COLORS.green,
                            flex: 1,
                            fontSize: 16,
                            fontWeight: "bold"}}>
                                79.00 MXN
                            </Text>
                    </View>
                    <View style={{width: this.width*0.85,
                        justifyContent:"flex-start",
                        backgroundColor: COLORS.background}}>
                            <Text style={{color:COLORS.fontColorGreyContainer,
                            fontSize: 20,
                            textAlign: "justify"}}>
                                Una descripción bien cheesy que te haga olvidar que traes lonche de godín pa 
                                gastarte hora y media de tu salario en una anvorguesa sobrevalorada
                            </Text>
                    </View>
                    <View style={{height: 20}}></View>
                    <View style={{width: this.width*0.85,
                        flexDirection:"row",
                        justifyContent:"flex-start",
                        backgroundColor: COLORS.background}}>
                        <View
                            //onPress={()=>this.verifyNumberAndRequestSMS()}
                            style={{width: this.width*0.65,
                                height: this.height*0.06,
                            backgroundColor: COLORS.accent,
                            justifyContent: "center",
                            alignContent:"center",
                            alignSelf:"center",
                            borderWidth: 0,
                            borderColor: COLORS.accent}}
                            
                            //onPress={()=>Actions.meal_detail()}
                            >

                            <Text style={{textAlign:"center",
                            color:COLORS.fontColorWhite,
                            fontSize: 20,
                            fontWeight: "bold"
                                }}>Disponible a domicilio
                            </Text>
                        </View>
                    </View>
                    <View style={{height: 20}}></View>
                    <View style={{width: this.width*0.85,
                        justifyContent:"flex-start",
                        backgroundColor: COLORS.background}}>
                            <Text style={{color:COLORS.fontColorGreyContainer,
                            fontSize: 20,
                            textAlign: "justify",
                            fontWeight:"bold"}}>
                                Números
                            </Text>
                            <Text style={{color:COLORS.fontColorGreyContainer,
                            fontSize: 20,
                            textAlign: "justify"}}>
                                123456789
                            </Text>
                            <Text style={{color:COLORS.fontColorGreyContainer,
                            fontSize: 20,
                            textAlign: "justify"}}>
                                123456789
                            </Text>
                    </View>
                    <View style={{height: 20}}></View>
                    <View style={{width: this.width*0.85,
                        justifyContent:"flex-start",
                        backgroundColor: COLORS.background}}>
                            <Text style={{color:COLORS.fontColorGreyContainer,
                            fontSize: 20,
                            textAlign: "justify"}}>
                                Dirección
                            </Text>
                    </View>
                    <View style={{width: this.width*0.85,
                        height: this.width* 0.5,
                        flexDirection:"column-reverse",
                        justifyContent:"flex-start",
                        backgroundColor: COLORS.accent}}>
                    </View>
                    <View style={{height: 30}}></View>
                    <View style={{width: this.width*0.85,
                        flexDirection:"row",
                        justifyContent:"center",
                        backgroundColor: COLORS.background}}>
                        <TouchableOpacity
                            //onPress={()=>this.verifyNumberAndRequestSMS()}
                            style={{width: this.width*0.54,
                                height: this.height*0.06,
                            backgroundColor: COLORS.green,
                            borderRadius:30,
                            justifyContent: "center",
                            alignContent:"center",
                            alignSelf:"center",
                            borderWidth: 0,
                            borderColor: COLORS.green}}>

                            <Text style={{textAlign:"center",
                            color:COLORS.fontColorWhite,
                            fontSize: 20,
                            fontWeight: "bold"
                                }}>Seguir buscando
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{height: 30}}></View>
                    <View style={{width: this.width*0.85,
                        flexDirection:"row",
                        justifyContent:"center",
                        backgroundColor: COLORS.background}}>
                        <TouchableOpacity
                            //onPress={()=>this.verifyNumberAndRequestSMS()}
                            style={{width: this.width*0.40,
                                height: this.height*0.06,
                            backgroundColor: COLORS.red,
                            borderRadius:30,
                            justifyContent: "center",
                            alignContent:"center",
                            alignSelf:"center",
                            borderWidth: 0,
                            borderColor: COLORS.green}}>

                            <Text style={{textAlign:"center",
                            color:COLORS.fontColorWhite,
                            fontSize: 20,
                            fontWeight: "bold"
                                }}>Reportar
                            </Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                </ScrollView>
            </View>
            
        );
    }
}