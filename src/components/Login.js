import React, {Component} from 'react';
import { View, StatusBar, Animated, Easing, ScrollView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Text } from 'react-native-elements';
import { Hideo } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';
import styles from '../styles/styles.js';



export default class Login extends Component {

	constructor(props){
		super(props);
        this.state = {
            progress: new Animated.Value(0),
        }
    }
    
    /* antes do componente iniciar serão feitos todos os calculos e posteriormente as informações serão guardadas no state */

    componentDidMount(){

        this.animation.play();
          
          
    }
    
    render(){

        const Button = (

            <TouchableHighlight underlayColor = "transparent" onPress = {() => Actions.home()}>

                <View style = {styles.botao_login}>
                    <Text style = {styles.botao_login_texto}> Login </Text>
                </View>

            </TouchableHighlight>
        )

        return(

         <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
          >


            <StatusBar backgroundColor = "#4519FF"/>
            
            <View style = {styles.view_login_text}>

                <LottieView
                    ref={animation => {
                        this.animation = animation;
                    }}
                    source={require('../animations/login.json')}
                    style= {styles.login_animation}
                />

                <Text h1 style = {styles.texto_login}>Multas BSI</Text>
            </View>

            
            <View style = {styles.login_input}>
                <Hideo
                    iconClass={Icon}
                    iconName={'user'}
                    iconColor={'white'}
                    iconBackgroundColor={'#3100FF'}
                    inputStyle={{ color: '#464949' }}
                    placeholder= "E-mail"
                    
                />
                
                <Hideo
                    iconClass={Icon}
                    iconName={'key'}
                    iconColor={'white'}
                    iconBackgroundColor={'#3100FF'}
                    inputStyle={{ color: '#464949' }}
                    style = {{marginTop: 10}}
                    placeholder= "Senha"
                    secureTextEntry
                    
                />
            </View>


            <View style = {styles.view_button}>
                
                {Button}

            </View>

            <View style = {styles.view_button}>
                <TouchableHighlight underlayColor = "transparent" onPress = {() => Actions.cadastro()}>
                    <Text h1 style = {[styles.texto_login, {fontSize: 18, marginTop: 10}]}>Cadastrar-se</Text>
                </TouchableHighlight>
            </View>



            <View style = {styles.view_button}>
                    
                    <Text style = {styles.cop}> © MathMed 2018. Todos os direitos reservados. </Text>
                
            </View>

            </ScrollView>
        )

    }

	
}
