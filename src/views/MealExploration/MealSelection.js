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
import {style, COMMON_BORDER_RADIUS, COMMON_PADDING, COMMON_ELEVATION} from './MealExploration_style';
import commonStyles from '../../../res/commonStyles';
import { Input, Overlay, colors } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../res/colors';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

export class MealSelection extends Component{
    constructor(props) {
        super(props);
        let {width, height} = Dimensions.get("window");

        this.width = width;
        this.height = height;

        this.state = {
            loading: false,
            mealProfileList: this.props.mealProfileList
        };
    }

    componentDidMount() {
        console.log(this.state.mealProfileList)
    }

    renderList(mealProfile){

        //Sirve para renderear la lista        
        let c_style = commonStyles(this);
        
        return(
            <TouchableOpacity onPress={() => Actions.meal_detail({mealProfile: mealProfile})}>
                <View style={{
                    width: this.width * 0.4,
                    aspectRatio: 300 / 400,
                    margin: 10,
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
                            colors={['rgba(0,0,0,.0)', 'rgba(0,0,0,.7)', 'rgba(0,0,0,.9)']} 
                            style={{
                                aspectRatio: 400 / 300,
                                borderRadius: 20,
                                justifyContent: "flex-end",
                                padding: 10
                            }}>
                            <Text style={{
                                color: COLORS.fontColorWhite,
                                fontFamily: c_style.secondaryFont,
                                fontSize: 18,
                                textAlign: "justify",
                                textAlign:"center"
                                }}>
                                {mealProfile.name}

                            </Text>
                        </LinearGradient> 
                    </ImageBackground>
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

        let dataToRender = this.state.mealProfileList;
 
        return (
            <View style={view_style.main}>
                <Overlay isVisible={this.state.loading}
                    overlayStyle={{height:this.width*0.1, width:this.width*0.1}}
                    >
                    <ActivityIndicator size="large" color={COLORS.primary}></ActivityIndicator>
                </Overlay>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    width: this.width,
                    }}>
                    <TouchableOpacity
                        onPress={()=>Actions.pop()}
                        style={{
                            padding: 10,
                            paddingBottom: 0,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Icon name="close" size={30} color={COLORS.fontColorBackground} />
                    </TouchableOpacity>
                </View>
                
                <View style={{
                    justifyContent:"center"}}>
                    <Text style={{
                        color:COLORS.fontColorAccent,
                        fontSize: 26,
                        fontFamily: c_style.specialFont
                        }}>
                        ¿Cuál se te antoja más?
                    </Text>
                </View>
                
                <View style={{
                    justifyContent:"flex-start"}}>
                    <Text style={{
                        color:COLORS.fontColorBackground,
                        fontFamily: c_style.secondaryFont,
                        fontSize: 18,
                        }}>
                        Tu selección
                    </Text>
                </View>
                
                <View style={{height: 10}}></View>
                
                <ScrollView
                    contentContainerStyle={{
                        justifyContent: "flex-start",
                        alignItems: "center"
                    }} 
                    style={{
                        // height: this.height*0.85, 
                        width: this.width, 
                        backgroundColor: COLORS.background,
                        flexDirection: "column",
                    }}>

                    
                    <View style={{
                        backgroundColor: COLORS.background,
                        width: this.width,
                        }}>
                        <FlatList
                            contentContainerStyle={{
                                paddingTop: 10, 
                                alignItems: "center",
                            }}
                            style={{
                                width: this.width,
                            }}
                            data={dataToRender}
                            //ListEmptyComponent={this.renderListEmpty()}
                            renderItem={({item})=>{
                                                                
                                return this.renderList(item);

                            }}
                            keyExtractor={item => item.name}
                            extraData={this.state.dataToRender}
                            ListFooterComponent={() => <View></View>}
                            ListFooterComponentStyle={{height: 30}} 
                            numColumns= {2} 
                        />
                    </View>
                </ScrollView>

                <View style={{
                    flexDirection:"row",
                    backgroundColor:COLORS.background,
                    justifyContent:"center",
                    alignItems:"center"}}>
                    <View style={{flex:3}}>
                        <TouchableOpacity
                        //onPress={()=>this.verifyNumberAndRequestSMS()}
                            style={{width: this.width*0.45,
                                height: this.height*0.08,
                            // backgroundColor: COLORS.container,
                            borderRadius:30,
                            justifyContent: "center",
                            alignContent:"center",
                            alignSelf:"center",
                            borderWidth: 0,
                            borderColor: COLORS.accent}}>

                            <Text style={{
                                textAlign:"center",
                                color:COLORS.fontColorAccent,
                                fontSize: 20,
                                fontFamily: c_style.secondaryFont
                                }}>Descartar
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex:5}}>
                        <TouchableOpacity
                            //onPress={()=>this.verifyNumberAndRequestSMS()}
                            style={{width: this.width*0.54,
                                height: this.height*0.06,
                            backgroundColor: COLORS.container,
                            borderRadius:30,
                            justifyContent: "center",
                            alignContent:"center",
                            alignSelf:"center",
                            borderWidth: 0,
                            borderColor: COLORS.accent
                            }}
                            
                            onPress={()=>Actions.pop()}>

                            <Text style={{
                                textAlign:"center",
                                color:COLORS.fontColorAccent,
                                fontSize: 20,
                                fontFamily: c_style.secondaryFont
                                }}>
                                Seguir buscando
                            </Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        );
    }
}