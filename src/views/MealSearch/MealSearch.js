import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
  DrawerLayoutAndroid
} from 'react-native';
import { style, COMMON_BORDER_RADIUS, COMMON_PADDING, COMMON_ELEVATION} from './MealSearch_style';
import { commonStyles} from '../../../res/styles/commonStyles';
import { Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../res/colors';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-deck-swiper'
import LinearGradient from 'react-native-linear-gradient';


import {
    getMealProfileList
} from './MealSearch_controller';

export class MealSearch extends Component{
    constructor() {
        super();
        let {width, height} = Dimensions.get("window");

        this.width = width;
        this.height = height;

        this.state = {
            loading: false,
            swipedAllCards: false,
            swipeDirection: '',
            cardIndex: 1,
            cards: getMealProfileList(this),
            cravedMeals: [],
            highlyCravedMeals: []
        };
    }

    componentDidMount() {
    }

    onSwipedAborted = () => {
    }

    hasReachedThreshold() {
      let reached = false
      let totalMeals = this.state.cravedMeals.length + this.state.highlyCravedMeals.length
      if ((totalMeals % 5 == 0) && totalMeals != 0) {
        reached = true
      }
      return reached
    }

    openMealSelection() {
      let cravedMeals = this.state.cravedMeals
      let highlyCravedMeals = this.state.highlyCravedMeals
      let mealProfileList = []
      mealProfileList = mealProfileList.concat(cravedMeals)
      mealProfileList = mealProfileList.concat(highlyCravedMeals)
      Actions.meal_selection({
        mealProfileList: mealProfileList
      })
    }

    onSwiped = (index, direction) => {
      let mealProfile = this.state.cards[index]
      let cravedMeals = this.state.cravedMeals
      let highlyCravedMeals = this.state.highlyCravedMeals

      if (direction === 'right') {
        cravedMeals.push(mealProfile)
        this.setState({
          cravedMeals: cravedMeals
        })
        console.log(cravedMeals)
      } else if (direction === 'top'){
        highlyCravedMeals.push(mealProfile)
        this.setState({
          highlyCravedMeals: highlyCravedMeals
        })
        console.log(highlyCravedMeals)
      }
      if (this.hasReachedThreshold()) {
        // setTimeout(function () {
          this.openMealSelection()
        // }, 500)
      }
    }

    onSwipedAllCards = () => {
      this.setState({
        swipedAllCards: true
      })
    };

    swipeLeft = () => {
      if (!this.state.swipedAllCards) {
        this.swiper.swipeLeft()
      }
    };

    swipeRight = () => {
      if (!this.state.swipedAllCards) {
        this.swiper.swipeRight()
      }
    };

    swipeTop = () => {
      if (!this.state.swipedAllCards) {
        this.swiper.swipeTop()
      }
    };

    renderCard = (card, index) => {
      let view_style = style(this);
      return (
        <View style={view_style.meal_card}>
          <ImageBackground
            source={card.images[0]}
            style={[{width: '100%', height: '100%' }, view_style.meal_card_inner]}
            imageStyle={view_style.meal_card_image}
          >
            <LinearGradient colors={['rgba(0,0,0,.0)', 'rgba(0,0,0,.6)', 'rgba(0,0,0,.9)']} style={view_style.meal_card_gradient}>
              <Text style={view_style.meal_card_title}>{card.name}</Text>
              <Text style={view_style.meal_card_description}>{card.description}</Text>
              <View style={{height: 12}}></View>             
            </LinearGradient> 
          </ImageBackground>
        </View>
      )
    };

    render() {
        let view_style = style(this);

        let c_style_context = {

            width: this.width*0.8,
            height: this.height

        }

        let c_style = commonStyles(c_style_context)
 
        let navigationView = (
          <View style={view_style.main}>

            <View style={view_style.nav_header}>
              <View style={view_style.nav_header_container}>
                <Text style={view_style.nav_header_text}>Menú</Text>
              </View>
            </View>

            <View style={view_style.nav_options_wrapper}>

              <TouchableOpacity
                onPress={()=>Actions.meal_usual()}
                style={view_style.nav_option}>

                <Text style={view_style.nav_option_text}>Ve la selección de platillos que te han gustado</Text>
              
              </TouchableOpacity> 
              
              <TouchableOpacity
                onPress={()=>Actions.buscar()}
                style={view_style.nav_option}>

                <Text style={view_style.nav_option_text}>Configurar preferencias</Text>
              
              </TouchableOpacity> 

            </View>

            <View style={view_style.nav_footer}>
              <TouchableOpacity
                onPress={()=>Actions.auth()}
                style={view_style.nav_footer_option}>
                
                <Icon name="logout" size={22} color={COLORS.fontColorAccent} />

                <View style={{width: 5}}></View> 

                <Text style={view_style.nav_footer_option_text}>Cerrar Sesión</Text>
              
              </TouchableOpacity>
            </View>

          </View>        
        ); 

        return (
          <DrawerLayoutAndroid style={view_style.main}
            ref={drawer => {
                  this.drawer = drawer
                }}
            drawerWidth={300}
            renderNavigationView={() => navigationView}>
            <Swiper
                ref={swiper => {
                  this.swiper = swiper
                }}
                onSwipedLeft={(index) => this.onSwiped(index,'left')}
                onSwipedRight={(index) => this.onSwiped(index, 'right')}
                onSwipedTop={(index) => this.onSwiped(index, 'top')}
                onTapCard={(index)=>Actions.meal_detail({
                  mealProfile: this.state.cards[index]
                })}
                onSwipedAborted={this.onSwipedAborted}
                onSwipedAll={this.onSwipedAllCards}
                disableBottomSwipe={true}
                cards={this.state.cards}
                cardIndex={this.state.cardIndex}
                cardVerticalMargin={140}
                renderCard={this.renderCard}
                stackSize={2}
                stackSeparation={0}
                infinite={true}
                backgroundColor={COLORS.background}
                animateCardOpacity={false}
                swipeAnimationDuration={350}
                animateOverlayLabelsOpacity
                overlayLabels={{
                  left: {
                    element: <View
                            style={[view_style.btn_judge, {borderColor: COLORS.red, backgroundColor: COLORS.white}]}>
                            <Text style={[view_style.btn_judge_text, {color: COLORS.red}]}>No</Text>
                          </View>,
                    style: {
                      wrapper: {
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-start',
                        paddingTop: 30,
                        paddingRight: 30,
                        elevation: 4
                      }
                    }
                  },
                  right: {
                    element: <View
                              style={[view_style.btn_judge, {borderColor: COLORS.green, backgroundColor: COLORS.white}]}>
                              <Text style={[view_style.btn_judge_text, {color: COLORS.green}]}>Sí </Text>
                            </View>,
                    style: {
                      wrapper: {
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        marginTop: 30,
                        marginLeft: 30,
                        elevation: 4
                      }
                    }
                  },
                  top: {
                    element: <View
                            style={[view_style.btn_judge, {borderColor: COLORS.blue, backgroundColor: COLORS.white}]}>
                            <Text style={[view_style.btn_judge_text, {color: COLORS.blue}]}>Mucho</Text>
                          </View>,
                    style: {
                      wrapper: {
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        elevation: 4
                      }
                    }
                  }
                }}
                >
                <View style={view_style.main}>

                    <Overlay isVisible={this.state.loading}
                      overlayStyle={{height:this.width*0.1, width:this.width*0.1}}
                      >
                      <ActivityIndicator size="large" color={COLORS.primary}></ActivityIndicator>
                    </Overlay>
                    
                    <View style={view_style.custom_appbar}>

                      <TouchableOpacity
                          onPress={()=>this.drawer.openDrawer()}
                          style={view_style.custom_appbar_icon}>
                          <Icon name="menu" size={30} color={COLORS.fontColorBackground} />
                      </TouchableOpacity>
                      
                      <TouchableOpacity
                        onPress={()=>this.openMealSelection()}
                        style={view_style.appbar_center_button}>
                        
                        <Icon name="cards-outline" size={22} color={COLORS.fontColorAccent} />
                        
                        <View style={{width: 5}}></View>    
                        
                        <Text style={view_style.appbar_center_button_text}>Ver mi selección</Text>
                      
                      </TouchableOpacity> 
                      
                      <TouchableOpacity
                        onPress={()=>Actions.main()}
                        style={view_style.appbar_center_button}>
                        
                        <Icon name="close" size={22} color={COLORS.fontColorAccent} />
        
                      </TouchableOpacity> 
                      
                      <View style={{width: 0}}></View>    

                    </View>

                    <View style={view_style.main_banner}>

                      <Text style={view_style.brand_label}> ¿Se te antoja? </Text>

                    </View>

                    <View style={view_style.container_judge}>
                      <View style={view_style.row_judge}>
                        <TouchableOpacity
                          onPress={this.swipeLeft}
                          style={[view_style.btn_judge, {borderColor: COLORS.red}]}>
                          <Text style={[view_style.btn_judge_text, {color: COLORS.red}]}>No</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={this.swipeTop}
                          style={[view_style.btn_judge, {borderColor: COLORS.blue}]}>
                          <Text style={[view_style.btn_judge_text, {color: COLORS.blue}]}>Mucho</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={this.swipeRight}
                          style={[view_style.btn_judge, {borderColor: COLORS.green}]}>
                          <Text style={[view_style.btn_judge_text, {color: COLORS.green}]}>Sí </Text>
                        </TouchableOpacity> 
                      </View>
                    </View>

                </View>
            </Swiper>
            </DrawerLayoutAndroid>
        );
    }
}