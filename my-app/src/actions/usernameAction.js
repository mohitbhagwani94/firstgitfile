export function fetchusername(){
	return {
		type: "FETCH_USER_FUFILLED",
		payload: {
			username:"mohit";
		}

	}
}

export function setusername(name){
	return{
		type: 'SET_USER_NAME',
		payload: name,
	}
}