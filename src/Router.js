import React from 'react';
import {
    Scene,
    Stack,
    Router,
    Actions
} from 'react-native-router-flux';
import { 
    StyleSheet,
    StatusBar,
    Text
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Menu from './views/Menu';
import Filtro from './views/Buscar/Filtro';
import Preferencias from './views/Info/Preferencias';
import Ubicación from './views/Info/Ubicación';
import { MealExploration } from './views/MealExploration/MealExploration';
import {MealSelection} from './views/MealExploration/MealSelection';
import { MealDetail } from './views/MealDetail/MealDetail';

// import { PhoneRegistration } from './views/PhoneRegistration/PhoneRegistration';
// import { PhoneRegistrationOTP } from './views/PhoneRegistration/PhoneRegistrationOTP';
// import { ProfileCompletion } from './views/ProfileCompletion/ProfileCompletion';

// import {Landing} from './views/Landing/Landing';

import COLORS from '../res/colors';

export default class RouterComponent extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            loading: true,
            back_color: 'blue'
        };
    }

    async componentWillMount() {
        this.getAsync();
    }

    // componentDidMount() {
    //     this.interval = setInterval(() => (global.skip) ? this.setState({loading: false}) : console.log("Nadita papita") , 5000);             
    // }

    getAsync = async () => {
        try {
            let mode = await AsyncStorage.getItem("A_MODE")
            global.style = mode
            global.userId = await AsyncStorage.getItem("A_USUARIO")
            switch (global.style) {
                case 'dark':
                    this.setState({back_color: 'rgb(13, 97, 114)'});
                    break;
                case 'light': 
                    this.setState({back_color: '#1AA6A8'});
                    break;
                default: 
                    this.setState({back_color: '#1AA6A8'});
                    break;
            }
        } catch(e) {
            console.log("####### FALLASSSSSSSS" + e)
        }
    }

    handle_mode_change() {
        if (global.skip) {
            switch (global.style) {
                case 'dark':
                    this.setState({back_color: 'rgb(13, 97, 114)'});
                    break;
                case 'light': 
                    this.setState({back_color: '#1AA6A8'});
                    break;
                default: 
                    this.setState({back_color: '#1AA6A8'});
                    break;
            }
            global.skip = false;
            Actions.main()
        }
    }

    render() {
        return (
        <Router tintColor='white' navigationBarStyle={[style.navBar, {backgroundColor: COLORS.primary}]} titleStyle={{color: "white"}}>
            <Stack hideNavBar key="root">
                {/* <Stack
                    key="auth"
                    type="reset"
                    style={style.navBarStyle}
                > 
                    <Scene
                        key = "landing"
                        component = {Landing}
                        hideNavBar = {true}
                        initial
                        type = 'reset'
                        />
                        
                    <Scene
                        key = "phone_registration"
                        component = {PhoneRegistration}
                        hideNavBar = {true}
                        />

                    <Scene
                        key = "phone_registration_otp"
                        component = {PhoneRegistrationOTP}
                        hideNavBar = {true}
                        />

                </Stack>

                <Stack
                    key="profile_completion_stack"
                    type="reset"
                    style={style.navBarStyle}
                > 
                    <Scene
                        key = "profile_completion"
                        component = {ProfileCompletion}
                        hideNavBar = {true}
                        />
                </Stack> */}

                             
                <Stack
                    key="info"
                    hideNavBar={true}
                    style={style.titleStyle}
                >
                    
                    <Scene
                        hideNavBar
                        title=""
                        key="preferencias"
                        component={Preferencias}
                        initial                        
                    />
                    <Scene
                        hideNavBar
                        title=""
                        key="ubicación"
                        component={Ubicación}                  
                    />

                </Stack>


                <Stack
                    key="buscar"
                    hideNavBar={true}
                    style={style.titleStyle}
                >
                    
                    <Scene
                        hideNavBar
                        title=""
                        key="filtro"
                        component={Filtro}
                        initial                        
                    />

                </Stack>

                <Stack
                    key="main"
                    type="reset"
                    hideNavBar={true}
                    style={style.titleStyle}
                >
                    
                    <Scene
                        hideNavBar
                        title=""
                        key="home_screen"
                        component={Menu}
                        // initial                        
                    />

                    <Scene
                        hideNavBar
                        title=""
                        key="meal_exploration"
                        component={MealExploration}
                        initial              
                    />
                    
                    <Scene
                        hideNavBar
                        title=""
                        key="meal_selection"
                        component={MealSelection}              
                    />

                    <Scene
                        hideNavBar
                        title=""
                        key="meal_detail"
                        component={MealDetail}              
                    />

                </Stack>
                
            </Stack>

        </Router>
    )}
};

const style = StyleSheet.create({
    navBarStyle: {
        top: StatusBar.currentHeight,
        backgroundColor: "#1aa6a8",
        color: "white"
    },
    navBar: {
        backgroundColor: "#1aa6a8",
        color: "#FFF",
        fontWeight: "normal"
    },
    barButtonIconStyle: {
        tintColor: "#FFF"
    },
    titleStyle: {
        flexDirection: 'row',
        width: 200
    }
});  
