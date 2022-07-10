import React from "react"
import {useDispatch, useSelector} from 'react-redux'
import { requestGetUserById } from "../../redux/actions/users"

const Home = () => {
  const dispatch = useDispatch()
  const users = useSelector((state: any) => state.userReducers?.data)

  return (<div>
    <h1>Home page</h1>
    <h1>Welcome, {users[0]?.name}</h1>
    <button onClick={() => dispatch(requestGetUserById(1))}>CLICK</button>
  </div> )
}

export default Home