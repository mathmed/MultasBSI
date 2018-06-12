import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ActivityIndicator, Platform, TextInput, CheckBox } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { modificaDadosPerfil, salvarDados } from '../actions/editar_actions';
import styles from '../styles/styles.js'




class EditarPerfil extends Component {

    constructor(props){
        super(props);
        this.state = {
            exibir: true
        }
    }

    componentDidMount(){
       
    }


    render(){
        return(
			<View style = {{ flex: 1, backgroundColor: 'snow' }}>
                <View style = {styles.relato_input}>
                    <TextInput
                        placeholder = "Nome"
                        underlineColorAndroid = "black"
                        value = {this.props.nome}
                        onChangeText = {(text) => this.props.modifica_enviar(text, 'descricao')}
                    />
                </View>
            
                <View style = {styles.relato_input}>
                    <TextInput
                        placeholder = "Senha"
                        underlineColorAndroid = "black"
                        value = {this.props.senha}
                        secureTextEntry = {this.state.exibir}
                        onChangeText = {(text) => this.props.modifica_enviar(text, 'descricao')}
                    />
                </View>

                <View style = {styles.editarperfil_view_check}>
                    <CheckBox
                        value = {!this.state.exibir}
                        onValueChange = {() => this.setState({exibir: !this.state.exibir})}
                    />
                    <Text>Exibir senha</Text>
                </View>
               
        
            </View>
        )
    }
}

const mapStateToProps = state => (
    {
        nome: state.usuario_reducers.nome,
        senha: state.usuario_reducers.senha,

    }
);

export default connect (mapStateToProps, { modificaDadosPerfil, salvarDados })(EditarPerfil);