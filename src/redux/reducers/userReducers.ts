import {
  REQUEST_GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL
} from '../actions/actionTypes'

const initialState = {
  loading: false,
  data: [],
  error: null
}

const userReducers = (state = initialState, {type, payload}: any) => {
  switch (type) {
    case REQUEST_GET_USER:
      return {
        ...state,
        loading: true,
        error: null
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null
      }
    case GET_USER_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        error: true
      }
    default:
      return state
  }
}

export default userReducers