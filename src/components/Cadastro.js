import React, {Component} from 'react';
import { View, StatusBar, Animated, Easing, ScrollView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Text } from 'react-native-elements';
import { Hideo } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';
import styles from '../styles/styles.js';



export default class Cadastro extends Component {

	constructor(props){
		super(props);
        this.state = {
            
        }
    }
    
    /* antes do componente iniciar serão feitos todos os calculos e posteriormente as informações serão guardadas no state */

    
    render(){

        const Button = (

            <TouchableHighlight underlayColor = "transparent" onPress = {() => alert('clicado')}>

                <View style = {styles.botao_login}>
                    <Text style = {styles.botao_login_texto}> Cadastrar-se </Text>
                </View>

            </TouchableHighlight>
        )

        return(

         <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
          >


            <StatusBar backgroundColor = "#4519FF"/>

            
            <View style = {styles.login_input}>

                <Hideo
                    iconClass={Icon}
                    iconName={'user-circle'}
                    iconColor={'white'}
                    iconBackgroundColor={'#3100FF'}
                    inputStyle={{ color: '#464949' }}
                    placeholder= "Nome"
                    
                />
                <Hideo
                    iconClass={Icon}
                    iconName={'user'}
                    iconColor={'white'}
                    iconBackgroundColor={'#3100FF'}
                    inputStyle={{ color: '#464949' }}
                    style = {{marginTop: 10}}
                    placeholder= "Login de acesso"
                    
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




            </ScrollView>
        )

    }

	
}
