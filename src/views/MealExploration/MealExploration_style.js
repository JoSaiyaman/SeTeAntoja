import {StyleSheet} from 'react-native';
import COLORS from '../../../res/colors';
import commonStyles from '../../../res/commonStyles';

export const COMMON_ELEVATION = 15;
export const COMMON_PADDING = 13;
export const COMMON_BORDER_RADIUS = 10;
export const style = (context)=>{

    let {width, height} = context;

    if(width == null || height == null){

        throw new Error("MealExploration_style: width and height must be defined")

    }

    return StyleSheet.create({
        main: {
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: COLORS.background,
        },
        brand_label: {
            fontFamily: commonStyles(context).specialFont,
            fontSize: 50,
            color: 'white'
        },
        custom_appbar: {
            width: '100%',
            height: 60,
            backgroundColor: COLORS.navBar,
            flexDirection: 'row',
            justifyContent: "space-between"
        },
        custom_appbar_icon: {
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
        },
        appbar_center_button: {
            marginTop: 12,
            height: 38,
            backgroundColor: COLORS.accent,
            padding: 2,
            paddingHorizontal: 12,
            borderRadius: 8,
            elevation: 4,
            flexDirection: "row"
        },
        appbar_center_button_text: {
            color: COLORS.primaryFontColor,
            fontSize: 24,
            fontFamily: commonStyles(context).specialFont,
        },
        main_banner: {
            height: 70,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
        },
        meal_card: {
            elevation: 4,
            borderRadius: 20,
            justifyContent: "center",
            backgroundColor: "white",
            aspectRatio: 300 / 400
        },
        meal_card_inner: {
            justifyContent: "flex-end",
            backgroundColor: 'black',
            borderRadius: 20,
        },
        meal_card_image: {
            borderRadius: 21,
        },
        meal_card_gradient: {
            aspectRatio: 400 / 300,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 20,
            justifyContent: 'flex-end'
        },
        meal_card_title: {
            fontFamily: commonStyles(context).secondaryFontBold,
            color: COLORS.fontColorWhite,
            fontSize: 20
        },
        meal_card_description: {
            fontFamily: commonStyles(context).secondaryFont,
            color: COLORS.fontColorWhite,
            fontSize: 16
        },
        container_judge: {
            flex: 1,
            // backgroundColor: 'pink',
            justifyContent: 'flex-end',
            alignContent: 'center',
            alignItems: 'center',
            padding: 25
        },  
        row_judge: {
            aspectRatio: 300 / 70,
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        btn_judge: {
            borderWidth: 3,
            backgroundColor: 'transparent',
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderRadius: 10,
        },
        btn_judge_text: {
            fontFamily: commonStyles(context).specialFont,
            fontSize: 35,
        }
    });

}