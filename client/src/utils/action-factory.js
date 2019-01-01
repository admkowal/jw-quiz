export function createSagaActionTypes(base, types) {
	return createActionTypes(`${base}_SAGA`, types);
}

export function createReduxActionTypes(base, types) {
	return createActionTypes(`${base}_REDUX`, types);
}

function createActionTypes(base, types) {
  return types.reduce((acc, type) => {
		acc[type] = `${base}.${type}`
		return acc;
	}, {})
}