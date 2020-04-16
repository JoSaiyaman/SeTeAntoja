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
            fontSize: 40,//50,
            color: COLORS.fontColorBrand
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
            //backgroundColor: COLORS.accent,
            backgroundColor: COLORS.buttonBackground,
            // padding: 3,
            paddingHorizontal: 12,
            borderRadius: 8,
            elevation: 4,
            flexDirection: "row",
            alignItems: "center"
        },
        appbar_center_button_text: {
            color: COLORS.fontColorAccent,
            fontSize: 20, //24,
            fontFamily: commonStyles(context).secondaryFont,
        },
        nav_options_wrapper: {
            padding: 14,
            flex: 1,
            justifyContent: "flex-start"

        },  
        nav_option: {
            width: '100%',
            marginBottom: 12,
            backgroundColor: COLORS.buttonBackground,
            borderRadius: 8,
            elevation: 4,
            flexDirection: "row",
            alignItems: "center",
            padding: 12,
        },
        nav_option_text: {
            color: COLORS.fontColorAccent,
            fontSize: 20, //24,
            fontFamily: commonStyles(context).secondaryFont,
        },
        nav_footer: {
            padding: 10,
        },
        nav_footer_option: {
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
        },
        nav_footer_option_text: {
            color: COLORS.fontColorAccent,
            fontSize: 20, //24,
            fontFamily: commonStyles(context).secondaryFont,
        },
        nav_header: {
            padding: 20,
            paddingTop: 30
        },
        nav_header_container: {
            flexDirection: "row",
            alignItems: "flex-start",
        },
        nav_header_text: {
            color: COLORS.fontColorAccent,
            fontSize: 28,
            fontFamily: commonStyles(context).secondaryFont,
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
            padding: 15
        },  
        row_judge: {
            aspectRatio: 300 / 70,
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        btn_judge: {
            elevation: 4,
            // borderWidth: 5,
            backgroundColor: COLORS.buttonBackground,
            paddingVertical: 16,
            paddingHorizontal: 18,
            borderRadius: 50,
        },
        btn_judge_text: {
            fontFamily: commonStyles(context).specialFont,
            fontSize: 30//38,
        }
    });

}