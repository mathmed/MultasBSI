import React, {Component} from 'react';
import { View, Text, StatusBar, Animated, Easing, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';
import styles from '../styles/styles.js';



export default class Sobre extends Component {

	constructor(props){
		super(props);
        this.state = {
            progress: new Animated.Value(0),
        }
    }
    componentDidMount(){
        this.animation.play();
        
    }


    render(){


        return(
           
               
            <View style={styles.container_sobre}>

            <StatusBar backgroundColor = "#E82D0C"/>

                <View style = {styles.sobre_header}>
                    <LottieView
                        ref={animation => {
                            this.animation = animation;
                        }}
                        source={require('../animations/car.json')}
                        style= {styles.car_animation}
                    />

                    <Text style = {styles.sobre_text_header}>Sobre o Multas BSI</Text>
                    
                </View>

                <View style = {styles.sobre_content}>
                    
                    <Text style = {styles.sobre_text}>O Multas BSI é uma aplicativo em versão beta desenvolvido por 
                        <Text style = {styles.sobre_blue} onPress={() => Linking.openURL('https://www.facebook.com/mateus.medeiros.142035')}> @mathmed </Text>
                        com objetivo de fazer com que pessoas comuns possam cooperar com a lei e relatar possíveis infrações de trânsito.
                        
                    </Text>
    
                    <Text style = {styles.sobre_text}>

                        O aplicativo foi desenvolvido na Universidade Federal do Rio Grande do Norte como parte da nota da disciplina de programação
                        orientada a objetos ministrada por Msc. Fabricio Vale de Azevedo.
                        
                    </Text>

                    <Text style = {styles.sobre_contato}>
                        <Icon size = {20} name = {'envelope'} /> Contato para suporte: <Text style = {styles.sobre_blue}>mateusmedeiros252525@gmail.com</Text>
                    </Text>
                    
                </View>

                <View style = {styles.sobre_footer}>
                    
                    <View style = {styles.sobre_footer_text}>
                        <Text style = {styles.sobre_text_footer}>Versão beta</Text>
                        <Text style = {styles.sobre_text_footer}>© MathMed 2018. Todos os direitos reservados.</Text>
                    </View>



                </View>
            
            </View>

        )

    }

	
}

