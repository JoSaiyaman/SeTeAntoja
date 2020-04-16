// import {Actions} from 'react-native-router-flux';
// import {api} from '../../../res/api/api';
// import {OK, FAIL} from '../../../res/api/hostInfo';
// import {Login} from '../../../res/api/models/Login';
// import {setLoginInfo} from '../../../res/redux/actions/set_login';
// import {Alert} from 'react-native';

// export function goToPhoneConfirmationView(normalizedPhone){

//     Actions.phone_registration_otp({phoneNumber: normalizedPhone});

// }

export  function getMealProfileList(context){

    return [
        {
            name: "Hamburguesa NYC",
            description: "Deliciosa hamburguesa llena de quesos finos importados. Inlcuye tocino y la mas fina carne.",
            price: 80,
            currency: 'MXN',
            supplierName: 'Tacos Pepe',
            hasDeliveryService: true,
            hasUberEatsService: false,
            hasRappiService: true,
            distanceKm: 8.3,
            distanceTime: 23,
            contactNumbers: [
                '8113668742',
                '81364975'
            ],
            longitude: 25.660779,
            latitude: -100.327393,
            address: 'Libertad 1124, Independencia, 64720 Monterrey, N.L',
            images: [
                require('../../../res/images/food_burger_1.jpg'),
            ]
        },
        {
            name: "Sopes de chorizo vegano",
            description: "Chorizo VEGANO perfectamente sabroso ¡súper saludable!",
            price: 48,
            currency: 'MXN',
            supplierName: 'Tacos Pepe',
            hasDeliveryService: true,
            hasUberEatsService: false,
            hasRappiService: true,
            distanceKm: 8.3,
            distanceTime: 23,
            contactNumbers: [
                '8113668742',
                '81364975'
            ],
            longitude: 25.660779,
            latitude: -100.327393,
            address: 'Libertad 1124, Independencia, 64720 Monterrey, N.L',
            images: [
                require('../../../res/images/food_sopes_1.jpg'),

            ]
        }, 
        {
            name: "Tacos de trompesito",
            description: "Sabrosisimos tacos de trompo especiales.",
            price: 60,
            currency: 'MXN',
            supplierName: 'Tacos Pepe',
            hasDeliveryService: true,
            hasUberEatsService: false,
            hasRappiService: true,
            distanceKm: 8.3,
            distanceTime: 23,
            contactNumbers: [
                '8113668742',
                '81364975'
            ],
            longitude: 25.660779,
            latitude: -100.327393,
            address: 'Libertad 1124, Independencia, 64720 Monterrey, N.L',
            images: [
                require('../../../res/images/food_tacos_1.jpg'),

            ]
        }, 
        {
            name: "Sopes de chicharron rojo",
            price: 15,
            currency: 'MXN',
            supplierName: 'Tacos Pepe',
            hasDeliveryService: true,
            hasUberEatsService: false,
            hasRappiService: true,
            distanceKm: 8.3,
            distanceTime: 23,
            contactNumbers: [
                '8113668742',
                '81364975'
            ],
            longitude: 25.660779,
            latitude: -100.327393,
            address: 'Libertad 1124, Independencia, 64720 Monterrey, N.L',
            description: "Sopes calientitos de chicharron rojo, acompañados de chiles toreados.",
            images: [
                require('../../../res/images/food_sopes_2.jpg'),

            ]
        }, 
        {
            name: "Sopes de trompo",
            price: 15,
            currency: 'MXN',
            supplierName: 'Tacos Pepe',
            hasDeliveryService: true,
            hasUberEatsService: false,
            hasRappiService: true,
            distanceKm: 8.3,
            distanceTime: 23,
            contactNumbers: [
                '8113668742',
                '81364975'
            ] ,
            longitude: 25.660779,
            latitude: -100.327393,
            address: 'Libertad 1124, Independencia, 64720 Monterrey, N.L',
            description: "Sopes preparados con carne de trompo de taqueria. Los mejores en todo Nuevo León.",
            images: [
                require('../../../res/images/food_sopes_3.jpg'),

            ]
        },
        
    ]

}

// export function verifyOtpCodeAction(context, phoneNumber, otpCode) {

//     context.setState({

//         loading: true

//     })
//     api.verifyOtpCode(phoneNumber, otpCode).then((response) => {

//         if (response["status"] == OK) {
//             let is_complete = response['is_complete']

//             // Alert.alert("Se ha iniciado sesión correctamente" + response["token"]);

//             setLoginInfo(response["token"], phoneNumber);
            
//             // conditional redirection, dpeending on if profile is complete
//             if (is_complete) {
//                 Actions.groups()
//             } else {
//                 Actions.profile_completion_stack()
//             }

//         } else {

//             Alert.alert("Ha habido un error");

//         }

//         context.setState({

//             loading: false

//         })

//     });

// }