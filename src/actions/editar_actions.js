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


export const salvarDados = () => {
    
}