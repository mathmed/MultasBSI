
import { combineReducers } from 'redux';
import acesso_reducers from './acesso_reducers.js';
import usuario_reducers from './usuario_reducers.js';
import lancamento_reducers from './lancamento_reducers.js';
import home_reducers from './home_reducers.js';

export default combineReducers({
    acesso_reducers,
    usuario_reducers,
    lancamento_reducers,
    home_reducers
});