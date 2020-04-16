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
import { Actions } from 'react-native-router-flux';

export class MealUsual extends Component{
    constructor() {
        super();
        let {width, height} = Dimensions.get("window");

        this.width = width;
        this.height = height;

        this.state = {
            loading: false,
            recientes: [
                {"name":"La matona"},
                {"name":"Tacos de barbacha"},
                {"name":"Burro San Mario"},
            ],
            favoritos: [
                {"name":"La matona","business":"Las matonas burguers & Doggos","price":"79.00 MXN"},
                {"name":"Tacos e barbacha adobada bien mexicana","business":"Tacos Don Ramón","price":"60.00 MXN"},
            ],
            recurrentes: [
                {"name":"La matona","business":"Las matonas burguers & Doggos","price":"79.00 MXN"},
                {"name":"Tacos e barbacha adobada bien mexicana","business":"Tacos Don Ramón","price":"60.00 MXN"},
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
                width: this.width*0.25,
                height: this.height*0.2,
                marginHorizontal: this.width*0.02,
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

    renderListFavorites(name, business){

        //Sirve para renderear la lista
        
        let onClick = ()=>{
            
        }

        return(

            <TouchableOpacity 
            //onPress={onClick.bind(this)} 
            style={{width:this.width * 0.85,
                height:this.height * 0.15,
                flexDirection: "row",
                justifyContent:"flex-start",
                backgroundColor:"white",
                borderRadius:0,
                marginBottom:10,      
                backgroundColor: COLORS.accent,}}>

                <View style={{width:this.width * 0.40,
                    height:this.height * 0.15,
                    flexDirection:"row",
                    justifyContent:"flex-start",
                    alignContent:"center",
                    alignItems:"center",
                    color:"white",
                    marginLeft:20}}>

                    <View
                        style={{width:this.width*0.20,
                            height: this.height*0.12,
                            backgroundColor: "black",
                        
                        }}>
                    </View>
                    <View style={{
                        flexDirection:"column",
                        marginLeft: 20,
                        width: this.width*0.5
                        }}>
                        <Text style={{color:"white",
                            fontSize: 18,
                            fontWeight:"bold",
                            textAlign: "left"}}>

                            {name}

                        </Text>
                        <Text style={{color:"white",
                            fontSize: 16,
                            textAlign: "left"}}>

                            {business}
                        </Text>
                    </View>
                </View>                
            </TouchableOpacity>            
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

        let dataToRender = this.state.recientes;
        let listaFavoritos = this.state.favoritos;
        let listaRecurrentes = this.state.recurrentes;
 
        return (
            <View style={view_style.main}>
                <Overlay isVisible={this.state.loading}
                    overlayStyle={{height:this.width*0.1, width:this.width*0.1}}
                    >
                    <ActivityIndicator size="large" color={COLORS.primary}></ActivityIndicator>
                </Overlay>

                <ScrollView>
                <View style={{height: this.height*1.5, 
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
                            Lo que se te ha antojado
                        </Text>
                    </View>
                    <View style={{height: this.height*0.02,
                    width: this.width * 0.85,
                    justifyContent:"flex-start",
                    alignItems: "flex-start"}}>
                        <Text style={{color:COLORS.fontColorAccentContrast,
                            fontSize: 20,
                            fontWeight: "bold",}}>
                            Recientes
                        </Text>
                    </View>
                    <View style={{height:this.height*0.28,
                    justifyContent:"center",
                        alignContent:"center"}}>
                        <FlatList
                            data={dataToRender}
                            //ListEmptyComponent={this.renderListEmpty()}
                            renderItem={({item})=>{
                                
                                let name = item.name;
                                
                                return this.renderList(name);

                            }}
                            keyExtractor={item => item.name}
                            extraData={this.state.dataToRender}
                            ListFooterComponent={() => <View></View>}
                            numColumns= {3} />
                    </View>
                    <View style={{height: 10}}></View>
                    <View style={{height: this.height*0.05,
                    width: this.width * 0.85,
                    justifyContent:"flex-start",
                    alignItems: "flex-start"}}>
                        <Text style={{color:COLORS.fontColorAccentContrast,
                            fontSize: 20,
                            fontWeight: "bold",}}>
                            Tus favoritos
                        </Text>
                    </View>
                    <View style={{flex:1,
                        justifyContent:"flex-start",
                            alignContent:"center"}}>
                            <FlatList
                                data={listaFavoritos}
                                //ListEmptyComponent={this.renderListEmpty()}
                                renderItem={({item})=>{
                                    
                                    let name = item.name;
                                    let business = item.business;
                                    
                                    return this.renderListFavorites(name, business);

                                }}
                                keyExtractor={item => item.name}
                                extraData={this.state.listaFavoritos}
                                ListFooterComponent={() => <View></View>}
                                numColumns= {1} />
                        
                    </View>
                    <View style={{height: this.height*0.05,
                    width: this.width * 0.85,
                    justifyContent:"flex-start",
                    alignItems: "flex-start"}}>
                        <Text style={{color:COLORS.fontColorAccentContrast,
                            fontSize: 20,
                            fontWeight: "bold",}}>
                            Lo más popular
                        </Text>
                    </View>
                    
                        <View style={{flex:1,
                            justifyContent:"flex-start",
                            alignContent:"center"}}>
                            <FlatList
                                data={listaRecurrentes}
                                //ListEmptyComponent={this.renderListEmpty()}
                                renderItem={({item})=>{
                                    
                                    let name = item.name;
                                    let business = item.business;
                                    
                                    return this.renderListFavorites(name, business);

                                }}
                                keyExtractor={item => item.name}
                                extraData={this.state.listaRecurrentes}
                                ListFooterComponent={() => <View></View>}
                                numColumns= {1} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}