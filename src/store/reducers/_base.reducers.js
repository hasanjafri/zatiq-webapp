export const insert = ({ array, form }) => {
	let newArray;
	let index;
	if (form.id) {
		index = array.findIndex(el => el.id === form.id);
	}
	
	if (index !== undefined && index > -1) {
		// Edit
		newArray = [...array.slice(0, index), form, ...array.slice(index + 1)]
	} else {
		newArray = [...array, form];
	}
	return newArray;
};

export const remove = ({ array, id }) => {
	const formattedId = parseInt(id, 10);
	const index = array.findIndex(el => el.id === formattedId);
	return [...array.slice(0, index), ...array.slice(index + 1)]
};

export const saveParams = ({ name, state, form }) => {
	// Extract
	const fields = [ name, `${name}ById` ];
	const { [fields[0]]: array, [fields[1]]: object, ...rest } = state;
	const params = {
		[fields[0]]: insert({ array, form }),
		...rest
	};
	if (object) {
		const newObject = {...object};
		if (form.id) {
			newObject[form.id] = form;
		}
		params[fields[1]] = newObject;
	}
	return params;
}

export const deleteParams = ({ name, state, id }) => {
	// Extract
	const fields = [ name, `${name}ById` ];
	const { [fields[0]]: array, [fields[1]]: object, ...rest } = state;

	const params = {
		[fields[0]]: remove({ array, id }),
		...rest
	};
	if (object) {
		const newObject = {...object};
		delete newObject[id];
		params[fields[1]] = newObject;
	}
	return params;
}

export const createParams = ({ name, state, data }) => {
	const fields = [ name, `${name}ById` ];
	const { [fields[0]]: array, [fields[1]]: object, ...rest } = state;

	const newObject = {};
	data.forEach(el => newObject[el.id] = el);

	return {
		[fields[0]]: data,
		[fields[1]]: newObject,
		...rest
	};
}