
import firebase from 'firebase';




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