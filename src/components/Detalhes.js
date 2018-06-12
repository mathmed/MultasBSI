import React, {Component} from 'react';
import { View, StatusBar, ScrollView, Image } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles.js';

export default class Detalhes extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    status(){
        if(!this.props.status)
        return (
            <View style = {styles.detalhes_view_text}>
                <Icon2 name = 'thumbs-down' size = {25} color = 'red' />
                <Text style = {styles.detalhes_texto_comum}> Veiculo ainda não foi multado </Text>
            </View>
        )

        return (
            <View style = {styles.detalhes_view_text}>
                <Icon2 name = 'thumbs-up' size = {25} color = 'green' />
                <Text style = {styles.detalhes_texto_comum}> Veiculo foi multado </Text>
            </View>
        )
    }

    render(){
        return(

            <ScrollView style = {{backgroundColor: 'snow' }}>
                <StatusBar backgroundColor = "#E82D0C" />
                <Image source = {{ uri: this.props.imagem }} style={{ padding: '50%', margin: 3 }} />
                <View style = {styles.detalhes_view_geral}>
						
						<Text style = {styles.detalhes_texto_titulo}>Infração: {this.props.descricao} </Text>
												
						<View style = {styles.detalhes_view_text}>
							<Icon2 name ='car' size = {25} color = 'grey' />
							<Text style = {styles.detalhes_texto_comum}> {this.props.tipo} {this.props.classe} com placa {this.props.placa} </Text>
						</View>

						<View style = {styles.detalhes_view_text}>
							<Icon name ='place' size = {25} color = 'grey' />
							<Text style = {styles.detalhes_texto_comum}> Próximo à {this.props.endereco} </Text>
						</View>

						<View style = {styles.detalhes_view_text}>
							<Icon2 name = 'user' size = {25} color = 'grey' />
							<Text style = {styles.detalhes_texto_comum}> {this.props.nome} flagrou essa suposta infração em {this.props.data}</Text>
						</View>

						{this.status()}


					</View>

            </ScrollView>
        )
    }
}