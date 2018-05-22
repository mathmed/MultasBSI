
const INITIAL_STATE = {

    email: '',
    senha: '',
    nome: '',
    foto: ''


};

export default(state = INITIAL_STATE, action) => {
	switch(action.type) {

        case 'dados_usuario':
            return {...state, email: action.payload.email, senha: action.payload.senha, nome: action.payload.nome, foto: action.payload.foto}
        
		default:
			return state;
	}
};