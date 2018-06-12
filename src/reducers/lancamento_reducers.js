

import {Actions} from 'react-native-router-flux';
const INITIAL_STATE = {

	placa: '',
	descricao: '',
	loading_enviar: false



};

export default(state = INITIAL_STATE, action) => {
	switch(action.type) {

		case 'modifica_placa':
			return{...state, placa: action.payload}

		case 'modifica_descricao':
			return {...state, descricao: action.payload}

		case 'publicar_andamento':
			return{...state}

		case 'publicado':
			return{...state, placa: '', descricao: '', loading_enviar: false}

		case 'andamento':
			return{...state, loading_enviar: true}
		default:
			return state;
	}
};