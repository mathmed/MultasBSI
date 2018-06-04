import React, { Component } from 'react';
import { View, Text, TouchableHighlight, FlatList, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserAvatar from 'react-native-user-avatar';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/styles.js'

const avatar = require("../animations/anonimo.gif");

export default class DrawerTela extends Component {
    
	constructor(props){
        super(props);
        const lista = [
			{key: 0, title: 'Meus relatos', img: 'search', onPress:() => Actions.meusrelatos()},
			{key: 1, title: 'Editar perfil', img: 'settings', onPress: () => Actions.editarperfil() },
			{key: 2, title: 'Deslogar', img: 'power-settings-new', onPress: () => alert('x') },
            {key: 3, title: 'Sobre', img: 'info', onPress: () => alert('x')}
        ]

        this.state = {
            lista: lista
        }
	}

    renderRow = (item) => {
		return(
			<TouchableHighlight onPress = {item.onPress} underlayColor = 'transparent'>

				<View style = {styles.drawer_view_render}>
					<View style = {styles.drawer_view_icon }>
						<Icon name = {item.img} size = {25} color = {'#008080'} />
					</View>

					<View style = {styles.drawer_view_text}>
						<Text style = {styles.drawer_text_list}> {item.title} </Text>
					</View>
				</View>
			</TouchableHighlight>


		)
	}

	render() {
		return(
			<View style = {styles.drawer_container}>
				<View style = {styles.drawer_avatar}>
					{this.state.image ? <UserAvatar size="100" name="AvishayBar" src = {this.state.image} /> : 
					<UserAvatar size="100" name="MM" component = {{ avatar }} /> }
					<Text style = {{ fontSize: 15, color: 'grey', fontWeight: 'bold', marginTop: 15 }}> {this.state.nome} </Text>
				</View>
				<View style = { styles.drawer_flat }>
					<FlatList
						extraData = {this.state.lista}
						data = {this.state.lista}
						renderItem = {({item}) => this.renderRow(item)}
					/>
				</View>
			</View>


		)
	}
}
