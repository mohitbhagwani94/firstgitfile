export default function reducer(state ={
	username:null,
	error:null,
	},action){
	switch(action.type){
		case "FETCH_USERNAME":{
			return {...state}
		}
		case "FETCH_USERNAME_REJECTED":{
			return{...state, error: action.payload}
		}
		case "FETCH_USERNAME_FULFILLED":{
			return{
				...state,
				username:action.payload
			}
		}

	}
}