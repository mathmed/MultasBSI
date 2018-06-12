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
            imageData: '',
            multa: 'Deixar o condutor ou passageiro de usar o cinto de segurança',
            tipo: 'Carro',
            classe: 'Popular'

        }
    }

    
    componentDidMount(){
        this.animation.play();
          
    }

	_publicar() {


		if(this.state.imagePath && this._valida_placa()) {

            LocationServicesDialogBox.checkLocationServicesIsEnabled({

                message: "O aplicativo quer saber sua localização para enviar o relato.",
                ok: "Permitir",
                cancel: "Negar"

              }).then(function(success) {
                
              }).then(() => {
                  this.props.publicar(this.state.imageData, this.props.placa, this.state.multa, this.state.classe, this.state.tipo);
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
                    <Text style = {styles.relato_text}>Selecione a infração</Text>
                </View>
                
                <View style = {styles.relato_input}>
                    
                    <Picker
                        selectedValue={this.state.multa}
                        onValueChange={(itemValue, itemIndex) => this.setState({multa: itemValue})}
                        mode = {'dropdown'}
                        >

                        <Picker.Item label="Deixar o condutor ou passageiro de usar o cinto de segurança" value="Deixar o condutor ou passageiro de usar o cinto de segurança" />
                        <Picker.Item label="Transportar crianças de forma irregular" value="Transportar crianças de forma irregular" />
                        <Picker.Item label="Estacionar o veículo nas esquinas" value="Estacionar o veículo nas esquinas" />
                        <Picker.Item label="Estacionar veículo afastado da guia da calçada" value="Estacionar veículo afastado da guia da calçada" />
                        <Picker.Item label="Estacionar veículo na pista" value="Estacionar veículo na pista" />
                        <Picker.Item label="Estacionar veículo nos acostamentos" value="Estacionar veículo nos acostamentos" />
                        <Picker.Item label="Estacionar veículo no passeio, faixa de pedestre, ciclovia ou ciclofaixa" value="Estacionar veículo no passeio, faixa de pedestre, ciclovia ou ciclofaixa" />
                        <Picker.Item label="Estacionar veículo em garagem" value="Estacionar veículo em garagem" />
                        <Picker.Item label="Estacionar o veículo em cruzamento" value="Estacionar o veículo em cruzamento" />
                        <Picker.Item label="Estacionar o veículo em parada de ônibus" value="Estacionar o veículo em parada de ônibus" />
                        <Picker.Item label="Estacionar o veículo em locais proibidos (placa: Proibido Estacionar)" value="Estacionar o veículo em locais proibidos (placa: Proibido Estacionar)" />
                        <Picker.Item label="Estacionar o veículo em desacordo com a sinalização" value="Estacionar o veículo em desacordo com a sinalização	" />
                        <Picker.Item label="Parar veículo nas esquinas" value="Parar veículo nas esquinas" />
                        <Picker.Item label="Parar veículo na pista" value="Parar veículo na pista" />
                        <Picker.Item label="Parar veículo na faixa de pedestre" value="Parar veículo na faixa de pedestre" />
                        <Picker.Item label="Parar veículo na área de cruzamento" value="Parar veículo na área de cruzamento" />
                        <Picker.Item label="Parar veículo nos viadutos, pontes e túneis" value="Parar veículo nos viadutos, pontes e túneis" />
                        <Picker.Item label="Parar veículo em locais públicos (placa - Proibido Parar)" value="Parar veículo em locais públicos (placa - Proibido Parar)" />
                        <Picker.Item label="Transitar pela contramão em via de sentido único" value="Transitar pela contramão em via de sentido únicos" />
                        <Picker.Item label="Avançar o sinal vermelho de semáforo ou de parada obrigatória" value="Avançar o sinal vermelho de semáforo ou de parada obrigatória" />
                        <Picker.Item label="Portar no veículo placas de identificação irregulares" value="Portar no veículo placas de identificação irregulares" />
                        <Picker.Item label="Conduzir veículo com placa ou qualquer elemento de identificação violado ou falsificado" value="Conduzir veículo com placa ou qualquer elemento de identificação violado ou falsificado" />
                        <Picker.Item label="Transportar passageiros em compartimento de carga" value="Transportar passageiros em compartimento de carga" />
                        <Picker.Item label="Conduzir o veículo com vidros cobertos por películas, painéis decorativos ou pinturas" value="Conduzir o veículo com vidros cobertos por películas, painéis decorativos ou pinturas" />
                        <Picker.Item label="Conduzir o veículo com defeito de iluminação, de sinalização ou com lâmpadas queimads" value="Conduzir o veículo com defeito de iluminação, de sinalização ou com lâmpadas queimads" />
                        <Picker.Item label="Transitar com veículo com lotação excedente" value="Transitar com veículo com lotação excedente" />
                        <Picker.Item label="Conduzir moto sem usar capacete com viseira ou óculos e vestuário de acordo com o CONTRAN" value="Conduzir moto sem usar capacete com viseira ou óculos e vestuário de acordo com o CONTRAN" />
                        <Picker.Item label="Conduzir moto transportando passageiro sem o capacete ou fora do assento correto" value="Conduzir moto transportando passageiro sem o capacete ou fora do assento correto" />
                        <Picker.Item label="Conduzir moto com faróis apagados" value="Conduzir moto com faróis apagados" />
                        <Picker.Item label="Conduzir moto rebocando outro veículo" value="Conduzir moto rebocando outro veículo" />
                        <Picker.Item label="Dirigir o veículo com o braço do lado de fora" value="Dirigir o veículo com o braço do lado de fora" />
                        <Picker.Item label="Dirigir veículo utilizando-se de fone de ouvidos" value="Dirigir veículo utilizando-se de fone de ouvidos" />
                        <Picker.Item label="Usar veículo para interromper a circulação da via sem autorização" value="Usar veículo para interromper a circulação da via sem autorização" />

                    </Picker>
                </View>

                <View style = {styles.relato_view_text}>
                    <Text style = {styles.relato_text}>Selecione o tipo de veículo</Text>
                </View>


                <View style = {styles.relato_input}>
                    
                    <Picker
                        selectedValue={this.state.tipo}
                        onValueChange={(itemValue, itemIndex) => this.setState({tipo: itemValue})}
                        >

                        <Picker.Item label="Carro" value="Carro" />
                        <Picker.Item label="Moto" value="Moto" />
                        <Picker.Item label="Ônibus" value="Ônibus" />
                        <Picker.Item label="Veículo de carga" value="Veículo de carga" />
                        <Picker.Item label="Van" value="Van" />
                    
                    </Picker>
                </View>

                <View style = {styles.relato_view_text}>
                    <Text style = {styles.relato_text}>Selecione a classe do veículo</Text>
                </View>


                <View style = {styles.relato_input}>
                    
                    <Picker
                        selectedValue={this.state.classe}
                        onValueChange={(itemValue, itemIndex) => this.setState({classe: itemValue})}
                        >

                        <Picker.Item label="Popular" value="Popular" />
                        <Picker.Item label="Luxuoso" value="Luxuoso" />
                        <Picker.Item label="Antigo" value="Antigo" />

                    
                    </Picker>
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

export default connect (mapStateToProps, {modifica_enviar, publicar})(NovoRelato);