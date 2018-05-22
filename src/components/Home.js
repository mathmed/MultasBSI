import React, {Component} from 'react';
import { View, StatusBar, Animated, Easing, ScrollView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Text } from 'react-native-elements';
import { Hideo } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';
import styles from '../styles/styles.js';
import Drawer from 'react-native-drawer';
import DrawerTela from './Drawer.js'
import { connect } from 'react-redux';


class Home extends Component {

	constructor(props){
		super(props);
        this.state = {
            progress: new Animated.Value(0),
            drawer: false
        }
    }
    
    componentDidMount(){

        this.animation.play();
          
    }
    render(){


        return(
            <Drawer ref = {(ref) => this._drawer = ref}
			open = {this.state.drawer}
       		content={<DrawerTela />}
       		openDrawerOffset={0.2}
       		onClose = {() => this.setState({drawer: !this.state.drawer})}>

               
            <View style={styles.container_home}>

            <StatusBar backgroundColor = "#FFE518"/>

            <View style = {styles.header}>
                
                <TouchableHighlight underlayColor = "transparent" onPress = {() => this.setState({drawer: true})}>
                    <Icon name = {"bars"} size = {30} color = "#2200B2" />
                </TouchableHighlight>
                
                <Text h4> Olá, {this.props.nome} </Text>

            </View>



            <View style = {styles.feed}>

                <ScrollView>

                    <Text h1> teste </Text>
                    <Text h1> teste </Text>
                    <Text h1> teste </Text>
                    <Text h1> teste </Text>
                    <Text h1> teste </Text>
                    <Text h1> teste </Text>
                    <Text h1> teste </Text>
                    <Text h1> teste </Text>
                    <Text h1> teste </Text>
                    <Text h1> teste </Text>
                    
                    

                </ScrollView>
            
            </View>

             <View style = {styles.footer}>
                <View style = {styles.view_button}>
                    <TouchableHighlight underlayColor = "transparent" onPress = {() => Actions.relato()}>
                        <LottieView
                                ref={animation => {
                                    this.animation = animation;
                                }}
                                source={require('../animations/plus.json')}
                                style= {styles.plus_animation}
                        />

                    </TouchableHighlight>
                        
                    </View>
            </View>

            </View>

            </Drawer>
        )

    }

	
}

const mapStateToProps = state => (
    {
        email: state.usuario_reducers.email,
        senha: state.usuario_reducers.senha,
        foto: state.usuario_reducers.foto,
        nome: state.usuario_reducers.nome,

    }
);

export default connect (mapStateToProps, {})(Home);