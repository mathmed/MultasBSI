import React, {Component} from 'react';
import { View, StatusBar, Animated, Easing, ScrollView, TouchableHighlight, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import styles from '../styles/styles.js';
import { connect } from 'react-redux';
import { listarMeus } from '../actions/listarHome_actions.js';
import UserAvatar from 'react-native-user-avatar';


class MeusRelatos extends Component {

	constructor(props){
		super(props);
        this.state = {
            progress: new Animated.Value(0),
            drawer: false
        }
    }
    
    componentDidMount(){

        this.props.listarMeus();
    }

    renderRow = (ultimas) => {
			return(
				<View style={{ flex: 1, borderBottomWidth: 1, borderColor: '#CCC', padding: 10 }}>
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <UserAvatar size="45" name="MM" src = {ultimas.imagem} />
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
               
            <View style={styles.container_home}>

            <StatusBar backgroundColor = "#E82D0C"/>


            {((this.props.ultimas).length == 0 )  ?
                    <Text style= {styles.meusrelatos_texto_erro}> Você ainda não realizou nenhum relato </Text>
                : 
                <View style = {styles.feed}>

                    <FlatList
                        extraData = {this.props.ultimas}
                        data = {this.props.ultimas}
                        renderItem = {({item}) => this.renderRow(item)}

                    />
                
                </View>

            }


            </View>

        )

    }

	
}

const mapStateToProps = state => {
	const ultimas = _.map(state.my_reducers, (val, uid) => {
		return { ...val, uid };
	});

	return { ultimas };
};


export default connect (mapStateToProps, {listarMeus})(MeusRelatos);