import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { user, dispatch } = useContext(AuthContext);

    const payload = {
        name: 'Francisco',
    }

    const lastPath = localStorage.getItem('lastPath') || '/';


    const handleLogin = () => {

        const action = {
            //type:'[auth] login', tambien funcionaria
            type: types.login,
            payload
        }

        dispatch(action);
        history.replace(lastPath);
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
