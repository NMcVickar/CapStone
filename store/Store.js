import * as State from './index';

class Store {
	constructor(state) {
		this.state = Object.assign({}, state);
		this.listeners = [];
	}

	addStateListener(listener) {
		this.listeners.push(listener);
	}

	dispatch(reducer) {
		this.state = reducer(this.state);

		this.listeners.forEach(listener => listener());
	}

	getState() {
		return this.state;
	}
}

export default new Store(State);
