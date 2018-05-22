
const INITIAL_STATE = {

    email_login: '',
    senha_login: '',
    loading_login: false,
    email_cadastro: '',
    senha_cadastro: '',
    nome_cadastro: '',
    loading_cadastro: false


};


export default(state = INITIAL_STATE, action) => {
	switch(action.type) {
        case 'modifica_nome_cadastro':
            return{...state, nome_cadastro: action.payload}

        case 'modifica_email_cadastro':
            return{...state, email_cadastro: action.payload}

        case 'modifica_senha_cadastro':
            return{...state, senha_cadastro: action.payload}

        case 'cadastro_em_andamento':
            return{...state, loading_cadastro: true}

        case 'cadastro_usuario_sucesso':
            return{...state, loading_cadastro: false, email_cadastro: '', senha_cadastro: '', nome_cadastro: ''}

        case 'cadastro_usuario_erro':
            return{...state, loading_cadastro: false, email_cadastro: '', nome_cadastro: ''}

        case 'modifica_email_login':
            return{...state, email_login: action.payload}

        case 'modifica_senha_login':
            return{...state, senha_login: action.payload}

        case 'login_em_andamento':
            return{...state, loading_login: true}

        case 'login_sucesso':
            return{...state, email_login: '', senha_login: '', loading_login: false}

         case 'login_erro':
            return{...state, senha_login: '', loading_login: false}
        
		default:
			return state;
	}
};