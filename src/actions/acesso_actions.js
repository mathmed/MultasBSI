
import firebase from 'firebase';
import lodash from 'lodash';
import b64 from 'base-64';
import {Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';



export const modifica_acesso = (text, tipo) => {


    switch(tipo){

        case 'nome_cadastro':
            return {
                type: 'modifica_nome_cadastro',
                payload: text
            };

        case 'email_cadastro':
            return {
                type: 'modifica_email_cadastro',
                payload: text
            };

        case 'senha_cadastro':
            return {
                type: 'modifica_senha_cadastro',
                payload: text
			};
		
		case 'email_login':
			return {
				type: 'modifica_email_login',
				payload: text
			};

		case 'senha_login':
			return{
				type: 'modifica_senha_login',
				payload: text
			}

    }

}

export const cadastrar = ({email, nome, senha}) => {

	const emailCriar = email.toLowerCase();
	const foto = 'https://firebasestorage.googleapis.com/v0/b/ifoda-1b50b.appspot.com/o/images%2Favatar.jpg?alt=media&token=67e41a9d-a686-4600-9bc9-1e106f7c76e7';
	return dispatch => {
		dispatch({ type: 'cadastro_em_andamento' });
			if(nome.length >= 6 && senha.length >= 6) {
				firebase.auth().createUserWithEmailAndPassword(emailCriar, senha)
					.then(user => {
						const emailB64 = b64.encode(emailCriar);
						firebase.database().ref('usuarios/' + emailB64).set({ nome, email, senha, foto })
							.then(value => cadastroUsuarioSucesso(dispatch));
					})
				.catch(erro => cadastroUsuarioErro(erro, dispatch));
			} else {
				Alert.alert('Erro', 'Preencha os campos corretamente.');
				cadastroUsuarioErro(1, dispatch);
			}
		};
}


export const cadastroUsuarioSucesso = (dispatch) => {
    dispatch({ type: 'cadastro_usuario_sucesso' });
    Alert.alert('Êxito', "Conta cadastrada com sucesso");

};

export const cadastroUsuarioErro = (erro, dispatch) => {
	if (erro !== 1) {
		Alert.alert('Erro', 'Já existe uma conta cadastrada com esse e-mail');
	}
	dispatch({ type: 'cadastro_usuario_erro', payload: erro.message });
};

export const login = ( email, senha ) => {
	const emailower = email.toLowerCase();
	return dispatch => {
		dispatch({ type: 'login_em_andamento' });
		firebase.auth().signInWithEmailAndPassword(emailower, senha)
			.then(value => aposAutenticar(dispatch))
		.catch(erro => loginUsuarioErro(erro, dispatch));
	};
};


const aposAutenticar = (dispatch) => {
	const email = firebase.auth().currentUser.email;
	const emailB64 = b64.encode(email.toLowerCase());
		firebase.database().ref('usuarios/' + emailB64).once('value', (snapshot) => {
			const info = snapshot.val();
			dispatch({ type: 'dados_usuario', payload: info });
			dispatch({ type: 'login_sucesso', payload: '' });
			Actions.home();

			
	});
};

const loginUsuarioErro = (erro, dispatch) => {
Alert.alert('Erro', 'Usuário e/ou senha inválidos');
dispatch({ type: 'login_erro', payload: '' });
};