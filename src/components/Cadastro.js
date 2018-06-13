import React, {Component} from 'react';
import { View, StatusBar, ScrollView, TouchableHighlight, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Text } from 'react-native-elements';
import { Hideo } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles.js';
import { connect } from 'react-redux';
import { modifica_acesso, cadastrar } from '../actions/acesso_actions.js';




class Cadastro extends Component {

	constructor(props){
		super(props);
        this.state = {
        }
    }
    

    _renderizarBotao(){
    
        if(!this.props.loading_cadastro){
            return(
                <TouchableHighlight underlayColor = "transparent" onPress = {() => this.lancar()}>

                    <View style = {styles.botao_login}>
                        <Text style = {styles.botao_login_texto}> Cadastrar-se </Text>
                    </View>

                </TouchableHighlight>
            )
        }


            return (<ActivityIndicator size = 'large' color = '#4519FF' />);
        
    }


    lancar(){
        const email = this.props.email_cadastro;
        const nome = this.props.nome_cadastro;
        const senha = this.props.senha_cadastro;

        this.props.cadastrar({email, nome, senha});
    }

    
    render(){


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
                    onChangeText = {text => this.props.modifica_acesso(text, 'nome_cadastro')}
                    
                />
                <Hideo
                    iconClass={Icon}
                    iconName={'user'}
                    iconColor={'white'}
                    iconBackgroundColor={'#3100FF'}
                    inputStyle={{ color: '#464949' }}
                    style = {{marginTop: 10}}
                    placeholder= "E-Mail"
                    onChangeText = {text => this.props.modifica_acesso(text, 'email_cadastro')}
                    
                />
                
                <Hideo
                    iconClass={Icon}
                    iconName={'key'}
                    iconColor={'white'}
                    iconBackgroundColor={'#3100FF'}
                    inputStyle={{ color: '#464949' }}
                    style = {{marginTop: 10}}
                    placeholder= "Senha"
                    onChangeText = {text => this.props.modifica_acesso(text, 'senha_cadastro')}
                    secureTextEntry
                    
                />
            </View>


            <View style = {styles.view_button}>
                
                {this._renderizarBotao()}

            </View>


            </ScrollView>
        )

    }
	
}

const mapStateToProps = state => (
    {
        email_cadastro: state.acesso_reducers.email_cadastro,
        senha_cadastro: state.acesso_reducers.senha_cadastro,
        nome_cadastro: state.acesso_reducers.nome_cadastro,
        loading_cadastro: state.acesso_reducers.loading_cadastro
    }
);

export default connect (mapStateToProps, {modifica_acesso, cadastrar })(Cadastro);