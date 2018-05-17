import React, {Component} from 'react';
import { View, StatusBar, Animated, Easing, ScrollView, TouchableHighlight } from 'react-native';
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

                <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {{fontSize: 16, fontWeight: 'bold'}}>Clique na câmera para anexar uma imagem </Text>
                </View>
               
               <View style = {{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
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

            </ScrollView>


        )

    }

	
}
