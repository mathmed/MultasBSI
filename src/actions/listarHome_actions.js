
import firebase from 'firebase';
import b64 from 'base-64';
import { Actions } from 'react-native-router-flux';

export const listarMeus = () => {
	const { currentUser } = firebase.auth();
	const email = b64.encode(currentUser.email);
    const feed = [];
	return (dispatch) => {
		if (currentUser) {
			firebase.database().ref('/relatos/').orderByChild('data')
				.on('value', snapshot => {
					snapshot.forEach((snap) => {
					const duck = snap.val();
					if(duck.emailB64 == email){
						feed.push(duck);
					}
					});
				dispatch({ type: 'my', payload: feed });
				});
		}
	};
}


export const listarHome = () => {

	const feed = [];
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		if (currentUser) {
			firebase.database().ref('/relatos/').orderByChild('data')
				.on('value', snapshot => {
					
					alert("entrei no on")
					Actions.refresh();
					snapshot.forEach((snap) => {
	
						const duck = snap.val();
						feed.push(duck);
						
					});
					dispatch({ type: 'home', payload: feed });
						
				});
		}
	}
}