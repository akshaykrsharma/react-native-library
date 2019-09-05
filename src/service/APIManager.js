import axios from 'axios';
import {PropTypes} from 'prop-types';
import Strings from '../res/theme/Strings';

var APIObj = null;

const getAPIObj = () => {
  APIObj = axios.create({baseURL: Strings.baseURL});
  return APIObj;
};

type objType = PropTypes.func;

export default class APIManager {
  /**
   *
   * @param {end points of api} endPoint
   * @param {methodType can be GET,POST,PUT or DELETE} methodType
   * @param {Bundle} params
   */
  static get API() {
    if (APIObj) {
      return APIObj;
    }
    return getAPIObj();
  }
  static createPromise(endPoint: string, methodType: string, params: object) {
    let promise = null;
    if (methodType == 'GET') {
      promise = this.API.get(endPoint, {params});
    } else if (methodType == 'POST') {
      promise = this.API.post(endPoint, params);
    } else if (methodType == 'PUT') {
      promise = this.API.put(endPoint, params);
    } else if (methodType == 'DELETE') {
      promise = this.API.delete(endPoint, params);
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

  static getResponse = (
    endPoint: string,
    methodType: string,
    params: jsonObjParams,
    callBackFx: objType,
  ) => {
    const mPromise = APIManager.createPromise(endPoint, methodType, params);
    mPromise
      .then(response => {
        //cb = (isSuccessful, response);
        callBackFx(true, response.data);
      })
      .catch(error => {
        console.log(JSON.stringify(error, null, 2));
        //cb = (isSuccessful, error);
        callBackFx(false, error.response);
      });

    return mPromise;
  };
}
