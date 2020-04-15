import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';
import { style, COMMON_BORDER_RADIUS, COMMON_PADDING, COMMON_ELEVATION} from './MealDetail_style';
import { commonStyles} from '../../../res/styles/commonStyles';
import { Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../res/colors';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-deck-swiper'
import LinearGradient from 'react-native-linear-gradient';

import {
    getMealProfileList
} from './MealDetail_controller';

export class MealDetail extends Component{
    constructor(props) {
        super(props);
        let {width, height} = Dimensions.get("window");

        this.width = width;
        this.height = height;

        this.state = {
            mealProfile: this.props.mealProfile,
            loading: false,
            swipedAllCards: false,
            swipeDirection: '',
            cardIndex: 0,
            cards: getMealProfileList(this)
        };
    }

    componentDidMount() {
      console.log(this.state.mealProfile)
    }

    render() {
        let view_style = style(this);

        let c_style_context = {

            width: this.width*0.8,
            height: this.height

        }

        let c_style = commonStyles(c_style_context)

        let mealProfile = this.state.mealProfile
 
        return (

          <View style={view_style.main}>
          <ScrollView >

              <Overlay isVisible={this.state.loading}
                overlayStyle={{height:this.width*0.1, width:this.width*0.1}}
                >
                <ActivityIndicator size="large" color={COLORS.primary}></ActivityIndicator>
              </Overlay>

              <View style={view_style.meal_wrapper}>
                <View style={view_style.meal_detail_card}>
                  <ImageBackground
                    source={mealProfile.images[0]}
                    style={[{width: '100%', height: '100%' }, view_style.meal_detail_card_inner]}
                    imageStyle={view_style.meal__detail_card_image}
                  >
                    <LinearGradient colors={['rgba(0,0,0,.0)', 'rgba(0,0,0,.3)', 'rgba(0,0,0,.7)']} style={view_style.meal_card_gradient}>
                    </LinearGradient> 
                  </ImageBackground>
                </View>
              </View>

              <View style={view_style.meal_detail_container}>
                <Text style={view_style.meal_detail_title}>{mealProfile.name}</Text>
                <Text style={view_style.meal_detail_description}>{mealProfile.description}</Text>
                <Text style={view_style.meal_detail_supplier}>{mealProfile.supplierName}</Text>
              </View>

              <View style={view_style.meal_detail_container}>
                <View style={view_style.meal_detail_tile}>
                  <Icon name="cash" size={25} color={COLORS.fontColorBackground} />
                  <Text style={view_style.meal_detail_tile_text}>Cuesta <Text style={[view_style.secondary_bold, {color: COLORS.green}]}>{mealProfile.price} MXN</Text></Text>
                </View>

                <View style={view_style.meal_detail_tile}>
                  <Icon name="home" size={25} color={COLORS.fontColorBackground} />
                  <Text style={view_style.meal_detail_tile_text}>Maneja servicio a domicilio</Text>
                </View>

                <View style={view_style.meal_detail_tile}>
                  <Icon name="map-marker" size={25} color={COLORS.fontColorBackground} />
                  <Text style={view_style.meal_detail_tile_text}>Se encuentra a {mealProfile.distanceKm} km ({mealProfile.distanceTime} mins)</Text>
                </View>              
              </View>
              
              <View style={view_style.meal_detail_container}>
                <Text style={view_style.meal_detail_subtitle}>Servicio a domicilio</Text>
                {mealProfile.contactNumbers.map(contactNumber => {
                  return (
                    <View style={view_style.meal_detail_phone}>
                      <Text style={view_style.meal_detail_phone_text}>{contactNumber}</Text>
                      <TouchableOpacity>
                        <Icon name="phone" size={25} color={COLORS.fontColorBackground} />
                      </TouchableOpacity>
                    </View>
                  );
                })}                
              </View>
              
              <View style={view_style.meal_detail_container}>
                <Text style={view_style.meal_detail_subtitle}>Ubicación</Text>
                <Text style={view_style.meal_detail_description}>{mealProfile.address}</Text>
                <View style={{height: 10}}></View>
                <ImageBackground
                  source={require('../../../res/images/map_tacos_pepe.png')}
                  style={[{width: '100%' }, view_style.supplier_map_image]}
                  imageStyle={view_style.supplier_map_image}
                >
                  <LinearGradient colors={['rgba(0,0,0,.3)', 'rgba(0,0,0,.3)']} style={view_style.supplier_map_gradient}>
                  </LinearGradient> 
                </ImageBackground>
              </View>

              <View style={view_style.meal_detail_container}>
                
                <TouchableOpacity
                  onPress={this.swipeTop}
                  style={[view_style.btn_share, {color: COLORS.accent}]}>
                  <Icon name="share" size={30} color={COLORS.green} />
                  <View style={{height: 10}}></View>

                  <Text style={[view_style.btn_share_text, {color: COLORS.green}]}>Compartir</Text>
                </TouchableOpacity>
                <View style={{height: 10}}></View>
              </View>

            </ScrollView>

          </View>

        );
    }
}