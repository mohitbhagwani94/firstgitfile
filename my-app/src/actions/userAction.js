export function addField(data){
	return {
		type: "ADD_FIELD",
		data,
	}
}

export function updateField(data){
	return{
		type: 'UPDATE_FIELD',
		data,
	}
}
