import { StyleSheet } from 'react-native';
import COLORS from "../colors";

export default StyleSheet.create({
  
  main_container:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:COLORS.menu,
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
    backgroundColor: COLORS.secondary,
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
    backgroundColor: COLORS.primary,
    color: COLORS.secondary,
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
    paddingLeft: 50,
    paddingRight: 50,
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
    color: '#fff'
  },
  botonMenuText:{
    color:'#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
      
});