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
  ImageBackground
} from 'react-native';
import {style, COMMON_BORDER_RADIUS, COMMON_PADDING, COMMON_ELEVATION} from './MealUsual_style';
import commonStyles from '../../../res/commonStyles';
import { Input, Overlay, colors } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../res/colors';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import {
    getMealProfileList
} from '../MealExploration/MealExploration_controller';

export class MealUsual extends Component{
    constructor() {
        super();
        let {width, height} = Dimensions.get("window");
        let mealProfileList = getMealProfileList()

        this.width = width;
        this.height = height;

        this.state = {
            loading: false,
            recientes: [
                mealProfileList[0],
                mealProfileList[1],
                mealProfileList[2],
            ],
            favoritos: [
                mealProfileList[3],
                mealProfileList[4],
            ],
            recurrentes: [
                mealProfileList[0],
                mealProfileList[1],
            ],
        };
    }

    componentDidMount() {
    }

    renderList(mealProfile){        
        return(
            <TouchableOpacity onPress={() => Actions.meal_detail({mealProfile: mealProfile})}>
                <View style={{
                    aspectRatio: 280 / 400,
                    }}>
                    <ImageBackground
                        source={mealProfile.images[0]}
                        imageStyle={{
                            borderRadius: 20
                        }}
                        style={{width: '100%', height: '100%',
                            justifyContent: "flex-end",
                            backgroundColor: 'black',
                            borderRadius: 20,
                            // borderRadius
                        }}>
                        <LinearGradient 
                            colors={['rgba(0,0,0,.0)', 'rgba(0,0,0,.3)', 'rgba(0,0,0,.7)']} 
                            style={{
                                aspectRatio: 400 / 300,
                                borderRadius: 20,
                            }}>
                        </LinearGradient> 
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        )
    }

    renderListFavorites(mealProfile){

        //Sirve para renderear la lista
        let c_style = commonStyles(this);

        return(

            <TouchableOpacity 
            onPress={() => Actions.meal_detail({mealProfile: mealProfile})} 
            style={{
                width:this.width * 0.85,
                height:this.height * 0.15,
                flexDirection: "row",
                justifyContent:"flex-start",
                backgroundColor:"white",
                borderRadius:10,
                marginBottom:10,      
                backgroundColor: COLORS.container,
                }}>

                <View style={{width:this.width * 0.40,
                    height:this.height * 0.15,
                    flexDirection:"row",
                    justifyContent:"flex-start",
                    alignContent:"center",
                    alignItems:"center",
                    color:"white",
                    marginLeft:20
                    }}>

                    <View
                        style={{
                            width:this.width*0.20,
                            height: this.height*0.12,
                        }}>
                        <ImageBackground
                            source={mealProfile.images[0]}
                            imageStyle={{
                                borderRadius: 10
                            }}
                            style={{
                                width: '100%', height: '100%',
                                justifyContent: "flex-end",
                                backgroundColor: 'black',
                                borderRadius: 10,
                            }}>
                            <LinearGradient colors={['rgba(0,0,0,.0)', 'rgba(0,0,0,.3)', 'rgba(0,0,0,.7)']} 
                                style={{
                                    aspectRatio: 400 / 300,
                                    borderRadius: 10,
                                }}>
                            </LinearGradient> 
                        </ImageBackground>
                    </View>

                    <View style={{
                        flexDirection:"column",
                        marginLeft: 20,
                        width: this.width*0.5
                        }}>
                        <Text style={{
                            color: COLORS.fontColorWhite,
                            fontSize: 18,
                            fontFamily: c_style.secondaryFontBold,
                            textAlign: "left"
                        }}>
                            {mealProfile.name}
                        </Text>
                        <Text style={{
                            color: COLORS.fontColorBackground,
                            fontFamily: c_style.secondaryFont,
                            fontSize: 16,
                            textAlign: "left"}}>

                            {mealProfile.supplierName}
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

        let c_style = commonStyles(this);

        let dataToRender = this.state.recientes;
        let listaFavoritos = this.state.favoritos;
        let listaRecurrentes = this.state.recurrentes;
 
        return (
            <ScrollView style={view_style.main}>

                <Overlay isVisible={this.state.loading}
                    overlayStyle={{height:this.width*0.1, width:this.width*0.1}}
                    >
                    <ActivityIndicator size="large" color={COLORS.primary}></ActivityIndicator>
                </Overlay>
                
                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <TouchableOpacity
                        onPress={()=>Actions.pop()}
                        style={{
                            padding: 10,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Icon name="close" size={30} color={COLORS.fontColorBackground} />
                    </TouchableOpacity>
                </View>
                
                <View style={{
                    width: this.width, 
                    backgroundColor: COLORS.background,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems:"center"}}>

                    {/* <View style={{height: 25}}></View> */}

                    <View style={{
                        justifyContent:"center"}}>
                        <Text style={{
                            fontFamily: c_style.specialFont,
                            fontSize: 50,
                            color: COLORS.accent
                            }}>
                            Antojos
                        </Text>
                    </View>

                    <View style={{
                        marginVertical: 10,
                        width: this.width * 0.85,
                        justifyContent:"flex-start",
                        alignItems: "flex-start"
                        }}>
                        <Text style={{
                            color: COLORS.fontColorAccent,
                            fontFamily: c_style.secondaryFont,
                            fontSize: 20,
                        }}>
                            Recientes
                        </Text>
                    </View>

                    <View style={{
                        width: this.width,
                        paddingHorizontal: 20,
                        flexDirection: "row",
                        aspectRatio: 400 / 150,
                        justifyContent: "space-evenly"
                        }}>
                        {dataToRender.map(mealProfile => {
                            return (
                                this.renderList(mealProfile)
                            );
                        })}  
                    </View>

                    <View style={{height: 10}}></View>

                    <View style={{height: this.height*0.05,
                        width: this.width * 0.85,
                        justifyContent:"flex-start",
                        alignItems: "flex-start"}}>
                        <Text style={{
                            color: COLORS.fontColorAccent,
                            fontFamily: c_style.secondaryFont,
                            fontSize: 20,
                            }}>
                            Se te antojaron mucho
                        </Text>
                    </View>

                    <View style={{
                        flex:1,
                        justifyContent:"flex-start",
                        alignContent:"center"
                        }}>
                        <FlatList
                            data={listaFavoritos}
                            //ListEmptyComponent={this.renderListEmpty()}
                            renderItem={({item})=>{
                                
                                return this.renderListFavorites(item);

                            }}
                            keyExtractor={item => item.name}
                            extraData={this.state.listaFavoritos}
                            ListFooterComponent={() => <View></View>}
                            numColumns= {1} 
                        />    
                    </View>

                    <View style={{
                        height: this.height*0.05,
                        width: this.width * 0.85,
                        justifyContent:"flex-start",
                        alignItems: "flex-start"
                        }}>
                        <Text style={{
                            color: COLORS.fontColorAccent,
                            fontFamily: c_style.secondaryFont,
                            fontSize: 20,
                            }}>
                            Se te han antojado
                        </Text>
                    </View>
                    
                    <View style={{
                        flex:1,
                        justifyContent:"flex-start",
                        alignContent:"center"
                        }}>
                        <FlatList
                            data={listaRecurrentes}
                            //ListEmptyComponent={this.renderListEmpty()}
                            renderItem={({item})=>{
                                
                                return this.renderListFavorites(item);

                            }}
                            keyExtractor={item => item.name}
                            extraData={this.state.listaRecurrentes}
                            ListFooterComponent={() => <View></View>}
                            numColumns= {1} 
                        />
                    </View>

                </View>

                <View style={{height: 20}}></View>
                
            </ScrollView>
        );
    }
}