
import firebase from 'firebase';
import lodash from 'lodash';
import b64 from 'base-64';
import {Alert} from 'react-native';

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

    }

}

export const cadastrar = (email, nome, senha) => {

	const emailCriar = email.toLowerCase();
	return dispatch => {
		dispatch({ type: 'cadastro_em_andamento' });
			if(nome.length >= 6 && senha.length >= 6) {
				firebase.auth().createUserWithEmailAndPassword(emailCriar, senha)
					.then(user => {
						const emailB64 = b64.encode(emailCriar);
						firebase.database().ref('usuarios/' + emailB64).set({ nome, email, senha })
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
		Alert.alert('Erro', erro);
	}
	dispatch({ type: 'cadastro_usuario_erro', payload: erro.message });
};