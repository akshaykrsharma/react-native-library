import axios from 'axios';

//const baseURL = 'https://rallycoding.herokuapp.com';
const baseURL = 'https://ywonksstaging.herokuapp.com/api/v1';
const API = axios.create({ baseURL });

import { PropTypes } from 'prop-types';
type objType = PropTypes.func;

export default class APIManager {
	/**
	 *
	 * @param {end points of api} endPoint
	 * @param {methodType can be GET,POST,PUT or DELETE} methodType
	 * @param {Bundle} params
	 */
	static createPromise(endPoint: string, methodType: string, params: object) {
		let promise = null;
		if (methodType == 'GET') {
			promise = API.get(endPoint, { params });
		} else if (methodType == 'POST') {
			promise = API.post(endPoint, params);
		} else if (methodType == 'PUT') {
			promise = API.put(endPoint, params);
		} else if (methodType == 'DELETE') {
			promise = API.delete(endPoint, params);
		}

		return promise;
	}

	/**
	 *
	 * @param {end points of api} endPoint
	 * @param {methodType can be GET,POST,PUT or DELETE} methodType
	 * @param {Bundle} params
	 * @param {callback is to handle response. isSuccessful will be false if there is error.} callBackFx
	 */

	static getResponse = (endPoint: string, methodType: string, params: jsonObjParams, callBackFx: objType) => {
		const mPromise = APIManager.createPromise(endPoint, methodType, params);
		mPromise
			.then(response => {
				//cb = (isSuccessful, response);
				callBackFx(true, response.data);
			})
			.catch(error => {
				console.warn(JSON.stringify(error, null, 2));
				//cb = (isSuccessful, error);
				callBackFx(false, error);
			});

		return mPromise;
	};
}
