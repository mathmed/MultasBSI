
import firebase from 'firebase';
import b64 from 'base-64';



export const listarHome = () => {
    const feed = [];
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		if (currentUser) {
			firebase.database().ref('/relatos/').orderByChild('data')
				.on('value', snapshot => {
					snapshot.forEach((snap) => {
					const duck = snap.val();
					feed.push(duck);
					});
				dispatch({ type: 'home', payload: feed });
				});
		}
	};
}


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