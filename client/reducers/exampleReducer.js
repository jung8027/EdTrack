

//example reducer

export default function exampleReducer(state= {}, action){
	switch(action.type){
		case "SOMETHING":
			return Object.assign({},state, action.payload);
		default:
			return state;
	}

}
