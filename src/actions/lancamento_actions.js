import firebase from 'firebase';
import lodash from 'lodash';
import b64 from 'base-64';
import moment from 'moment';
import {Alert} from 'react-native';
import RNFectBlob from 'react-native-fetch-blob';

export const modifica_enviar = (text, tipo) => {


    switch(tipo){

        case 'placa':
            return {
                type: 'modifica_placa',
                payload: text
            };

        case 'descricao':
            return {
                type: 'modifica_descricao',
                payload: text
			};

    }

}


export const publicar = (img, placa, descricao, classe, tipo) => {

	return dispatch => {
        dispatch({ type: 'andamento' });

        RNFectBlob.fetch('POST', 'http://191.252.113.227/multas/upload.php', {
            Authorization: 'Bearer access-token',
            otherHeader: 'foo',
            'Content-Type' : 'multipart/form-data',	
        },[
    
            {name: 'image', filename: 'image.png', type: 'image/png', data: img}
    
        ]).then(resp => resp.json())
            .then(resp => {
                const imagem = resp;
                local(imagem);
        })
        
        
        function local(imagem){

            navigator.geolocation.getCurrentPosition(place => {
                const latitude = place.coords.latitude;
                const longitude = place.coords.longitude;
                const url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude+"&region=BR&key=AIzaSyDCWELaZx6voUO-i7tAhz--Rh4Uv43h0nc";
                console.log(url);
        
                fetch(
                    url
                )
                .then(
                    (response) => response.text()
                )
                .then(
                    (responseText) => {
                       const array = JSON.parse(responseText);
                       const endereco = (array.results[0].formatted_address);
                       lancar(imagem, endereco);
                })

            })
        }

        function lancar(imagem, endereco){
            const email = firebase.auth().currentUser.email;
            const emailB64 = b64.encode(email);
            const data = -1 * new Date().getTime();
            const d1 = moment().local().format('DD/MM/YYYY');
            const d2 = ' às ';
            const d3 = moment().local().format('h:mm a');
            const dataPublicacao = d1 + d2 + d3;
            const status = false;

            firebase.database().ref('usuarios/' + emailB64).once('value', snapshot => {
                 const info = snapshot.val();
                 const nome = info.nome;
                 const idade = info.idade;
                 const cidade = info.cidade;
                 const sexo = info.sexo;
                 firebase.database().ref('relatos/').push({ imagem, placa, emailB64, data, nome, descricao, dataPublicacao, endereco, status, classe, tipo })
                     .then(() => {
                         Alert.alert('Êxito', 'Relato enviado');
                         dispatch({ type: 'publicado' });
                     })
                        
             })
                 .catch(() =>{
                     Alert.alert('Erro', 'Erro ao enviar relato');
                     dispatch({ type: 'publicado' });
                 });
        }


  };
}