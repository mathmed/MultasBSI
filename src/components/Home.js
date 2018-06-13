import React, {Component} from 'react';
import { View, StatusBar, Animated, Easing, TouchableHighlight, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import LottieView from 'lottie-react-native';
import styles from '../styles/styles.js';
import Drawer from 'react-native-drawer';
import DrawerTela from './Drawer.js'
import { connect } from 'react-redux';
import UserAvatar from 'react-native-user-avatar';
import { listarHome } from '../actions/listarHome_actions.js';


class Home extends Component {

	constructor(props){
		super(props);
        this.state = {
            progress: new Animated.Value(0),
            drawer: false
        }
    }
    
    componentWillMount(){
        this.props.listarHome();
    }
    componentDidMount(){
        this.props.listarHome();
        this.animation.play();
        
    }

    renderRow = (ultimas) => {
			return(
                <TouchableHighlight onPress = {() => Actions.detalhes({
                    data: ultimas.dataPublicacao, descricao: ultimas.descricao, endereco: ultimas.endereco,
                    imagem: ultimas.imagem, nome: ultimas.nome, placa: ultimas.placa, status: ultimas.status,
                    tipo: ultimas.tipo, classe: ultimas.classe
                })} underlayColor = 'transparent'>

				<View style={{ flex: 1, borderBottomWidth: 1, borderColor: '#CCC', padding: 30, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <UserAvatar size="45" name="MM" src = {ultimas.imagem} />
                        <View style = {{ alignItems: 'center' , marginLeft: 40 }}>
                            <Text> {ultimas.descricao}</Text>
                        </View>

				</View>
                </TouchableHighlight>
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
                
                <Text h5> Relatos próximos à você </Text>

            </View>



            <View style = {styles.feed}>

				<FlatList
					extraData = {this.props.ultimas}
					data = {this.props.ultimas}
                    renderItem = {({item}) => this.renderRow(item)}
                    keyExtractor={(item, index) => index}


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