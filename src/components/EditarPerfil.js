import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ActivityIndicator, Platform, TextInput } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { modificaDadosPerfil, salvarDados } from '../actions/editar_actions';
import styles from '../styles/styles.js'

const ImagePicker = require('react-native-image-picker');


class EditarPerfil extends Component {

    constructor(props){
        super(props);
        this.state = {
            imageData: '',
            imagePath: ''
        }
    }

    componentDidMount(){
        this.setState({imagePath: this.props.minha_foto})
    }


    render(){
        alert(this.props.minha_foto)
        return(
			<View style = {{ flex: 1, backgroundColor: 'snow' }}>
				<View style = {{ justifyContent: 'space-between', alignItems: 'center', marginTop: 10, flex: 1, flexDirection: 'row', marginLeft: 70, marginRight: 70 }}>
				    <UserAvatar size="100" name="AvishayBar" src = {this.state.imagePath} />

					<TouchableHighlight underlayColor = 'transparent' onPress = {() => this.show()} >
						<Icon name = 'add-a-photo' size = {30} color = 'grey' />
					</TouchableHighlight>
				</View>

                <View style = {styles.relato_input}>
                    <TextInput
                        placeholder = "Infração"
                        underlineColorAndroid = "black"
                        value = {this.props.descricao}
                        onChangeText = {(text) => this.props.modifica_enviar(text, 'descricao')}
                    />
                </View>
            
                <View style = {styles.relato_input}>
                    <TextInput
                        placeholder = "Infração"
                        underlineColorAndroid = "black"
                        value = {this.props.descricao}
                        onChangeText = {(text) => this.props.modifica_enviar(text, 'descricao')}
                    />
                </View>
        
            </View>
        )
    }
	show() {
        var options = {
			title: 'Selecione uma imagem',
			takePhotoButtonTitle: 'Tirar foto agora',
			chooseFromLibraryButtonTitle: 'Escolher da galeria',
			quality: 0.5,
            storageOptions: {
              skipBackup: true,
              path: 'images'
            }
          };

        ImagePicker.showImagePicker(options, (response) => {
          
            if (response.didCancel){
            }
            else if (response.error) {
            }
            else if (response.customButton) {
            }

            else {
                let source = {uri: response.uri}
				this.setState({
					imagePath: source.uri,
                    imageData: response.data
				});
			} 

          });
	}
}

const mapStateToProps = state => (
    {
        nome: state.editar_reducers.nome,
        img: state.editar_reducers.img,
        senha: state.editar_reducers.senha,
        minha_foto: state.usuario_reducers.foto

    }
);

export default connect (mapStateToProps, { modificaDadosPerfil, salvarDados })(EditarPerfil);