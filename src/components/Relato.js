import React, {Component} from 'react';
import { View, StatusBar, Animated, Easing, ScrollView, TouchableHighlight, TextInput, Image, Platform, Alert, ActivityIndicator} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Text } from 'react-native-elements';
import { Hideo } from 'react-native-textinput-effects';
import { TextInputMask } from 'react-native-masked-text'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/styles.js';
import LottieView from 'lottie-react-native';
import { connect } from 'react-redux';
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import { modifica_enviar, publicar } from '../actions/lancamento_actions';

const ImagePicker = require('react-native-image-picker');


class Relato extends Component {

	constructor(props){
		super(props);
        this.state = {

            progress: new Animated.Value(0),
            imagePath: '',
            imageData: ''

        }
    }

    
    componentDidMount(){
        this.animation.play();
          
    }

	_publicar() {


		if(this.state.imagePath && this._valida_placa() && this.props.descricao) {

            LocationServicesDialogBox.checkLocationServicesIsEnabled({

                message: "O aplicativo quer saber sua localização para enviar o relato.",
                ok: "Permitir",
                cancel: "Negar"

              }).then(function(success) {
                
              }).then(() => {
                  this.props.publicar(this.state.imageData, this.props.placa, this.props.descricao);
              }).catch((error) => {
                
              });


		} else {
            Alert.alert("Erro", "Preencha as informações corretamente");
        }
        
    }

    _valida_placa(){

        if(this.props.placa.length == 8){

            var placa = this.props.placa.split("-");
            var placa_letras = placa[0];
            var placa_num = placa[1];

            if(placa_letras.length == 3 && placa_num.length == 4){
                
                if(isNaN(placa_letras[0]) && isNaN(placa_letras[1]) && isNaN(placa_letras[2])){

                    if(!isNaN(placa_num[0]) && !isNaN(placa_num[1]) && !isNaN(placa_num[2]) && !isNaN(placa_num[3])){
                        
                        return true;

                    }else{
                        return false;
                    }
                }else{  
                    return false;
                }


            }else{
                return false;
            }
        }else{
            return false;
        }

    }

    
    
    _renderizarBotao(){
        if(!this.props.loading_enviar){
            return(

            <TouchableHighlight underlayColor = "transparent" onPress = {() => this._publicar()}>
                <View style = {styles.relato_botao_submeter}>
                    <Text style = {styles.botao_login_texto}>Submeter</Text>
                </View>
            </TouchableHighlight>

            )
        }

        return <ActivityIndicator size = 'large' color = '#E82D0C' />
    }


    render(){

        const img = () => {
            return(
            <View>
                <TouchableHighlight underlaycolor = 'transparent' onPress = {() => this.setState({imageData: '', imagePath: ''})}>
                    <View style = {styles.view_remover}>
                        <Text style = {styles.text_remover}> Remover </Text>
                        <Icon name = {'trash'} size = {20}  color = {'red'}/>
                    </View>
                </TouchableHighlight>
                <Image style = {styles.imagem} source = {{ uri: this.state.imagePath }} /> 
            </View>
        )
    }

        return(
               

        <ScrollView style={styles.container_relato} contentContainerStyle={styles.content}>
            <View style = {styles.login_input}>
                <TextInputMask
                    type={'custom'}
                    options= {{
                        mask: 'AAA-9999'
                        
                    }}   
                    customTextInput={Hideo}
                    iconClass={Icon}
                    iconName={'car'}
                    iconColor={'white'}
                    iconBackgroundColor={'#E82D0C'}
                    inputStyle={{ color: '#464949' }}
                    placeholder= "Placa, ex: ABC-1234"
                    value = {this.props.placa}
                    onChangeText = {(text) => this.props.modifica_enviar(text, 'placa')}
                        
                />
                </View>

                <View style = {styles.relato_view_text}>
                    <Text style = {styles.relato_text}>Descreva a infração</Text>
                </View>
                
                <View style = {styles.relato_input}>
                    <TextInput
                        placeholder = "Infração"
                        underlineColorAndroid = "black"
                        value = {this.props.descricao}
                        onChangeText = {(text) => this.props.modifica_enviar(text, 'descricao')}
                    />
                </View>
                <View style = {styles.relato_view_text}>
                    <Text style = {styles.relato_text}>Clique na câmera para anexar uma imagem </Text>
                </View>
               
               
               <View style = {styles.relato_view_animation}>

                {this.state.imagePath ?  img() : 

                    <TouchableHighlight underlayColor = "transparent" onPress = {() => this.show()}>
                         <LottieView
                            ref={animation => {
                                this.animation = animation;
                            }}
                            source={require('../animations/camera.json')}
                            style= {styles.camera_animation}
                        />
                        
                    </TouchableHighlight>

                }
                        
                </View>


                <View style = {styles.view_button}>
                    {this._renderizarBotao()}
                </View>
            </ScrollView>
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
          
            if (response.didCancel) {
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
        placa: state.lancamento_reducers.placa,
        img: state.lancamento_reducers.img,
        descricao: state.lancamento_reducers.descricao,
        loading_enviar: state.lancamento_reducers.loading_enviar

    }
);

export default connect (mapStateToProps, {modifica_enviar, publicar})(Relato);