
export default function reducer(state ={}, action) {
	switch(action.type){
		case "ADD_FIELD":{
			state[action.data.name]=action.data.value
			return Object.assign({},state)
			break;
		}
		case "UPDATE_FIELD":{
			state[action.data.name]=action.data.value
			return Object.assign({},state)
			break;
		}

	}
	return state
}