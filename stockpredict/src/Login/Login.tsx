import React from 'react';
import { useDispatch } from 'react-redux';
import { setNewUser } from '../redux/actions/homeActions';

const Login = () => {
    const dispatch = useDispatch()
    const setUserName = (e: any) => {
        console.log("TS=====",e,e.target.value)
        dispatch(setNewUser(e.target.value))
    }
  return (
    <div>
      <header>
        <h1>Login</h1>
        <div>
            <label>UserName<input type='text' onChange={setUserName}/></label>
            
        </div>
            
      </header>
    </div>
  );
}

export default Login;
