import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ActivityIndicator, TextInput, CheckBox, StatusBar } from 'react-native';
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
    
    _renderizarBotao(){
        if(!this.props.loading_enviar){
            return(

            <TouchableHighlight underlayColor = "transparent" onPress = {() => this.props.salvarDados(this.props.senha, this.props.nome)}>
                <View style = {styles.relato_botao_submeter}>
                    <Text style = {styles.botao_login_texto}>Salvar</Text>
                </View>
            </TouchableHighlight>

            )
        }

        return <ActivityIndicator size = 'large' color = '#E82D0C' />
    }

    render(){
        return(

			
			<View style = {{ flex: 1, backgroundColor: 'snow' }}>
                <StatusBar backgroundColor = "#E82D0C"/>
                <View style = {styles.relato_input}>
                    <TextInput
                        placeholder = "Nome"
                        underlineColorAndroid = "black"
                        value = {this.props.nome}
                        onChangeText = {(text) => this.props.modificaDadosPerfil(text, 'nome')}
                    />
                </View>
            
                <View style = {styles.relato_input}>
                    <TextInput
                        placeholder = "Senha"
                        underlineColorAndroid = "black"
                        value = {this.props.senha}
                        secureTextEntry = {this.state.exibir}
                        onChangeText = {(text) => this.props.modificaDadosPerfil(text, 'senha')}
                    />
                </View>

                <View style = {styles.editarperfil_view_check}>
                    <CheckBox
                        value = {!this.state.exibir}
                        onValueChange = {() => this.setState({exibir: !this.state.exibir})}
                    />
                    <Text>Exibir senha</Text>
                </View>

                <View style = {styles.view_button}>
                    {this._renderizarBotao()}
                </View>
               
        
            </View>
        )
    }
}

const mapStateToProps = state => (
    {
        nome: state.usuario_reducers.nome,
        senha: state.usuario_reducers.senha,
        loading_enviar: state.usuario_reducers.loading_enviar

    }
);

export default connect (mapStateToProps, { modificaDadosPerfil, salvarDados })(EditarPerfil);