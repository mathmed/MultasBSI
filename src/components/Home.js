import React, {Component} from 'react';
import { View, StatusBar, Animated, Easing, ScrollView, TouchableHighlight, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Text } from 'react-native-elements';
import { Hideo } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import LottieView from 'lottie-react-native';
import styles from '../styles/styles.js';
import Drawer from 'react-native-drawer';
import DrawerTela from './Drawer.js'
import { connect } from 'react-redux';
import { listarHome } from '../actions/listarHome_actions.js';
import UserAvatar from 'react-native-user-avatar';


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
        this.props.listarHome();
    }

    renderRow = (ultimas) => {
			return(
				<View style={{ flex: 1, borderBottomWidth: 1, borderColor: '#CCC', padding: 10 }}>
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <UserAvatar size="45" name="MM" src = {ultimas.fotoPerfil} />
                        <View style = {{justifyContent: 'center', alignItems: 'center' }}>
                            <Text> {ultimas.descricao}</Text>
                        </View>

                        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                        
                            <TouchableHighlight onPress = {() => Actions.detalhes({
                                data: ultimas.dataPublicacao, descricao: ultimas.descricao, endereco: ultimas.endereco,
                                imagem: ultimas.imagem, nome: ultimas.nome, placa: ultimas.placa, status: ultimas.status
                            })} underlayColor = 'transparent'>
                            
                                <Icon name = {"eye"} size = {30} color = "#E82D0C" />
                            </TouchableHighlight>
                        </View>
                    </View>
				</View>
			);

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
                
                <Text h4> Multas BSI </Text>

            </View>



            <View style = {styles.feed}>

				<FlatList
					extraData = {this.props.ultimas}
					data = {this.props.ultimas}
					renderItem = {({item}) => this.renderRow(item)}

				/>
            
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

const mapStateToProps = state => {
	const ultimas = _.map(state.home_reducers, (val, uid) => {
		return { ...val, uid };
	});

	return { ultimas };
};


export default connect (mapStateToProps, {listarHome})(Home);