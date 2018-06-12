
const INITIAL_STATE = {
    nome: '',
    senha: ''
};


export default(state = INITIAL_STATE, action) => {
	switch (action.type) {
		
		case 'modifica_nome_perfil':
			return{...state, nome: action.payload}

		case 'modifica_senha_perfil':
			return{...state, senha: action.payload}
			
		default:
			return state;
	}
};