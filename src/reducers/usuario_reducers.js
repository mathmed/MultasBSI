
const INITIAL_STATE = {

    email: '',
    senha: '',
    nome: ''


};

export default(state = INITIAL_STATE, action) => {
	switch(action.type) {

        case 'dados_usuario':
            return {...state, email: action.payload.email, senha: action.payload.senha, nome: action.payload.nome}
        
        case 'modifica_nome_perfil':
			return{...state, nome: action.payload}

		case 'modifica_senha_perfil':
			return{...state, senha: action.payload}
			
		default:
			return state;
	}
};