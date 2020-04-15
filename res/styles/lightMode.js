import { StyleSheet } from 'react-native';
import COLORS from "../colors";

export default StyleSheet.create({
  
  main_container:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:COLORS.background,
    flex:1

  },

  name:{

    fontSize:25,
    margin:10,
    textAlign:"center",
    fontWeight: 'bold',
    color: 'black'
    
  },

  content_style:{

    flexWrap:"wrap",
    flexDirection:"row",
    alignItems:"center", //estos ultimos centran el contenido
    justifyContent: "center" //
  },
  
  celdaOption: {
    height: 40
  },
  menuOption: {
    paddingVertical:10,
    marginHorizontal: 20,
    color: 'black',
    fontSize: 16,
    width: 260,
    borderTopWidth: 1,
    borderColor: 'black' 
  },
  menuOptionFinal:{
    padding: 10,
    marginHorizontal: 20,
    color: 'black',
    fontSize: 16,
    width: 260,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black'
  },
  texto:{
    alignItems: 'center',
    justifyContent: 'space-between',
    margin:5
  },

  // drawer: {
  //   justifyContent: 'space-between'
  // },

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "space-around"
  },
  header:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  ScrollContainer:{
    height: '100%',
  },
  contentContainer: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loadingContainerCommon: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center"
  },
  logo_image: {
    height: 260,
    width: 260,
  },

  Overlay: {
    backgroundColor: "rgba(255, 255, 255, 1)"
  },

  // Router Navbar
  navBar: {
    backgroundColor: COLORS.navBar,
    color: COLORS.fontColorWhite,
    fontWeight: "normal"
  },

  //login
  fontLogin: {
    padding: 3,
    color: 'black'
  },
  login_logo_image: {
    height: 146,
    width: 190,
    marginBottom: 22
  },
  login_textInputStyle: {
    flex: 1,
    padding: 6,
    fontSize: 16,
    backgroundColor: 'rgb(255,166,1)',
    elevation: 1
  },

  // Menu
  profilepicWrap:{
    marginTop:1,
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.secondary,
    borderWidth: 8,
  },
  opcion:{
    height: 80,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  opcionRow:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 3
  },
  opcionGrande:{
    height: 240,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  opcionSlider:{
    width: 300, 
    height: 40
  },
  botonMenu:{
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 10, // Android
  },
  botonNavBar:{
    padding: 5,
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 10, // Android
    color: '#fff', 
    backgroundColor: COLORS.accent
  },
  textNavBar:{
    alignItems: 'center',
    fontSize: 18,
    color: COLORS.fontColorNavBar
  },
  botonMenuText:{
    color: COLORS.fontColorWhite,
    fontSize: 18,
    fontWeight: 'bold',
  },
  Subtítulo:{
    alignItems: 'center',
    justifyContent: 'space-between',
    margin:5,
    fontSize: 18,
    color: COLORS.fontColorWhite
  },
  Título:{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin:5,
    fontSize: 24,
    color: COLORS.accent,
    fontWeight: "bold",
    paddingBottom: 15
    // backgroundColor: 'blue'
  },
  CuadroDescripción:{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin:5,
    fontSize: 20,
    color: COLORS.fontColorGreyContainer,
    backgroundColor: COLORS.container,
    padding: 10,
    borderRadius: 25
  },
  // App bar
  custom_appbar_overlay: {
      width: '100%',
      height: 60,
      backgroundColor: COLORS.background,
      flexDirection: 'row',
      justifyContent: "space-between"
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
  // Alternative main
  main: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: COLORS.background,
  },
  main_banner: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
  },
});