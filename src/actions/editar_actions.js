import firebase from 'firebase';
import b64 from 'base-64';

export const modificaDadosPerfil = (text, type) => {

    switch(type){
        case 'nome':
            return {
                type: 'modifica_nome_perfil',
                payload: text
            }

        case 'senha':
            return {
                type: 'modifica_senha_perfil',
                payload: text
            }
    }

}

export const salvarDados = (senha, nome) => {
	if(senha.length >= 6 && nome.length > 0){
            const {currentUser} = firebase.auth();
            const email = currentUsert.email;
            const emailB64 = b64.encode(email);
            dispatch({ type: 'alterar_dados_andamento' });
			try{
				currentUser.updatePassword(senha).then(() => {
                    firebase.database().ref('usuarios/' + emailB64).once('value', (snapshot) => {
                        const info = snapshot.val();
                        info.nome = nome;
                        info.senha = senha;
                        firebase.database().ref('usuarios/' + emailB64).set(info)
                            .then(() => {
                                Alert.alert('Sucesso', 'Dados alterados com sucesso!');
                                return{type: 'alterar_dados_fim', payload: ''}
                            })
                                .catch(erro => {
                                    Alert.alert('Erro', erro);
                                    return{type: 'alterar_dados_fim', payload: ''}
                                });
                        })
                            
                })
				
			}catch(erro){
				Alert.alert('Erro', 'Você deve ter feito login recentemente para alterar seus dados. Deslogue e logue na conta e tente novamente.')
                return{type: 'alterar_dados_fim', payload: ''}

			}

	}else{
		Alert.alert('Erro', 'Senha e/ou nomes muito curtos');
		return{type: 'alterar_dados_fim', payload: ''}

	}
}