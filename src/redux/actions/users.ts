import { BaseAction } from '../../models/users'
import {
  REQUEST_GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL
} from './actionTypes'

//USER
export const requestGetUserById = (value: any): BaseAction => {
  return {
    type: REQUEST_GET_USER,
    payload: value
  }
}

export const getUserByIdSuccess = (value: any): BaseAction => {
  return {
    type: GET_USER_SUCCESS,
    payload: value,
  }
}

export const getUserByIdFail = (value: any): BaseAction => {
  return {
    type: GET_USER_FAIL,
    payload: value,
  }
}
