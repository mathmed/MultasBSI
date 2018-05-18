import React, {Component} from 'react';
import { View, StatusBar, Animated, Easing, ScrollView, TouchableHighlight, TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Text } from 'react-native-elements';
import { Hideo } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles.js';
import LottieView from 'lottie-react-native';



export default class Relato extends Component {

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

        const Button = (

            <TouchableHighlight underlayColor = "transparent" onPress = {() => alert('finalizado')}>

                <View style = {styles.relato_botao_submeter}>
                    <Text style = {styles.botao_login_texto}>Submeter</Text>
                </View>

            </TouchableHighlight>
        )

        return(
               

        <ScrollView style={styles.container_relato} contentContainerStyle={styles.content}>
            <View style = {styles.login_input}>
                <Hideo
                    iconClass={Icon}
                    iconName={'car'}
                    iconColor={'white'}
                    iconBackgroundColor={'#E82D0C'}
                    inputStyle={{ color: '#464949' }}
                    placeholder= "Placa, ex: ABC-1234"
                        
                />
                </View>

                <View style = {styles.relato_view_text}>
                    <Text style = {styles.relato_text}>Clique na câmera para anexar uma imagem </Text>
                </View>
               
               <View style = {styles.relato_view_animation}>
                    <TouchableHighlight underlayColor = "transparent" onPress = {() => alert('camera')}>
                         <LottieView
                            ref={animation => {
                                this.animation = animation;
                            }}
                            source={require('../animations/camera.json')}
                            style= {styles.camera_animation}
                        />
                    </TouchableHighlight>

                </View>

                <View style = {styles.relato_view_text}>
                    <Text style = {styles.relato_text}>Descreva a infração</Text>
                </View>
                
                <View style = {styles.relato_input}>
                    <TextInput

                        placeholder = "Infração"
                        multiline
                        underlineColorAndroid = "black"
                    />
                </View>
                <View style = {styles.view_button}>
                    {Button}
                </View>
            </ScrollView>


        )

    }

	
}
